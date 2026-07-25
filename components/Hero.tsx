import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="bg-grid-theme bg-grid bg-grid-mask absolute inset-0" aria-hidden="true" />
      <div className="hero-glow-top" aria-hidden="true" />
      <div className="hero-glow-bottom" aria-hidden="true" />

      <div className="hero-inner">
      

        
        <Reveal delayMs={160}>
          <h1 className="hero-title text-silver-matte">Open to new roles and contract work</h1>
        </Reveal>

        <Reveal delayMs={240}>
          <p className="hero-lede">
            Tumelo Moletsane is a frontend and full stack engineer who takes
            products from a rough idea to a system in production, then
            stays close enough to keep it running well.
          </p>
        </Reveal>

        <Reveal delayMs={320}>
          <div className="hero-actions">
            <a href="#work" className="btn-light w-full sm:w-auto">
              View selected work
            </a>
            <a href="#contact" className="btn-dark w-full sm:w-auto">
              Start a project &rarr;
            </a>
          </div>
        </Reveal>
      </div>

 
    </section>
  );
}
