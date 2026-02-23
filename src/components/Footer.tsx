import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-16 pb-32 md:py-24 border-t border-[color:var(--border)] overflow-hidden reveal">


      <div className="relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sm text-[var(--muted)]">
            <div className="font-medium text-[var(--ink)]">
              Thanks for reviewing my work.
            </div>
            <div className="mt-1">If there is a role fit, I am happy to continue the conversation.</div>
            <div className="mt-3">© {year} Baskar</div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[var(--ink)]">
            <a className="underline underline-offset-4 hover:text-[var(--accent)] transition" href="mailto:baskars739@gmail.com">
              baskars739@gmail.com
            </a>
            <a className="underline underline-offset-4 hover:text-[var(--accent)] transition" href="tel:+918637632727">
              +91 863 763 2727
            </a>

            <div className="flex items-center gap-4 pt-2 text-lg">
              <motion.a
                whileHover={{ scale: 1.15, rotate: [-2, 2, -1, 0] }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
                href="https://www.linkedin.com/in/baskar17/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: [-2, 2, -1, 0] }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
                href="https://www.behance.net/baskars1"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
              >
                <FaBehance />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: [-2, 2, -1, 0] }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
                href="https://www.instagram.com/baskar__17"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
