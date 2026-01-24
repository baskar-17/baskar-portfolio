import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-10 border-t border-[color:var(--border)] overflow-hidden">
     

      <div className="relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sm text-[var(--muted)]">
            <div className="font-medium text-[var(--ink)]">
              Thanks for stopping by 👋
            </div>
            <div className="mt-1">If you’re building something cool, I’d love to hear about it.</div>
            <div className="mt-3">© {year} Baskar</div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a className="underline underline-offset-4" href="mailto:baskars739@gmail.com">
              baskars739@gmail.com
            </a>
            <a className="underline underline-offset-4" href="tel:+918637632727">
              +91 863 763 2727
            </a>

            <div className="flex items-center gap-4 pt-2 text-lg">
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
        </div>
      </div>
    </footer>
  )
}
