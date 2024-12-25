"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Droplet, RefreshCw, ArrowDown, ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";

interface Raindrop {
  id: string;
  number: number;
  x: number;
  y: number;
  delay: number;
  revealed: boolean;
  caught: boolean;
}

interface GuessGame {
  target: string;
  current: string;
  isPlaying: boolean;
  minBound: number;
  maxBound: number;
}

export default function RaindropGame() {
  const router = useRouter();
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);
  const [targetInput, setTargetInput] = useState<string>("");
  const [waterLevel, setWaterLevel] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [showBoredPrompt, setShowBoredPrompt] = useState<boolean>(false);
  const [guessGame, setGuessGame] = useState<GuessGame>({
    target: "",
    current: "",
    isPlaying: false,
    minBound: 1000000000,
    maxBound: 9999999999,
  });
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState<boolean>(false);

  const raindropCountRef = useRef<number>(0);
  const screenWidthRef = useRef<number>(window.innerWidth);
  const screenHeightRef = useRef<number>(window.innerHeight);
  const lastConfirmTimeRef = useRef<number>(Date.now());
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const isOverlapping = (
    newDrop: Raindrop,
    existingDrops: Raindrop[]
  ): boolean => {
    return existingDrops.some((drop) => {
      const horizontalDistance = Math.abs(newDrop.x - drop.x);
      const verticalDistance = Math.abs(newDrop.y - drop.y);
      return horizontalDistance < 100 && verticalDistance < 100;
    });
  };

  const generateRaindrops = (): void => {
    const newRaindrops: Raindrop[] = [];
    const numDrops = 10;
    const maxAttempts = 50;

    while (newRaindrops.length < numDrops) {
      const drop: Raindrop = {
        id: `drop-${raindropCountRef.current++}`,
        number: generateRandomNumber(0, 9),
        x: Math.random() * (screenWidthRef.current - 100),
        y: -100,
        delay: Math.random() * 2,
        revealed: false,
        caught: false,
      };

      if (!isOverlapping(drop, newRaindrops)) {
        newRaindrops.push(drop);
      }

      if (raindropCountRef.current > maxAttempts) break;
    }

    setRaindrops((prevRaindrops) => [...prevRaindrops, ...newRaindrops]);
  };

  useEffect(() => {
    const handleResize = (): void => {
      screenWidthRef.current = window.innerWidth;
      screenHeightRef.current = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const generateInterval = setInterval(generateRaindrops, 2000);

    const waterLevelInterval = setInterval(() => {
      setWaterLevel((prev) => {
        const newLevel = prev + 10;

        if (newLevel >= 60) {
          setShowBoredPrompt(true);
          setShowWarning(true);
        } else {
          setShowWarning(false);
        }

        if (
          newLevel >= 100 ||
          Date.now() - lastConfirmTimeRef.current > 5 * 60 * 1000
        ) {
          setGameOver(true);
          clearInterval(generateInterval);
          clearInterval(waterLevelInterval);
        }

        return newLevel;
      });
    }, 5000);

    return () => {
      clearInterval(generateInterval);
      clearInterval(waterLevelInterval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!confirmButtonRef.current) return;

    const buttonRect = confirmButtonRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const buttonCenterX = buttonRect.x + buttonRect.width / 2;
    const buttonCenterY = buttonRect.y + buttonRect.height / 2;
    const distance = Math.sqrt(
      Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
    );

    if (distance < 100) {
      const moveX = Math.random() * 200 - 100;
      const moveY = Math.random() * 200 - 100;

      const newX = Math.min(
        Math.max(moveX, -buttonRect.x),
        window.innerWidth - buttonRect.width
      );
      const newY = Math.min(
        Math.max(moveY, -buttonRect.y),
        window.innerHeight - buttonRect.height
      );

      setButtonPosition({ x: newX, y: newY });
    }
  };

  const revealAndAddNumber = (drop: Raindrop): void => {
    if (gameOver) return;

    setRaindrops(
      raindrops.map((r) => (r.id === drop.id ? { ...r, revealed: true } : r))
    );

    setTargetInput((prev) =>
      prev ? `${prev}${drop.number}` : `${drop.number}`
    );

    setRaindrops(raindrops.filter((r) => r.id !== drop.id));
  };

  const resetGame = (): void => {
    setTargetInput("");
    setWaterLevel(0);
    setGameOver(false);
    setRaindrops([]);
    lastConfirmTimeRef.current = Date.now();
  };

  const confirmNumbers = (): void => {
    if (gameOver) return;

    setWaterLevel(0);
    lastConfirmTimeRef.current = Date.now();
    setTargetInput("");
  };

  const generateRandomPhone = (): string => {
    return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
  };

  const startGuessGame = () => {
    const initialGuess = generateRandomPhone();
    setGuessGame({
      target: initialGuess,
      current: generateRandomPhone(),
      isPlaying: true,
      minBound: 1000000000,
      maxBound: 9999999999,
    });
  };

  const handleGuess = (isLesser: boolean) => {
    const currentNum = parseInt(guessGame.current);

    if (isLesser) {
      setGuessGame((prev) => ({
        ...prev,
        maxBound: currentNum,
        current: Math.floor(
          Math.random() * (currentNum - prev.minBound) + prev.minBound
        ).toString(),
      }));
    } else {
      setGuessGame((prev) => ({
        ...prev,
        minBound: currentNum,
        current: Math.floor(
          Math.random() * (prev.maxBound - currentNum) + currentNum
        ).toString(),
      }));
    }
  };

  const handlePhoneConfirm = () => {
    setIsPhoneConfirmed(true);
  };

  const handlePhoneCancel = () => {
    router.push("/");
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, skyblue, lightblue)",
      }}
      onMouseMove={handleMouseMove}
    >
      {!guessGame.isPlaying ? (
        <>
          {/* Move controls to bottom */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 z-50">
            <input
              type="text"
              value={targetInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTargetInput(e.target.value)
              }
              placeholder="Phone number"
              className="flex-grow p-2 border rounded bg-white/70 text-black"
              disabled
            />
            <motion.button
              ref={confirmButtonRef}
              onClick={confirmNumbers}
              className="p-2 bg-green-500 text-white rounded whitespace-nowrap"
              animate={{
                x: buttonPosition.x,
                y: buttonPosition.y,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Confirm
            </motion.button>
            <button
              onClick={resetGame}
              className="p-2 bg-blue-500 text-white rounded flex items-center whitespace-nowrap"
            >
              <RefreshCw className="mr-2" size={20} />
              Reset
            </button>
          </div>

          {[0.1, 0.4, 0.7].map((position: number, index: number) => (
            <div
              key={index}
              className="absolute top-0 bg-gray-200 rounded-full opacity-80"
              style={{
                left: `${position * 100}%`,
                width: "250px",
                height: "120px",
                transform: "translateX(-50%)",
                filter: "blur(5px)",
              }}
            />
          ))}

          {raindrops.map((drop: Raindrop) => (
            <motion.div
              key={drop.id}
              initial={{
                y: drop.y,
                x: drop.x,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                y: screenHeightRef.current,
                scale: [1, 1.1, 1],
                opacity: [1, 0.7, 0],
              }}
              transition={{
                duration: 5,
                delay: drop.delay || 0,
                ease: "linear",
              }}
              className="absolute cursor-pointer"
              style={{
                width: "60px",
                height: "80px",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                onClick={() => revealAndAddNumber(drop)}
                className="relative"
              >
                <Droplet
                  size={60}
                  strokeWidth={1.5}
                  className="text-blue-500"
                />
              </div>
            </motion.div>
          ))}

          <div
            className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-500"
            style={{
              height: `${waterLevel}%`,
            }}
          />

          {showWarning && !gameOver && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse z-50">
              <h2 className="text-2xl font-bold">Warning!</h2>
              <p>Water level is getting high! Hurry up!</p>
            </div>
          )}

          {showBoredPrompt && !gameOver && (
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
              <p className="text-lg font-bold mb-2 text-blue-500">
                Are you bored?
              </p>
              <button
                onClick={startGuessGame}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center z-50">
              <div className="text-white text-4xl font-bold">Time is up!</div>
            </div>
          )}
        </>
      ) : isPhoneConfirmed ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-4xl font-bold text-white">
            Phone number confirmed!
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-4xl font-bold mb-8">+{guessGame.current}</div>
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => handleGuess(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl flex items-center"
            >
              Less <ArrowDown className="ml-2" />
            </button>
            <button
              onClick={() => handleGuess(false)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl flex items-center"
            >
              Greater <ArrowUp className="ml-2" />
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePhoneConfirm}
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl"
            >
              Confirm
            </button>
            <button
              onClick={handlePhoneCancel}
              className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};