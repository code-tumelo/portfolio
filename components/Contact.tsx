import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { email } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <div className="premium-depth-card mx-auto max-w-4xl text-center">
            <div className="bg-grid-theme bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="contact-card-inner">
              <h2 className="contact-title">
                Let&apos;s work together.
              </h2>
              <p className="contact-lede">
                Currently taking on one or two new engagements. Tell me
                about your product, the timeline and the stack you are on.
                A reply usually goes out within a day.
              </p>

              <div className="contact-actions mb-12">
                <a href={`mailto:${email}`} className="btn-light w-full sm:w-auto">
                  {email}
                </a>
                <a href="#" className="btn-dark w-full sm:w-auto">
                  Download resume
                </a>
              </div>

              <div className="mx-auto max-w-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
