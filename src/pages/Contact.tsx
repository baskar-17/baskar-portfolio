import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa"
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle } from "react-icons/fi"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "fulltime",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error")
      setErrorMessage("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    let dbSaved = false;

    // 1. Write submission to Firebase Firestore
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        name: formData.name,
        email: formData.email,
        enquiryType: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString(),
        source: "portfolio",
        status: "new",
      });
      dbSaved = true;
      console.log("Contact lead saved to Firestore successfully!");
    } catch (dbError: any) {
      console.error("Firebase Firestore write error:", dbError);
    }

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    // 2. Trigger Email Notification via EmailJS if credentials exist
    if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailjsServiceId,
            template_id: emailjsTemplateId,
            user_id: emailjsPublicKey,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              enquiry_type: formData.subject,
              message: formData.message,
              subject: `New Portfolio Message: ${formData.subject} from ${formData.name}`,
            },
          }),
        })

        if (response.ok) {
          setSubmitStatus("success")
          setFormData({ name: "", email: "", subject: "fulltime", message: "" })
        } else {
          const errorText = await response.text()
          throw new Error(errorText || "Failed to trigger email notification.")
        }
      } catch (emailError: any) {
        console.error("EmailJS notification error:", emailError)
        if (dbSaved) {
          setSubmitStatus("success")
          setFormData({ name: "", email: "", subject: "fulltime", message: "" })
        } else {
          setSubmitStatus("error")
          setErrorMessage(emailError.message || "Failed to send message. Please try again.")
        }
      } finally {
        setIsSubmitting(false)
      }
      return
    }

    // 3. Trigger Email Notification via Web3Forms if key exists
    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `Portfolio Contact: ${formData.subject} - ${formData.name}`,
            message: formData.message,
            from_name: "Baskar Portfolio",
          }),
        })

        const result = await response.json()

        if (response.status === 200) {
          setSubmitStatus("success")
          setFormData({ name: "", email: "", subject: "fulltime", message: "" })
        } else {
          throw new Error(result.message || "Failed to trigger email notification.")
        }
      } catch (emailError: any) {
        console.error("Email notification error:", emailError)
        // If it was already saved in DB, we still show success to user
        if (dbSaved) {
          setSubmitStatus("success")
          setFormData({ name: "", email: "", subject: "fulltime", message: "" })
        } else {
          setSubmitStatus("error")
          setErrorMessage(emailError.message || "Failed to send message. Please try again.")
        }
      } finally {
        setIsSubmitting(false)
      }
      return
    }

    // 4. Fallback: if no mailer key is set, determine status by DB write
    setIsSubmitting(false)
    if (dbSaved) {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "fulltime", message: "" })
    } else {
      setSubmitStatus("error")
      setErrorMessage("Could not connect to database or mailer. Please check your connection.")
    }
  }

  return (
    <div className="min-h-screen text-[var(--ink)] bg-transparent pt-20">
      <main className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                // Get in touch
              </p>
              <h1 className="mt-4 text-4xl font-bricolage font-bold tracking-tight text-white md:text-5xl leading-tight">
                Let&apos;s build something <span className="font-mono text-emerald-400 font-semibold tracking-normal text-[0.8em] inline-block px-2.5 py-0.5 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">simple</span>.
              </h1>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-[var(--muted)] font-geist">
                If you are hiring for a Senior UI/UX Designer, Product Designer, or have a complex workflow design problem you need solved, I would be glad to connect.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4 pt-6 border-t border-[color:var(--border)] reveal reveal-delay-1">
              {/* Email */}
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition hover:shadow-[var(--shadow-soft)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-muted)] text-[var(--accent)] flex items-center justify-center shrink-0 border border-[color:var(--border)]">
                  <FiMail className="text-lg" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] block mb-1">Email</span>
                  <a href="mailto:baskars739@gmail.com" className="text-base font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition block truncate">
                    baskars739@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition hover:shadow-[var(--shadow-soft)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-muted)] text-[var(--accent)] flex items-center justify-center shrink-0 border border-[color:var(--border)]">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] block mb-1">Phone</span>
                  <a href="tel:+918637632727" className="text-base font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition block">
                    +91 8637632727
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition hover:shadow-[var(--shadow-soft)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-muted)] text-[var(--accent)] flex items-center justify-center shrink-0 border border-[color:var(--border)]">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] block mb-1">Location</span>
                  <span className="text-base font-semibold text-[var(--ink)] block">
                    Chennai, India
                  </span>
                </div>
              </div>
            </div>

            {/* Current Focus Note */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 reveal reveal-delay-2">
              <div className="text-sm font-semibold text-[var(--ink)]">Current focus</div>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Senior product design roles with strong cross-functional collaboration. Translating dense user workflows into clean, interactive screens.
              </p>
              
              <div className="mt-5 pt-5 border-t border-[color:var(--border)] flex items-center gap-4 text-xl text-[var(--ink)]">
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
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 reveal reveal-delay-1">
            <AnimatePresence mode="wait">
              {submitStatus !== "success" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-[var(--shadow-soft)]"
                >
                  <h2 className="text-lg font-bricolage font-bold text-white mb-6 border-b border-[color:var(--border)] pb-4 uppercase tracking-wider">
                    // Send a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] focus:border-[var(--accent)] outline-none transition text-[var(--ink)] text-sm font-geist"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] focus:border-[var(--accent)] outline-none transition text-[var(--ink)] text-sm font-geist"
                      />
                    </div>

                    {/* Enquiry Type */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                        Subject / Reason *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] focus:border-[var(--accent)] outline-none transition text-sm text-[var(--ink)] font-geist"
                      >
                        <option value="fulltime">Full-time opportunity</option>
                        <option value="freelance">Freelance project</option>
                        <option value="contract">Contract opportunity</option>
                        <option value="collaboration">Product collaboration</option>
                        <option value="networking">Just saying hello</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me a little about what you'd like to discuss."
                        className="w-full p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] focus:border-[var(--accent)] outline-none transition resize-y text-[var(--ink)] text-sm font-geist"
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 text-red-600 text-sm border border-red-500/20 font-mono text-xs">
                        <FiAlertCircle className="text-lg shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 flex items-center justify-center rounded-xl bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 disabled:opacity-50 transition-colors shadow-sm cursor-pointer"
                    >
                      {isSubmitting ? "SENDING..." : "SEND_MESSAGE"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-12 text-center shadow-[var(--shadow-soft)] flex flex-col items-center justify-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                    <FiCheckCircle className="text-3xl" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] mb-2">
                    Message sent successfully!
                  </h2>
                  <p className="text-[var(--muted)] mb-8 max-w-md">
                    Thank you for reaching out. Your message has been received, and I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="h-11 px-6 rounded-full border border-[color:var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  )
}
