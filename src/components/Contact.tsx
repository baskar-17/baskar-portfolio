import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa"
import { FiMail, FiPhone } from "react-icons/fi"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 reveal">
      <h2 className="section-title">Contact</h2>
      <p className="mt-2 text-sm md:text-base section-lead">
        If you are hiring for a Senior UI/UX Designer, Product Designer, or similar role, I would be glad to connect.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition hover:shadow-[var(--shadow-strong)]">
          <div className="flex items-center gap-3 text-[var(--ink)]">
            <FiMail className="text-lg text-[var(--accent)]" />
            <a className="underline underline-offset-4 hover:text-[var(--accent)] transition" href="mailto:baskars739@gmail.com">
              baskars739@gmail.com
            </a>
          </div>

          <div className="mt-4 flex items-center gap-3 text-[var(--ink)]">
            <FiPhone className="text-lg text-[var(--accent)]" />
            <a className="underline underline-offset-4 hover:text-[var(--accent)] transition" href="tel:+918637632727">
              +91 863 763 2727
            </a>
          </div>

          <div className="mt-6 text-sm text-[var(--muted)]">
            You can also find me here:
          </div>

          <div className="mt-3 flex items-center gap-4 text-xl text-[var(--ink)]">
            <a
              className="hover:text-[var(--accent)] transition"
              href="https://www.linkedin.com/in/baskar17/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-[var(--accent)] transition"
              href="https://www.behance.net/baskars1"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
            >
              <FaBehance />
            </a>
            <a
              className="hover:text-[var(--accent)] transition"
              href="https://www.instagram.com/baskar__17"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition hover:shadow-[var(--shadow-strong)]">
          <div className="font-semibold text-[var(--ink)]">A small note</div>
          <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
            If you are reaching out about a role, sharing team context, expectations, and timeline helps me respond faster.
          </p>

          <div className="mt-6 rounded-xl bg-[color:var(--surface-muted)] p-4">
            <div className="text-sm font-semibold text-[var(--ink)]">Current focus</div>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Senior product design roles with strong cross-functional collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
