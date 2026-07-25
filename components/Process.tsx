import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-page">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-kicker">How a project runs</span>
              <h2 className="section-title">Scope, build, operate.</h2>
            </div>
            <p className="section-lede">
              The same three stages on every project, whether it is a
              weekend prototype or a system multiple teams depend on.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.index} delayMs={index * 100}>
              <div className="process-step">
                <span className="process-index">{step.index}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-copy">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
