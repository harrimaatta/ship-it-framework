const faqCopy = {
  title: "FAQ",
  items: [
    {
      question: "Does Ship It! replace Scrum?",
      answer: ["No.", "It works perfectly alongside Scrum."],
    },
    {
      question: "Does Ship It! require Kanban?",
      answer: ["No.", "Use whatever helps your team."],
    },
    {
      question: "Can AI perform Development?",
      answer: ["Yes."],
    },
    {
      question: "Can AI perform Validation?",
      answer: ["Yes."],
    },
    {
      question: "Can one person validate their own work?",
      answer: [
        "Sometimes.",
        "Independent validation is recommended whenever possible.",
      ],
    },
    {
      question: "Is this a process?",
      answer: ["Yes.", "A very small one."],
    },
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="faq-title"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string[];
}) {
  return (
    <article className="space-y-4 border-t border-zinc-800 py-8">
      <h3 className="text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl">
        {question}
      </h3>
      <div className="space-y-2 text-xl leading-relaxed text-zinc-300">
        {answer.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default function FAQ() {
  return (
    <SectionContainer>
      <div className="space-y-10">
        <h2
          id="faq-title"
          className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {faqCopy.title}
        </h2>
        <div>
          {faqCopy.items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
