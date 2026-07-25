import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="marquee-section">
      <p className="marquee-heading">Tools of the trade</p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          <span className="marquee-group">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
          <span className="marquee-group" aria-hidden="true">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
