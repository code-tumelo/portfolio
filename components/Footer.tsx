import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <a href="#top" className="nav-brand">
          Tumelo Moletsane<span className="nav-brand-mark">.</span>
        </a>

        <nav className="footer-links" aria-label="Social">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="footer-link">
              {social.label}
            </a>
          ))}
        </nav>

        <p className="footer-fine">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
