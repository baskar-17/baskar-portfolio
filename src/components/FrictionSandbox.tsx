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
    <div className="glass-card bg-white/[0.01] border border-white/10 p-6 md:p-8 rounded-3xl w-full shadow-[0_16px_48px_rgba(0,0,0,0.4)] my-12 animate-[fadeSlideUp_0.8s_ease_0.8s_both] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left text: The slider and description */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Interactive Sandbox
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mt-1">
              UX Friction <span className="font-script italic text-white/95 text-[1.2em] px-1">Solver</span>
            </h2>
          </div>

          <p className="text-xs md:text-sm text-white/60 leading-relaxed">
            Drag the slider to experience how structural hierarchy, breathing room, and cognitive load management transform a cluttered interface into a conversion engine.
          </p>

          {/* The Slider Control */}
          <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <div className="flex items-center justify-between text-xs font-mono font-medium">
              <span className="text-white/50">Cognitive Load</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase ${
                stage === "high" 
                  ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                  : stage === "medium"
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
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
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white hover:accent-white/80 transition-all"
            />

            <div className="flex justify-between text-[10px] font-mono text-white/40 pt-1">
              <span>Optimized (0%)</span>
              <span>Raw Layout (100%)</span>
            </div>
          </div>

          {/* Current Critique Annotation Box */}
          <div className={`p-4 rounded-2xl border transition-all duration-500 ${
            stage === "high"
              ? "bg-red-950/10 border-red-500/15 text-red-300/90"
              : stage === "medium"
              ? "bg-amber-950/10 border-amber-500/15 text-amber-300/90"
              : "bg-emerald-950/10 border-emerald-500/15 text-emerald-300/90"
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              {stage === "high" && (
                <>
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  High Visual Friction
                </>
              )}
              {stage === "medium" && (
                <>
                  <Info className="h-4 w-4 text-amber-400" />
                  Standard Template
                </>
              )}
              {stage === "optimized" && (
                <>
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Zero Friction Design
                </>
              )}
            </h4>
            <p className="text-[11px] md:text-xs leading-relaxed">
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
                ? "p-5 bg-zinc-950 border-neutral-800 shadow-xl text-neutral-300 space-y-4"
                : "p-7 glass-card bg-white/[0.03] border-white/10 hover:border-white/20 shadow-2xl shadow-black/60 text-white space-y-5"
            }`}>
              
              {/* Card Header */}
              <div className={`flex items-center justify-between transition-all ${
                stage === "high" ? "border-b border-yellow-700/30 pb-1" : "pb-0"
              }`}>
                <div>
                  <h3 className={`font-semibold tracking-tight transition-all text-white ${
                    stage === "high" ? "text-xs" : stage === "medium" ? "text-base" : "text-lg font-light"
                  }`}>
                    {stage === "high" ? "USER CHECKOUT PANEL v1.2" : "Secure Checkout"}
                  </h3>
                  {stage !== "high" && (
                    <p className="text-[10px] text-white/50">Invoice ID: #SG-9842</p>
                  )}
                </div>
                {stage === "optimized" ? (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wide">
                    Live
                  </span>
                ) : stage === "medium" ? (
                  <span className="text-[10px] text-zinc-500 font-mono">10:04 AM</span>
                ) : (
                  <span className="text-[8px] bg-red-600 text-white px-1 font-mono">WARN_DB</span>
                )}
              </div>

              {/* Price Details Block */}
              <div className={`transition-all rounded-2xl ${
                stage === "high"
                  ? "p-1.5 bg-neutral-800 border-2 border-dashed border-red-500/50"
                  : stage === "medium"
                  ? "p-4 bg-zinc-900 border border-neutral-800"
                  : "p-4 bg-white/[0.02] border border-white/5"
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`text-white/70 ${stage === "high" ? "text-[10px] font-bold" : "text-xs"}`}>
                    SportsGravy Premium
                  </span>
                  <span className={`font-semibold text-white ${stage === "high" ? "text-xs" : "text-sm"}`}>
                    $49.00<span className="text-[10px] font-normal text-white/50">/mo</span>
                  </span>
                </div>
                {stage !== "high" && (
                  <div className="mt-2 pt-2 border-t border-white/5 flex justify-between text-[11px] text-white/50">
                    <span>Tax & processing</span>
                    <span>$0.00</span>
                  </div>
                )}
              </div>

              {/* Cognitive Progress Indicator */}
              {stage === "optimized" && (
                <div className="space-y-1.5 animate-pulse">
                  <div className="flex justify-between text-[10px] font-medium text-emerald-400">
                    <span>Purchase progression rate</span>
                    <span>+35%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[89%]" />
                  </div>
                </div>
              )}

              {/* Form Input fields */}
              <div className="space-y-2">
                <label className={`block font-medium ${
                  stage === "high" ? "text-[9px] font-bold text-red-500 uppercase" : "text-xs text-white/70"
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
                      ? "p-3 bg-zinc-900 border border-neutral-800 rounded-xl"
                      : "p-3 bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl text-white"
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
                    ? "py-2.5 rounded-xl border border-neutral-800 hover:bg-zinc-900 text-xs"
                    : "py-3 rounded-xl border border-white/5 hover:bg-white/5 text-xs text-white/70 hover:text-white"
                }`}>
                  Cancel Order
                </button>
                <button className={`w-full font-semibold transition-transform active:scale-95 flex items-center justify-center gap-1.5 ${
                  stage === "high"
                    ? "py-1 bg-blue-600 text-white text-[10px] uppercase font-bold"
                    : stage === "medium"
                    ? "py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 text-xs"
                    : "py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs shadow-lg shadow-black/20"
                }`}>
                  {stage === "high" ? "SUBMIT PAYMENT" : stage === "medium" ? "Complete Payment" : "Complete Payment"}
                  {stage === "optimized" && <ArrowRight className="h-3.5 w-3.5" />}
                </button>
              </div>

            </div>

            {/* Float visual indicators only in Optimized mode */}
            {stage === "optimized" && (
              <>
                {/* Visual anchor tag pointing to layout padding */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
                  <div className="h-0.5 w-4 bg-white/20" />
                  <span className="text-[8px] font-mono text-white/50 bg-black/60 px-1 py-0.5 rounded border border-white/10">p-7</span>
                </div>
                {/* Visual hierarchy alignment label */}
                <div className="absolute -right-6 top-12 flex items-center gap-1 opacity-60">
                  <span className="text-[8px] font-mono text-white/50 bg-black/60 px-1 py-0.5 rounded border border-white/10">rounded-3xl</span>
                  <div className="h-0.5 w-4 bg-white/20" />
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
