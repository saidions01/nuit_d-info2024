// pages/human.tsx
import React from 'react';
import Head from 'next/head';
import { AnatomyDiagram } from '@/components/AnatomyDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HumanPage() {
  return (
    <div className="min-h-screen bg-background py-10">
      <Head>
        <title>Human Anatomy Explorer</title>
        <meta name="description" content="Interactive human body diagram" />
      </Head>

      <main className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Human Body Interactive Diagram
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnatomyDiagram />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}