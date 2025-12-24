import React, { useState } from 'react';
import { 
  WifiOff, Zap, ChevronLeft, ChevronRight, Circle, 
  Layers, Lock, Database, ArrowRight, User, 
  Play, BarChart3, TrendingUp, Users, Code, 
  Terminal, ShieldCheck, Cpu
} from 'lucide-react';

// --- Reusable Components ---

// 1. Navigation Button
const NavButton = ({ onClick, icon: Icon, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`
      p-3 border border-slate-700 rounded bg-slate-800/50 text-slate-400 transition-all
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-700 hover:text-white hover:scale-105 active:scale-95'}
    `}
  >
    <Icon className="w-5 h-5" />
  </button>
);

// 2. Base Slide Layout
const SlideLayout = ({ slideNum, title, children }) => (
  <div className="flex-1 flex flex-col p-8 relative z-10 h-full overflow-y-auto">
    <div className="flex justify-between items-end border-b border-slate-800 pb-4 mb-8">
      <div>
         <h2 className="text-3xl md:text-4xl font-bold text-slate-200 tracking-widest uppercase font-mono mb-2">
          {title}
        </h2>
        <div className="h-1 w-24 bg-orange-500 rounded-full"></div>
      </div>
      <div className="text-slate-600 font-mono text-sm tracking-widest">
        SLIDE {slideNum} / 6
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      {children}
    </div>
  </div>
);

export default function GikiHubPresentation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 1));

  // --- SLIDE 1: PROBLEM VS SOLUTION ---
  // --- SLIDE 1: PROBLEM VS SOLUTION ---
  const Slide1 = () => (
    <SlideLayout slideNum={1} title="The Problem vs Solution">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-stretch">
        
        {/* Pain Point (Red Side) */}
        <div className="relative flex-1 bg-[#2a2020] border-2 border-red-500/30 rounded-lg p-8 flex flex-col items-center shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] group cursor-pointer">
          <div className="absolute top-0 right-0 bg-red-500/80 text-[#2a2020] text-xs font-bold px-3 py-1 rounded-bl-lg tracking-widest font-mono">PAIN POINT</div>
          <WifiOff className="w-20 h-20 text-red-400 mb-6 group-hover:animate-pulse" />
          <h3 className="text-2xl font-bold text-red-400 mb-6 font-mono text-center">Legacy Sharing is Slow</h3>
          <div className="w-full space-y-4 text-lg text-slate-300 font-sans">
             <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded hover:bg-red-500/10 transition-colors">
              <span className="text-red-400 font-mono">{'>'}</span>
              <span><span className="animate-pulse font-mono text-red-300">Campus Wi-Fi </span></span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded hover:bg-red-500/10 transition-colors">
              <span className="text-red-400 font-mono">{'>'}</span>
              <span><span className="animate-pulse font-mono text-red-300">WhatsApp & MS Teams</span></span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded hover:bg-red-500/10 transition-colors">
              <span className="text-red-400 font-mono">{'>'}</span>
              <span><span className="animate-pulse font-mono text-red-300">Manual Codes</span></span>
            </div>
          </div>
        </div>

        {/* Solution (Green Side) - NOW MATCHING! */}
        <div className="relative flex-1 bg-[#1c2621] border-2 border-green-500/30 rounded-lg p-8 flex flex-col items-center shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] group cursor-pointer">
          <div className="absolute top-0 right-0 bg-green-500 text-[#1c2621] text-xs font-bold px-3 py-1 rounded-bl-lg tracking-widest font-mono">SOLUTION</div>
          <Zap className="w-20 h-20 text-green-400 mb-6 group-hover:animate-pulse group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
          <div className="text-center mb-6">
            <h3 className="text-3xl font-black text-green-400 tracking-widest font-mono">GIKIHUB</h3>
            <p className="text-slate-400 text-xs tracking-[0.3em] font-bold font-mono mt-1">GEN Z EDITION</p>
          </div>
          
          {/* UPDATED LIST SECTION BELOW */}
          <div className="w-full space-y-4 text-lg text-slate-200 font-sans pl-2">
            
            <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded hover:bg-green-500/10 transition-colors">
              <div className="w-2 h-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
              <span className="animate-pulse font-mono text-green-300">Localhost 1Gbps Speed</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded hover:bg-green-500/10 transition-colors">
              <div className="w-2 h-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
              <span className="animate-pulse font-mono text-green-300">Gamified "Squads"</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded hover:bg-green-500/10 transition-colors">
              <div className="w-2 h-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
              <span className="animate-pulse font-mono text-green-300">Automated Access</span>
            </div>

          </div>
        </div>

      </div>
    </SlideLayout>
  );
// --- SLIDE 2: GROUPED & CENTERED (NO GAP) ---
  const Slide2 = () => (
    <SlideLayout slideNum={2} title="Context-Aware Access Engine">
      {/* 1. h-full: Uses the full height
         2. justify-center: Moves EVERYTHING to the vertical middle
         3. gap-12: Puts a nice, reasonable space between the Diagram and the Explainer Cards (not a huge gap)
      */}
      <div className="flex flex-col h-full w-full justify-center items-center gap-12">
        
        {/* --- TOP PART: THE VISUAL --- */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 lg:gap-16">
          
          {/* LEFT: INPUTS */}
          <div className="flex flex-col justify-center gap-4 w-80">
            {/* Input 1 */}
            <div className="w-full bg-slate-900 border border-green-500/30 p-3 rounded-lg flex items-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.1)] relative overflow-hidden group hover:border-green-400 transition-colors">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
               <User className="text-green-400 w-6 h-6 flex-shrink-0" />
               <div className="flex flex-col min-w-0">
                 <span className="text-slate-200 font-mono font-bold text-sm truncate">Identity</span>
                 <span className="text-[10px] text-slate-500 truncate">Who are they?</span>
               </div>
               <div className="absolute right-3 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            {/* Input 2 */}
            <div className="w-full bg-slate-900 border border-blue-500/30 p-3 rounded-lg flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.1)] relative overflow-hidden group hover:border-blue-400 transition-colors">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
               <Users className="text-blue-400 w-6 h-6 flex-shrink-0" />
               <div className="flex flex-col min-w-0">
                 <span className="text-slate-200 font-mono font-bold text-sm truncate">Squad Context</span>
                 <span className="text-[10px] text-slate-500 truncate">Which group?</span>
               </div>
               <div className="absolute right-3 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75 delay-75"></div>
            </div>
            {/* Input 3 */}
            <div className="w-full bg-slate-900 border border-orange-500/30 p-3 rounded-lg flex items-center gap-3 shadow-[0_0_15px_rgba(249,115,22,0.1)] relative overflow-hidden group hover:border-orange-400 transition-colors">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
               <ShieldCheck className="text-orange-400 w-6 h-6 flex-shrink-0" />
               <div className="flex flex-col min-w-0">
                 <span className="text-slate-200 font-mono font-bold text-sm truncate">Asset Privacy</span>
                 <span className="text-[10px] text-slate-500 truncate">Is file public?</span>
               </div>
               <div className="absolute right-3 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-75 delay-150"></div>
            </div>
          </div>

          {/* MIDDLE: ARROWS & CPU */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col justify-center items-center text-slate-600 gap-2">
               <span className="rotate-[-25deg] text-2xl animate-pulse">→</span>
               <span className="text-2xl animate-pulse">→</span>
               <span className="rotate-[25deg] text-2xl animate-pulse">→</span>
            </div>

            <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
               <div className="absolute inset-0 border-[6px] border-slate-700 rounded-full border-t-green-500 animate-spin"></div>
               <div className="absolute inset-4 border-[6px] border-slate-800 rounded-full border-b-blue-500 animate-[spin_3s_linear_infinite_reverse]"></div>
               <div className="flex flex-col items-center z-10 bg-slate-900 p-4 rounded-full border-2 border-slate-600 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                  <Cpu className="w-8 h-8 text-white" />
               </div>
            </div>

            <div className="flex justify-center items-center text-slate-600">
               <ArrowRight className="w-8 h-8 animate-pulse" />
            </div>
          </div>

          {/* RIGHT: OUTPUT */}
          <div className="w-80 flex justify-center">
            <div className="bg-green-500/10 border-2 border-green-500 p-6 rounded-xl flex flex-col items-center justify-center gap-3 w-full shadow-[0_0_40px_rgba(34,197,94,0.15)] animate-pulse h-44">
               <Lock className="w-10 h-10 text-green-400" />
               <div className="text-center">
                 <span className="text-green-400 font-mono font-black text-xl tracking-widest block">GRANTED</span>
                 <span className="text-[10px] text-slate-400 font-sans mt-2 block">Processing: 12ms</span>
               </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM PART: EXPLAINER CARDS --- */}
        {/* These will now sit directly below the visual with a 48px (gap-12) gap, not at the bottom of the screen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
           <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-orange-500/50 transition-colors group">
             <h4 className="text-orange-400 font-mono font-bold mb-1 text-md group-hover:text-orange-300">The Engine</h4>
             <p className="text-xs text-slate-300 font-sans leading-relaxed">Dynamic intersection algorithm. Replaces simple Boolean toggles.</p>
           </div>
           <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
             <h4 className="text-blue-400 font-mono font-bold mb-1 text-md group-hover:text-blue-300">The Logic</h4>
             <p className="text-xs text-slate-300 font-sans leading-relaxed">Identity ∩ Context ∩ Privacy. Prevents "Data Smuggling".</p>
           </div>
           <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-colors group">
             <h4 className="text-green-400 font-mono font-bold mb-1 text-md group-hover:text-green-300">Real-Time</h4>
             <p className="text-xs text-slate-300 font-sans leading-relaxed">Calculated on-the-fly (ms latency) for every single file request.</p>
           </div>
        </div>

      </div>
    </SlideLayout>
  );
  // --- SLIDE 3: MEASURE CYCLE (FAILURE) ---
  const Slide3 = () => (
    <SlideLayout slideNum={3} title="Measure Phase: Validation Failures">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* Metric 1 */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg relative overflow-hidden group hover:bg-slate-800 transition-all">
          <div className="absolute -right-4 top-4 rotate-12 border-2 border-red-500 text-red-500 font-black px-2 py-1 text-xl opacity-50 group-hover:opacity-100 transition-opacity">FAIL</div>
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-slate-500" />
            <h3 className="font-mono text-slate-300">Storage Saturation</h3>
          </div>
          <div className="text-4xl font-mono text-red-400 mb-2">3.2%</div>
          <div className="text-xs font-mono text-slate-500 mb-4">TARGET: 15%</div>
          <p className="font-sans text-slate-400 text-sm">Free tier was too generous. Users had no incentive to engage deeper.</p>
        </div>

        {/* Metric 2 */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg relative overflow-hidden group hover:bg-slate-800 transition-all">
          <div className="absolute -right-4 top-4 rotate-12 border-2 border-red-500 text-red-500 font-black px-2 py-1 text-xl opacity-50 group-hover:opacity-100 transition-opacity">FAIL</div>
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-slate-500" />
            <h3 className="font-mono text-slate-300">Download Ratio</h3>
          </div>
          <div className="text-4xl font-mono text-red-400 mb-2">80/20</div>
          <div className="text-xs font-mono text-slate-500 mb-4">PUBLIC / GROUP</div>
          <p className="font-sans text-slate-400 text-sm">"Manual Codes" caused too much friction for private sharing.</p>
        </div>

        {/* Metric 3 */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg relative overflow-hidden group hover:bg-slate-800 transition-all">
          <div className="absolute -right-4 top-4 rotate-12 border-2 border-red-500 text-red-500 font-black px-2 py-1 text-xl opacity-50 group-hover:opacity-100 transition-opacity">FAIL</div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-slate-500" />
            <h3 className="font-mono text-slate-300">Chat Acceptance</h3>
          </div>
          <div className="text-4xl font-mono text-red-400 mb-2">12%</div>
          <div className="text-xs font-mono text-slate-500 mb-4">ENGAGEMENT</div>
          <p className="font-sans text-slate-400 text-sm">"Stranger Danger" effect. Lack of verified identities.</p>
        </div>

      </div>
      <div className="mt-12 p-4 bg-orange-500/10 border border-orange-500/30 rounded text-center w-full max-w-2xl animate-pulse">
        <span className="font-mono text-orange-400 font-bold">PIVOT REQUIRED:</span>
        <span className="font-sans text-orange-200 ml-2">Move from "Utility" to "Gamified Community"</span>
      </div>
    </SlideLayout>
  );

  // --- SLIDE 4: COMPARATIVE ANALYSIS (SUCCESS) ---
  const Slide4 = () => (
    <SlideLayout slideNum={4} title="Comparative Analysis: The Pivot">
       <div className="w-full max-w-5xl flex flex-col gap-8">
        
        {/* Header Row */}
        <div className="grid grid-cols-3 text-center border-b border-slate-700 pb-4">
          <div className="font-mono text-slate-500 font-bold">METRIC</div>
          <div className="font-mono text-red-400 font-bold opacity-75">MVP (BEFORE)</div>
          <div className="font-mono text-green-400 font-bold text-lg">V1.0 (AFTER)</div>
        </div>

        {/* Row 1: Storage */}
        <div className="grid grid-cols-3 items-center group hover:bg-slate-800/30 p-2 rounded transition-colors">
          <div className="flex flex-col">
            <span className="font-mono text-white text-lg">Storage Saturation</span>
            <span className="font-sans text-slate-500 text-xs">Due to Gamified Tiers</span>
          </div>
          <div className="text-center font-mono text-red-400 text-xl opacity-75">3.2%</div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-green-400 text-3xl font-bold group-hover:scale-110 transition-transform">14.8%</span>
            <TrendingUp className="text-green-500 w-5 h-5 animate-bounce" />
          </div>
        </div>

        {/* Row 2: Downloads */}
        <div className="grid grid-cols-3 items-center group hover:bg-slate-800/30 p-2 rounded transition-colors border-t border-slate-800/50 pt-4">
           <div className="flex flex-col">
            <span className="font-mono text-white text-lg">Private/Public Split</span>
            <span className="font-sans text-slate-500 text-xs">Due to Automated Squads</span>
          </div>
          <div className="text-center font-mono text-red-400 text-xl opacity-75">20% Private</div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-green-400 text-3xl font-bold group-hover:scale-110 transition-transform">45% Private</span>
            <TrendingUp className="text-green-500 w-5 h-5 animate-bounce" />
          </div>
        </div>

        {/* Row 3: Chat */}
        <div className="grid grid-cols-3 items-center group hover:bg-slate-800/30 p-2 rounded transition-colors border-t border-slate-800/50 pt-4">
           <div className="flex flex-col">
            <span className="font-mono text-white text-lg">Chat Engagement</span>
            <span className="font-sans text-slate-500 text-xs">Due to "Verified" Badges</span>
          </div>
          <div className="text-center font-mono text-red-400 text-xl opacity-75">12%</div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-green-400 text-3xl font-bold group-hover:scale-110 transition-transform">41%</span>
            <TrendingUp className="text-green-500 w-5 h-5 animate-bounce" />
          </div>
        </div>

       </div>
       
       <div className="mt-12 flex gap-4">
          <div className="bg-green-500/10 border border-green-500/30 px-6 py-2 rounded-full text-green-400 font-mono text-sm flex items-center gap-2">
            <Circle className="w-3 h-3 fill-green-400 animate-pulse" /> TARGETS MET
          </div>
       </div>
    </SlideLayout>
  );

  // --- SLIDE 5: DEMO VIDEO (embedded) ---
  const Slide5 = () => (
    <SlideLayout slideNum={5} title="Live Demo: GikiHub in Action">
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        {/* TV Frame Container with video element */}
        <div className="relative w-full aspect-video bg-black rounded-lg border-4 border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden group">
          <video
            className="w-full h-full object-cover"
            src="/videos/cs391-demo.mp4"
            controls
            playsInline
            data-testid="demo-video"
          />

          {/* CRT Scanline Effect (Overlay) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-20"></div>
        </div>

        <div className="mt-8 flex justify-between w-full text-slate-500 font-mono text-sm px-4">
           <span>STATUS: <span className="text-green-500 animate-pulse">LIVE</span></span>
           <span>URL: gikihub.live</span>
        </div>

      </div>
    </SlideLayout>
  );

  // --- SLIDE 6: THE BUILDERS ---
  const Slide6 = () => (
    <SlideLayout slideNum={6} title="The Builders">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        
        {/* Member 1 */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg flex flex-col items-center hover:border-orange-500 transition-all hover:-translate-y-2 group">
           <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-shadow"></div>
           <h3 className="text-white font-mono font-bold text-center mb-1">Riyan Khan Durrani</h3>
           <span className="text-orange-400 text-xs font-mono tracking-widest mb-4">LEAD / ARCHITECT</span>
           <p className="text-slate-400 text-sm font-sans text-center">Full Stack Architecture</p>
        </div>

        {/* Member 2 */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg flex flex-col items-center hover:border-blue-500 transition-all hover:-translate-y-2 group">
           <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow"></div>
           <h3 className="text-white font-mono font-bold text-center mb-1">Syed Hamza Mukhtar</h3>
           <span className="text-blue-400 text-xs font-mono tracking-widest mb-4">MANAGED / SPEARHEADED</span>
           <p className="text-slate-400 text-sm font-sans text-center">Orchestrated the Project.</p>
        </div>

        {/* Member 3 */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg flex flex-col items-center hover:border-purple-500 transition-all hover:-translate-y-2 group">
           <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow"></div>
           <h3 className="text-white font-mono font-bold text-center mb-1">Arsalan Khalil</h3>
           <span className="text-purple-400 text-xs font-mono tracking-widest mb-4">UI/UX DESIGN / Media</span>
           <p className="text-slate-400 text-sm font-sans text-center">Frontend Interfaces.</p>
        </div>

        {/* Member 4 */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg flex flex-col items-center hover:border-green-500 transition-all hover:-translate-y-2 group">
           <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mb-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-shadow"></div>
           <h3 className="text-white font-mono font-bold text-center mb-1">Saad Khurshid</h3>
           <span className="text-green-400 text-xs font-mono tracking-widest mb-4">Quality Assurance</span>
           <p className="text-slate-400 text-sm font-sans text-center">Marketing & Interviews.</p>
        </div>

      </div>
      
      <div className="mt-12 text-center text-slate-500 font-mono text-sm animate-pulse">
        "No cap, it's giving productivity."
      </div>
    </SlideLayout>
  );

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-slate-300 font-sans flex flex-col relative overflow-hidden selection:bg-orange-500/30">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Main Header */}
      <header className="p-6 border-b border-slate-800 flex justify-between items-center z-20 bg-[#1a1a1a]/80 backdrop-blur">
        <div className="flex items-center gap-2 text-orange-500">
           <Terminal className="w-6 h-6" />
           <span className="font-mono font-black text-xl tracking-tighter">GIKIHUB</span>
        </div>
        <div className="flex gap-4">
          <NavButton onClick={prevSlide} icon={ChevronLeft} disabled={currentSlide === 1} />
          <NavButton onClick={nextSlide} icon={ChevronRight} disabled={currentSlide === totalSlides} />
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 flex overflow-hidden">
        {currentSlide === 1 && <Slide1 />}
        {currentSlide === 2 && <Slide2 />}
        {currentSlide === 3 && <Slide3 />}
        {currentSlide === 4 && <Slide4 />}
        {currentSlide === 5 && <Slide5 />}
        {currentSlide === 6 && <Slide6 />}
      </main>

      {/* Persistent Status Bar */}
      <footer className="p-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500 z-20 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 text-green-500 fill-green-500 animate-pulse" />
          <span>SERVER: LOCALHOST:8080</span>
        </div>
        <div>
          SESSION ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </div>
      </footer>

    </div>
  );
}