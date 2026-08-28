import { useState } from "react"
import { ArrowRight, AlertTriangle, CheckCircle, Info } from "lucide-react"

export default function FrictionSandbox() {
  const [friction, setFriction] = useState(100)

  // Determine stage based on slider
  const getStage = () => {
    if (friction >= 70) return "high"
    if (friction >= 30) return "medium"
    return "optimized"
  }

  const stage = getStage()

  return (
    <div className="glass-card bg-white/50 border border-black/[0.06] p-6 md:p-8 rounded-3xl w-full shadow-[0_16px_48px_rgba(24,18,12,0.03)] my-12 animate-[fadeSlideUp_0.8s_ease_0.8s_both] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-black/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left text: The slider and description */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              // Interactive Sandbox
            </span>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold tracking-tight text-black mt-1">
              UX Friction <span className="font-mono text-[#E25A3C] font-semibold tracking-normal text-[0.8em] inline-block px-2.5 py-0.5 border border-[#E25A3C]/20 bg-[#E25A3C]/5 rounded-xl">Solver</span>
            </h2>
          </div>

          <p className="text-xs md:text-sm text-black/60 leading-relaxed font-geist">
            Drag the slider to experience how structural hierarchy, breathing room, and cognitive load management transform a cluttered interface into a conversion engine.
          </p>

          {/* The Slider Control */}
          <div className="space-y-3 bg-black/[0.01] border border-black/5 rounded-2xl p-5">
            <div className="flex items-center justify-between text-xs font-mono font-medium">
              <span className="text-black/50">Cognitive Load</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase ${
                stage === "high" 
                  ? "bg-red-500/10 text-red-600 border border-red-500/20" 
                  : stage === "medium"
                  ? "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                  : "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
              }`}>
                {friction}% Friction
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={friction}
              onChange={(e) => setFriction(Number(e.target.value))}
              className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black hover:accent-black/80 transition-all"
            />

            <div className="flex justify-between text-[10px] font-mono text-black/40 pt-1">
              <span>Optimized (0%)</span>
              <span>Raw Layout (100%)</span>
            </div>
          </div>

          {/* Current Critique Annotation Box */}
          <div className={`p-4 rounded-2xl border transition-all duration-500 ${
            stage === "high"
              ? "bg-red-500/[0.03] border-red-500/15 text-red-800"
              : stage === "medium"
              ? "bg-amber-500/[0.03] border-amber-500/15 text-amber-800"
              : "bg-emerald-500/[0.03] border-emerald-500/15 text-emerald-800"
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1.5 font-mono">
              {stage === "high" && (
                <>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  High Visual Friction
                </>
              )}
              {stage === "medium" && (
                <>
                  <Info className="h-4 w-4 text-amber-500" />
                  Standard Template
                </>
              )}
              {stage === "optimized" && (
                <>
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  Zero Friction Design
                </>
              )}
            </h4>
            <p className="text-[11px] md:text-xs leading-relaxed font-geist">
              {stage === "high" && 
                "No visual hierarchy, excessive borders, poor color contrast, and competing buttons make it hard to focus. Users abandon checkout."}
              {stage === "medium" && 
                "Spacing is corrected, but elements lack secondary grouping. Primary actions don't stand out, leading to average conversion rates."}
              {stage === "optimized" && 
                "Breathing room established, typography prioritized, high contrast applied, and interactive feedback highlights clear progression paths."}
            </p>
          </div>
        </div>

        {/* Right card: The morphing UI preview */}
        <div className="lg:col-span-7 flex justify-center py-6">
          <div className="w-full max-w-sm transition-all duration-500 relative">
            
            {/* Morphing Component Card */}
            <div className={`transition-all duration-500 border rounded-3xl ${
              stage === "high"
                ? "p-2 bg-neutral-900 border-yellow-600/60 shadow-lg text-neutral-400 space-y-1.5"
                : stage === "medium"
                ? "p-5 bg-stone-100 dark:bg-stone-900 border-stone-200 dark:border-stone-800 shadow-xl text-stone-700 dark:text-stone-300 space-y-4"
                : "p-7 glass-card bg-white/90 dark:bg-[#121214]/90 border-black/[0.06] dark:border-white/[0.06] shadow-2xl text-black dark:text-white space-y-5"
            }`}>
              
              {/* Card Header */}
              <div className={`flex items-center justify-between transition-all ${
                stage === "high" ? "border-b border-yellow-700/30 pb-1" : "pb-0"
              }`}>
                <div>
                  <h3 className={`font-semibold tracking-tight transition-all ${
                    stage === "high" 
                      ? "text-xs text-white" 
                      : stage === "medium" 
                      ? "text-base text-stone-900 dark:text-stone-100 font-bold" 
                      : "text-lg font-bricolage font-bold text-black dark:text-white"
                  }`}>
                    {stage === "high" ? "USER CHECKOUT PANEL v1.2" : "Secure Checkout"}
                  </h3>
                  {stage !== "high" && (
                    <p className={`text-[10px] ${stage === "medium" ? "text-stone-500" : "text-black/50 dark:text-white/50"} font-mono`}>
                      Invoice ID: #SG-9842
                    </p>
                  )}
                </div>
                {stage === "optimized" ? (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#E25A3C]/10 text-[#E25A3C] border border-[#E25A3C]/20 uppercase tracking-wide font-mono animate-pulse">
                    Live
                  </span>
                ) : stage === "medium" ? (
                  <span className="text-[10px] text-stone-500 font-mono">10:04 AM</span>
                ) : (
                  <span className="text-[8px] bg-red-600 text-white px-1 font-mono">WARN_DB</span>
                )}
              </div>

              {/* Price Details Block */}
              <div className={`transition-all rounded-2xl ${
                stage === "high"
                  ? "p-1.5 bg-neutral-800 border-2 border-dashed border-red-500/50"
                  : stage === "medium"
                  ? "p-4 bg-stone-200/50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
                  : "p-4 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`font-geist ${
                    stage === "high" 
                      ? "text-[10px] font-bold text-neutral-400" 
                      : stage === "medium"
                      ? "text-xs text-stone-600 dark:text-stone-400"
                      : "text-xs text-black/75 dark:text-white/75"
                  }`}>
                    SportsGravy Premium
                  </span>
                  <span className={`font-semibold ${
                    stage === "high" 
                      ? "text-xs text-white" 
                      : stage === "medium"
                      ? "text-sm text-stone-900 dark:text-stone-100 font-bold"
                      : "text-sm text-black dark:text-white"
                  }`}>
                    $49.00<span className={`text-[10px] font-normal ${stage === "medium" ? "text-stone-500" : "text-black/50 dark:text-white/50"}`}>/mo</span>
                  </span>
                </div>
                {stage !== "high" && (
                  <div className={`mt-2 pt-2 border-t flex justify-between text-[11px] font-mono ${
                    stage === "medium" ? "border-stone-300 dark:border-stone-700 text-stone-500" : "border-black/5 dark:border-white/5 text-black/50 dark:text-white/50"
                  }`}>
                    <span>Tax & processing</span>
                    <span>$0.00</span>
                  </div>
                )}
              </div>

              {/* Cognitive Progress Indicator */}
              {stage === "optimized" && (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-medium text-[#E25A3C]">
                    <span>Purchase progression rate</span>
                    <span>+35%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E25A3C] rounded-full w-[89%]" />
                  </div>
                </div>
              )}

              {/* Form Input fields */}
              <div className="space-y-2">
                <label className={`block font-medium ${
                  stage === "high" 
                    ? "text-[9px] font-bold text-red-500 uppercase font-mono" 
                    : stage === "medium"
                    ? "text-xs text-stone-600 dark:text-stone-400 font-medium"
                    : "text-xs font-mono text-black/70 dark:text-white/70"
                }`}>
                  Cardholder Name
                </label>
                <input
                  type="text"
                  readOnly
                  value="Baskar S."
                  className={`w-full text-xs outline-none transition-all ${
                    stage === "high"
                      ? "p-1 bg-red-950/20 text-red-300 border border-red-700 font-mono"
                      : stage === "medium"
                      ? "p-3 bg-stone-200/50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-750 rounded-xl text-stone-800 dark:text-stone-200"
                      : "p-3 bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 rounded-xl text-black dark:text-white font-geist"
                  }`}
                />
              </div>

              {/* Action Buttons with visual hierarchy */}
              <div className={`flex gap-3 transition-all ${
                stage === "high" 
                  ? "flex-col-reverse" 
                  : "flex-col sm:flex-row"
              }`}>
                <button className={`w-full font-medium transition-all ${
                  stage === "high"
                    ? "py-1 bg-neutral-700 text-yellow-600 text-[10px] uppercase font-bold border border-yellow-700"
                    : stage === "medium"
                    ? "py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 text-xs text-stone-700 dark:text-stone-300"
                    : "py-3 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-xs text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white font-mono"
                }`}>
                  Cancel Order
                </button>
                <button className={`w-full font-semibold transition-transform active:scale-95 flex items-center justify-center gap-1.5 ${
                  stage === "high"
                    ? "py-1 bg-blue-600 text-white text-[10px] uppercase font-bold font-mono"
                    : stage === "medium"
                    ? "py-2.5 rounded-xl bg-stone-800 dark:bg-stone-200 text-white dark:text-black hover:bg-stone-700 dark:hover:bg-stone-300 text-xs font-bold"
                    : "py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-mono shadow-lg shadow-black/5 dark:shadow-white/5"
                }`}>
                  {stage === "high" ? "SUBMIT PAYMENT" : stage === "medium" ? "Complete Payment" : "COMPLETE_ORDER"}
                  {stage === "optimized" && <ArrowRight className="h-3.5 w-3.5 animate-[bounceRight_1s_infinite]" />}
                </button>
              </div>

            </div>

            {/* Float visual indicators only in Optimized mode */}
            {stage === "optimized" && (
              <>
                {/* Visual anchor tag pointing to layout padding */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-90">
                  <div className="h-0.5 w-4 bg-black/20 dark:bg-white/20" />
                  <span className="text-[8px] font-mono text-[var(--ink)] bg-[var(--surface)] px-1 py-0.5 rounded border border-[var(--border)] shadow-sm">p-7</span>
                </div>
                {/* Visual hierarchy alignment label */}
                <div className="absolute -right-6 top-12 flex items-center gap-1 opacity-90">
                  <span className="text-[8px] font-mono text-[var(--ink)] bg-[var(--surface)] px-1 py-0.5 rounded border border-[var(--border)] shadow-sm">rounded-3xl</span>
                  <div className="h-0.5 w-4 bg-black/20 dark:bg-white/20" />
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
