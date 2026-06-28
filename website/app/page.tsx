import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import OneRule from "@/components/OneRule";
import Principles from "@/components/Principles";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Framework />
      <OneRule />
      <Principles />
    </main>
  );
}
