import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa"
import { FiMail, FiPhone } from "react-icons/fi"

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <h2 className="text-3xl font-semibold">Let’s talk</h2>
      <p className="mt-2 text-sm md:text-base text-[var(--muted)] max-w-2xl">
        Got a role, a project, or just want to say hi? I’m always open to a good conversation.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)]">
          <div className="flex items-center gap-3">
            <FiMail className="text-lg" />
            <a className="underline underline-offset-4" href="mailto:baskars739@gmail.com">
              baskars739@gmail.com
            </a>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <FiPhone className="text-lg" />
            <a className="underline underline-offset-4" href="tel:+918637632727">
              +91 863 763 2727
            </a>
          </div>

          <div className="mt-6 text-sm text-[var(--muted)]">
            You can also find me here:
          </div>

          <div className="mt-3 flex items-center gap-4 text-xl">
            <a
              className="hover:opacity-80 transition"
              href="https://www.linkedin.com/in/baskar17/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:opacity-80 transition"
              href="https://www.behance.net/baskars1"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
            >
              <FaBehance />
            </a>
            <a
              className="hover:opacity-80 transition"
              href="https://www.instagram.com/baskar__17"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition hover:shadow-[0_14px_30px_rgba(20,20,20,0.06)]">
          <div className="font-semibold">Quick note</div>
          <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
            If you’re messaging about a role, sharing the location + timeline helps a lot.
            Either way, I’ll get back to you.
          </p>

          <div className="mt-6 rounded-xl bg-[color:var(--surface-muted)] p-4">
            <div className="text-sm font-semibold">Open to</div>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Product / UX roles, freelance projects, and fun collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
