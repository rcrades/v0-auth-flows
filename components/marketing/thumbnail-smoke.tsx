"use client"

export function ThumbnailSmoke() {
  return (
    <div className="relative w-[1200px] h-[630px] bg-background overflow-hidden flex items-center justify-center">
      {/* Smoke wisps - layered radial blurs that drift */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {/* Top-left smoke tendril */}
        <div
          className="absolute animate-smoke-drift-1"
          style={{
            top: "15%",
            left: "18%",
            width: "400px",
            height: "200px",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
            filter: "blur(30px)",
            borderRadius: "50%",
          }}
        />
        {/* Center-right wisp */}
        <div
          className="absolute animate-smoke-drift-2"
          style={{
            top: "30%",
            right: "10%",
            width: "350px",
            height: "250px",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)",
            filter: "blur(40px)",
            borderRadius: "50%",
          }}
        />
        {/* Bottom-center smoke */}
        <div
          className="absolute animate-smoke-drift-3"
          style={{
            bottom: "10%",
            left: "30%",
            width: "500px",
            height: "180px",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
            filter: "blur(35px)",
            borderRadius: "50%",
          }}
        />
        {/* Left-center wisp */}
        <div
          className="absolute animate-smoke-drift-4"
          style={{
            top: "45%",
            left: "5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 65%)",
            filter: "blur(45px)",
            borderRadius: "50%",
          }}
        />
        {/* Top-right dense wisp */}
        <div
          className="absolute animate-smoke-drift-5"
          style={{
            top: "5%",
            right: "25%",
            width: "280px",
            height: "220px",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 35%, transparent 65%)",
            filter: "blur(25px)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Login card - top left, BIGGER */}
      <div className="absolute top-6 left-10 w-[280px] rounded-xl border border-border bg-card p-5 space-y-3 rotate-[-5deg] opacity-80 shadow-2xl shadow-black/40 z-[2]">
        <span className="text-sm font-mono text-foreground font-semibold">Welcome back</span>
        <div className="space-y-2">
          <div className="h-9 w-full rounded-md border border-border bg-input flex items-center px-3">
            <span className="text-xs font-mono text-muted-foreground">john@example.com</span>
          </div>
          <div className="h-9 w-full rounded-md border border-border bg-input flex items-center px-3">
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">{"........"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded border border-border bg-input" />
            <span className="text-[10px] font-mono text-muted-foreground">Remember me</span>
          </div>
          <div className="h-9 w-full rounded-md bg-foreground flex items-center justify-center">
            <span className="text-xs font-mono text-background font-semibold">Sign in</span>
          </div>
        </div>
      </div>

      {/* Signup card - top right, BIGGER */}
      <div className="absolute top-4 right-10 w-[300px] rounded-xl border border-border bg-card p-5 space-y-3 rotate-[3deg] opacity-80 shadow-2xl shadow-black/40 z-[2]">
        <span className="text-sm font-mono text-foreground font-semibold">Create account</span>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-8 rounded-md border border-border bg-input flex items-center px-2.5">
            <span className="text-[10px] font-mono text-muted-foreground">John</span>
          </div>
          <div className="h-8 rounded-md border border-border bg-input flex items-center px-2.5">
            <span className="text-[10px] font-mono text-muted-foreground">Doe</span>
          </div>
        </div>
        <div className="h-8 w-full rounded-md border border-border bg-input flex items-center px-2.5">
          <span className="text-[10px] font-mono text-muted-foreground">john@example.com</span>
        </div>
        <div className="h-8 w-full rounded-md border border-border bg-input flex items-center px-2.5">
          <span className="text-[10px] font-mono text-muted-foreground">(555) 123-4567</span>
        </div>
        <div className="h-8 w-full rounded-md bg-foreground flex items-center justify-center">
          <span className="text-[10px] font-mono text-background font-semibold">Create account</span>
        </div>
      </div>

      {/* OAuth + divider - bottom left, BIGGER */}
      <div className="absolute bottom-8 left-14 w-[260px] rounded-xl border border-border bg-card p-5 space-y-3 rotate-[2deg] opacity-80 shadow-2xl shadow-black/40 z-[2]">
        <div className="h-9 w-full rounded-md border border-border bg-input flex items-center justify-center gap-2">
          <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          <span className="text-xs font-mono">Continue with Google</span>
        </div>
        <div className="h-9 w-full rounded-md border border-border bg-input flex items-center justify-center gap-2">
          <svg className="h-4 w-4 fill-foreground" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span className="text-xs font-mono">Continue with GitHub</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] font-mono text-muted-foreground uppercase">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* Password strength + confirmation - bottom right, BIGGER */}
      <div className="absolute bottom-10 right-14 w-[240px] rounded-xl border border-border bg-card p-5 space-y-3 rotate-[-3deg] opacity-80 shadow-2xl shadow-black/40 z-[2]">
        <span className="text-sm font-mono text-foreground font-semibold">Password</span>
        <div className="h-8 w-full rounded-md border border-border bg-input flex items-center px-2.5">
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">{"........"}</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex gap-1">
            {[true, true, true, false].map((active, i) => (
              <div key={i} className={`h-2 flex-1 rounded-full ${active ? "bg-emerald-500" : "bg-input"}`} />
            ))}
          </div>
          <span className="text-[10px] font-mono text-emerald-500">Good</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg className="h-2.5 w-2.5 text-emerald-500" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[10px] font-mono text-emerald-500">Passwords match</span>
        </div>
      </div>

      {/* Success badge floating - center left */}
      <div className="absolute top-[38%] left-[3%] flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rotate-[-8deg] opacity-75 z-[2]">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg className="h-3 w-3 text-emerald-500" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-xs font-mono text-emerald-500 font-medium">Account created</span>
      </div>

      {/* Error badge floating - bottom center */}
      <div className="absolute bottom-[22%] left-[42%] flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 rotate-[3deg] opacity-65 z-[2]">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
        <span className="text-xs font-mono text-destructive">Email is required</span>
      </div>

      {/* Giant AUTH FLOWS text - on top of everything */}
      <div className="relative z-10 select-none pointer-events-none flex flex-col items-center">
        <h1
          className="font-mono font-black tracking-tighter text-foreground leading-[0.85]"
          style={{
            fontSize: "180px",
            textShadow: "0 0 120px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9)",
          }}
        >
          AUTH
        </h1>
        <h1
          className="font-mono font-black tracking-tighter text-foreground leading-[0.85]"
          style={{
            fontSize: "180px",
            textShadow: "0 0 120px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9)",
          }}
        >
          FLOWS
        </h1>
      </div>

      {/* Subtle bottom label */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-muted-foreground">Template</span>
      </div>
    </div>
  )
}
