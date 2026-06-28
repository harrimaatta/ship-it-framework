const principlesCopy = {
  title: "Principles",
  items: [
    {
      title: "Everything starts with Input.",
      body: [
        "Features.",
        "Bugs.",
        "Security issues.",
        "Customer requests.",
        "Technical debt.",
        "Anything requiring work becomes Input.",
      ],
    },
    {
      title: "Development creates value.",
      body: [
        "How you build software is your choice.",
        "Use Scrum.",
        "Use Kanban.",
        "Use AI.",
        "Use pair programming.",
        "Use whatever works.",
      ],
    },
    {
      title: "Validation builds trust.",
      body: [
        "Independent validation is the heart of the framework.",
        "If validation succeeds, ship it.",
        "If not, create new Input.",
      ],
    },
    {
      title: "Keep the framework minimal.",
      body: [
        "Ship It! intentionally defines as little as possible.",
        "Teams should own their own implementation.",
      ],
    },
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="principles-title"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function PrincipleItem({
  title,
  body,
}: {
  title: string;
  body: string[];
}) {
  return (
    <article className="space-y-5 border-t border-zinc-800 py-8">
      <h3 className="text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl">
        {title}
      </h3>
      <div className="space-y-2 text-xl leading-relaxed text-zinc-300">
        {body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default function Principles() {
  return (
    <SectionContainer>
      <div className="space-y-10">
        <h2
          id="principles-title"
          className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {principlesCopy.title}
        </h2>
        <div>
          {principlesCopy.items.map((principle) => (
            <PrincipleItem
              key={principle.title}
              title={principle.title}
              body={principle.body}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
