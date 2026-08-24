export default function RiskReversal({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border-2 border-brick/30 bg-brick/5 p-6 sm:p-8">
      <p className="text-xl font-bold text-navy">{heading}</p>
      <p className="mt-3 text-navy/80">{body}</p>
    </div>
  );
}
