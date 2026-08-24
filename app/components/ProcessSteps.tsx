type Step = { title: string; body: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
            {i + 1}
          </div>
          <p className="mt-3 font-semibold text-navy">{step.title}</p>
          <p className="mt-1 text-sm text-navy/70">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
