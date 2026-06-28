import BrandMark from "@/components/BrandMark";

const heroCopy = {
  title: "Ship It!",
  subtitle: "The minimal software delivery framework.",
  motto: ["Build.", "Validate.", "Ship."],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="w-full">{children}</div>
    </section>
  );
}

function TextStack({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl space-y-8">{children}</div>;
}

function HeroMotto({ words }: { words: string[] }) {
  return (
    <p
      aria-label={words.join(" ")}
      className="flex flex-col gap-1 font-mono text-xl leading-relaxed text-zinc-300 sm:flex-row sm:gap-4 sm:text-2xl"
    >
      {words.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </p>
  );
}

export default function Hero() {
  return (
    <SectionContainer>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="flex justify-center lg:justify-start">
          <BrandMark
            width={180}
            height={180}
            className="h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
          />
        </div>
        <TextStack>
          <div className="space-y-6">
            <h1
              id="hero-title"
              className="text-6xl font-semibold leading-none text-zinc-50 sm:text-7xl lg:text-8xl"
            >
              {heroCopy.title}
            </h1>
            <p className="max-w-2xl text-2xl leading-snug text-zinc-300 sm:text-3xl">
              {heroCopy.subtitle}
            </p>
          </div>
          <HeroMotto words={heroCopy.motto} />
        </TextStack>
      </div>
    </SectionContainer>
  );
}
