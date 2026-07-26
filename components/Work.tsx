import Reveal from "./Reveal";
import { projects, type ProjectTone } from "@/lib/data";

const toneClass: Record<ProjectTone, string> = {
  violet: "project-card-violet",
  cyan: "project-card-cyan",
  orange: "project-card-orange",
  emerald: "project-card-emerald",
};

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-kicker">PROJECTS</span>
              <h2 className="section-title">Recent projects.</h2>
            </div>
            
          </div>
        </Reveal>

        {projects.length === 0 ? (
          <div className="work-empty">
            <p className="work-empty-title">No projects published yet</p>
            <p className="work-empty-copy">
              Add an entry to the projects array in lib/data.ts to feature a
              case study here.
            </p>
          </div>
        ) : (
          <div className="work-grid">
            {projects.map((project, index) => (
              <Reveal key={project.id} delayMs={(index % 2) * 100}>
                <a
                  href={project.href}
                  className={`project-card group ${toneClass[project.tone]}`}
                >
                  <div className="project-card-glow" aria-hidden="true" />
                  <div className="project-card-top">
                    <span className="project-card-tag">{project.tag}</span>
                    <span className="project-card-arrow" aria-hidden="true">
                      &#8599;
                    </span>
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-copy">{project.summary}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
