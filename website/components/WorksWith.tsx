const worksWithCopy = {
  title: "Works With",
  items: [
    ["Scrum?", "Yeah."],
    ["Kanban?", "Yeah."],
    ["GitHub?", "Yeah."],
    ["GitLab?", "Yeah."],
    ["Azure DevOps?", "Yeah."],
    ["Jira?", "Yeah."],
    ["Linear?", "Yeah."],
    ["AI?", "Absolutely."],
    ["Whiteboards?", "Sure."],
    ["Sticky notes?", "Why not?"],
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="works-with-title"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function CompatibilityItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <li className="border-t border-zinc-800 py-5">
      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
        <span className="text-2xl leading-snug text-zinc-100">{question}</span>
        <span className="font-mono text-xl leading-relaxed text-zinc-400">
          {answer}
        </span>
      </div>
    </li>
  );
}

function CompatibilityList() {
  return (
    <ul>
      {worksWithCopy.items.map(([question, answer]) => (
        <CompatibilityItem
          key={question}
          question={question}
          answer={answer}
        />
      ))}
    </ul>
  );
}

export default function WorksWith() {
  return (
    <SectionContainer>
      <div className="space-y-10">
        <h2
          id="works-with-title"
          className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {worksWithCopy.title}
        </h2>
        <CompatibilityList />
      </div>
    </SectionContainer>
  );
}
