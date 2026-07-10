const codeLines = [
  { num: 1, html: '<span style="color:#569CD6">import</span> <span style="color:#4EC9B0">React</span> <span style="color:#569CD6">from</span> <span style="color:#CE9178">\'react\'</span>' },
  { num: 2, html: '' },
  { num: 3, html: '<span style="color:#569CD6">const</span> <span style="color:#DCDCAA">App</span> = () <span style="color:#D4D4D4">=></span> <span style="color:#D4D4D4">{</span>' },
  { num: 4, html: '  <span style="color:#569CD6">return</span> <span style="color:#D4D4D4">(</span>' },
  { num: 5, html: '    <span style="color:#D4D4D4">&lt;</span><span style="color:#569CD6">div</span> <span style="color:#9CDCFE">className</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app"</span><span style="color:#D4D4D4">&gt;</span>' },
  { num: 6, html: '      <span style="color:#D4D4D4">&lt;</span><span style="color:#569CD6">h1</span><span style="color:#D4D4D4">&gt;</span><span style="color:#CE9178">Hello World</span><span style="color:#D4D4D4">&lt;/</span><span style="color:#569CD6">h1</span><span style="color:#D4D4D4">&gt;</span>' },
  { num: 7, html: '    <span style="color:#D4D4D4">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#D4D4D4">&gt;</span>' },
  { num: 8, html: '  <span style="color:#D4D4D4">)</span>' },
  { num: 9, html: '<span style="color:#D4D4D4">}</span>' },
  { num: 10, html: '' },
  { num: 11, html: '<span style="color:#569CD6">export</span> <span style="color:#569CD6">default</span> <span style="color:#DCDCAA">App</span>' },
];

export default function LaptopMockup() {
  return (
    <div className="relative flex items-end justify-center h-full w-full overflow-hidden">
      <div
        className="scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 origin-bottom transition-all duration-300"
        style={{ perspective: "1200px" }}
      >
      <div
        className="relative"
        style={{
          transform: "rotateX(8deg) rotateY(-6deg) rotateZ(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* ---- Volumetric Block ---- */}
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            width: "340px",
            height: "40px",
          }}
        >
          {/* Top face */}
          <div
            className="absolute bottom-full left-0 transition-colors duration-300"
            style={{
              width: "340px",
              height: "60px",
              background: "linear-gradient(180deg, var(--block-top) 0%, color-mix(in srgb, var(--block-top) 80%, black) 100%)",
              border: "1px solid rgba(128,128,128,0.1)",
              transformOrigin: "bottom center",
              transform: "rotateX(-90deg)",
            }}
          />
          {/* Front face */}
          <div
            className="absolute inset-0 transition-colors duration-300"
            style={{
              background: "linear-gradient(180deg, var(--block-front) 0%, color-mix(in srgb, var(--block-front) 70%, black) 100%)",
              border: "1px solid rgba(128,128,128,0.08)",
            }}
          />
          {/* Right face */}
          <div
            className="absolute top-0 left-full transition-colors duration-300"
            style={{
              width: "50px",
              height: "40px",
              background: "linear-gradient(180deg, var(--block-right) 0%, color-mix(in srgb, var(--block-right) 60%, black) 100%)",
              border: "1px solid rgba(128,128,128,0.06)",
              borderLeft: "none",
              transformOrigin: "left center",
              transform: "rotateY(90deg)",
            }}
          />

          {/* ---- Laptop ---- */}
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Screen */}
            <div
              className="relative overflow-hidden transition-colors duration-300"
              style={{
                width: "280px",
                height: "190px",
                background: "var(--laptop-body)",
                border: "2px solid var(--laptop-border)",
                borderRadius: "10px",
                transform: "rotateX(-5deg)",
                transformOrigin: "bottom center",
              }}
            >
              {/* Screen bezel inner */}
              <div
                className="absolute inset-[3px] rounded-[6px] overflow-hidden"
                style={{ background: "var(--screen-bezel)" }}
              >
                {/* Code editor */}
                <div className="h-full flex flex-col">
                  {/* Title bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] border-b border-[#2a2a2a]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBc2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-2 text-[7px] text-gray-500 font-mono">App.tsx</span>
                  </div>
                  {/* Sidebar + Editor */}
                  <div className="flex flex-1">
                    {/* Sidebar */}
                    <div className="w-6 bg-[#1a1a1a] border-r border-[#2a2a2a] flex flex-col items-center pt-2 gap-1">
                      <div className="w-1.5 h-1.5 rounded-sm bg-neon opacity-60" />
                      <div className="w-1.5 h-1.5 rounded-sm bg-gray-600" />
                      <div className="w-1.5 h-1.5 rounded-sm bg-gray-600" />
                    </div>
                    {/* Code area */}
                    <div className="flex-1 bg-[#1E1E1E] p-2 overflow-hidden">
                      <pre className="font-mono text-[7.5px] leading-[1.6] text-gray-300">
                        {codeLines.map((line) => (
                          <div key={line.num} className="flex">
                            <span className="text-gray-600 w-5 text-right mr-2 select-none shrink-0">
                              {line.num}
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: line.html || "&nbsp;" }} />
                          </div>
                        ))}
                      </pre>
                    </div>
                  </div>
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-2 py-0.5 bg-[#007ACC] text-[6px] text-white">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      main
                    </span>
                    <span>UTF-8</span>
                    <span>TypeScript JSX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base (keyboard) — thin strip */}
            <div
              className="mx-auto transition-colors duration-300"
              style={{
                width: "280px",
                height: "12px",
                background: "linear-gradient(180deg, var(--laptop-body) 0%, color-mix(in srgb, var(--laptop-body) 70%, black) 100%)",
                border: "1px solid var(--laptop-border)",
                borderTop: "none",
                borderRadius: "0 0 4px 4px",
              }}
            >
              <div className="flex items-center justify-center gap-[2px] h-full px-4 opacity-40">
                {[6, 10, 7, 12, 8, 9, 6, 11, 7, 10].map((w, i) => (
                  <div
                    key={i}
                    className="h-[6px] rounded-[1px]"
                    style={{ width: `${w}px`, background: "var(--laptop-border)" }}
                  />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
