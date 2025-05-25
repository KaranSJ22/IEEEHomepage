// NewsSection.tsx (React + Tailwind + custom CSS for animations)

import React from 'react';
import './NewsSectiont.css'; // Keep this for keyframes + complex backgrounds & animations

const NewsSectiont: React.FC = () => {
  return (
    <section className="relative w-auto px-8 py-20 flex items-center overflow-hidden
                        md:px-6 md:py-16 sm:px-4 sm:py-12"
             style={{ minHeight: 'auto' }} // you removed min-height 100vh in original
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="noise-texture absolute inset-0"></div>

        <div
          className="gradient-orb gradient-orb-1 rounded-full blur-[60px] opacity-15 absolute top-[10%] left-[-10%]"
          style={{ width: 400, height: 400, background:
            'radial-gradient(circle, #1a1a2e 0%, transparent 70%)' }}
        />

        <div
          className="gradient-orb gradient-orb-2 rounded-full blur-[60px] opacity-15 absolute bottom-[10%] right-[-10%]"
          style={{ width: 300, height: 300, background:
            'radial-gradient(circle, #16213e 0%, transparent 70%)' }}
        />

        <div
          className="geometric-pattern absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 1000, height: 1000 }}
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        <header className="relative mb-20 text-left
                           md:mb-16
                           sm:mb-12"
        >
          <div className="max-w-[600px]">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4
                             text-white/50 relative"
                  style={{ letterSpacing: '2px' }}>
              News
              <span className="absolute left-0 bottom-[-4px] w-10 h-px
                               bg-gradient-to-r from-white/30 to-transparent"></span>
            </span>

            <h2 className="text-[4rem] font-extrabold leading-[0.9] mb-6 tracking-tight
                           bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent
                           animate-titleSlide
                           md:text-3xl
                           sm:text-2xl"
            >
              Latest Updates
            </h2>

            <p className="text-lg text-white/40 leading-relaxed animate-descriptionFade">
              Stay up to date with the latest news and events from our community.
            </p>
          </div>

          <div className="absolute top-1/2 right-0 flex items-center gap-4 -translate-y-1/2
                          lg:hidden"
          >
            <div className="w-[120px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-lineExpand"></div>
            <div className="w-2 h-2 rounded-full bg-white/30 animate-dotPulse"></div>
          </div>
        </header>

        <div className="grid gap-8 animate-gridFadeIn
                        grid-cols-[repeat(auto-fit,minmax(420px,1fr))]
                        lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
                        md:grid-cols-1"
        >
          {/* Example news card */}
          <article className="relative bg-[rgba(12,12,18,0.7)] border border-white/6 rounded-xl p-10
                              transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]
                              cursor-pointer backdrop-blur-md
                              hover:translate-y-[-3] hover:scale-[1.01] hover:border-white/12 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden
                              sm:p-8"
          >
            <div className="absolute inset-0 bg-[var(--category-bg)] opacity-0 rounded-xl transition-opacity duration-600
                            hover:opacity-5"></div>

            <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] rounded-xl
                            bg-gradient-to-br from-white/10 to-transparent via-transparent
                            opacity-0 transition-opacity duration-600
                            hover:opacity-100 z-[-1]"></div>

            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rounded-full
                            bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)]
                            opacity-0 transition-opacity duration-600 pointer-events-none
                            hover:opacity-100"></div>

            <div className="absolute top-0 left-[-100%] w-full h-full
                            bg-gradient-to-r from-transparent via-white/5 to-transparent
                            transition-left duration-800 ease pointer-events-none
                            hover:left-full"></div>

            <header className="flex justify-between items-start mb-8
                              sm:flex-col sm:items-start sm:gap-3">
              <div className="flex flex-col gap-3">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-white/80
                                 px-4 py-2 bg-white/5 border border-white/10 rounded-md w-max
                                 transition-all duration-300
                                 hover:bg-white/8 hover:border-white/15 hover:translate-x-1"
                >
                  Category
                </span>

                <div className="flex items-center gap-2 text-[0.8rem] text-white/40">
                  <span>Apr 25, 2025</span>
                  <span className="text-white/20">|</span>
                  <span>Author Name</span>
                </div>
              </div>

              <div className="text-right text-[0.8rem] text-white/50 font-medium sm:text-left">
                Author Info
              </div>
            </header>

            <div className="mb-10">
              <h3 className="text-2xl font-extrabold text-white leading-snug mb-5
                             transition-all duration-400
                             hover:text-white/95 hover:translate-x-2">Article Title</h3>

              <p className="text-white/60 leading-relaxed text-base
                            transition-all duration-400
                            hover:text-white/70 hover:translate-x-1">
                This is an excerpt or summary of the article. It provides a brief overview.
              </p>
            </div>

            <footer className="flex justify-end">
              <button
                className="flex items-center gap-4 border border-white/15 text-white/80
                           px-6 py-3 rounded-lg font-semibold text-sm
                           transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden
                           hover:border-white/25 hover:text-white hover:translate-x-2"
              >
                Read More
                <svg
                  className="w-4 h-4 transition-transform duration-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </footer>
          </article>

          {/* Repeat cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default NewsSectiont;
