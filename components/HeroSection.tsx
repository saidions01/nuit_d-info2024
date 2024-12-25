"use client";

import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-screen px-10  pt-[140px] flex">
      <section className="lg:w-[35vw] ">
        <h1 className="text-4xl">Bienvenue sur AquaEcho</h1>
        <p>
          Découvrez les liens fascinants entre le corps humain et l’océan.
          Explorez comment ces deux mondes se ressemblent et s’entrelacent à
          travers des comparaisons fascinantes et des visualisations
          captivantes.
        </p>
        <Button>Explorer</Button>
      </section>
      <Image src={"/images/turtle.png"} width={350} height={200} alt="turtle" />
    </div>
  );
};

export default HeroSection;
