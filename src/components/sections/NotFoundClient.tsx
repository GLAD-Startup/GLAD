'use client';

import React from 'react';
import Link from 'next/link';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Divider from '@/components/ui/Divider';
import Footer from '@/components/layout/Footer';

export default function NotFoundClient() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px] flex flex-col justify-between">
      <div>
        <Divider />

        {/* Top Eyebrow */}
        <SectionEyebrow
          left={
            <>
              PAGE NOT FOUND <span lang="hi">पृष्ठ नहीं मिला</span>
            </>
          }
          index="(GLD® — 404)"
          right="404 ERROR"
        />

        {/* Animated Face & Centered Content */}
        <div className="px-[20px] md:px-[36px] xl:px-[50px] py-10 md:py-16 max-w-[800px] mx-auto w-full flex flex-col items-center text-center">
          
          {/* Animated Face Illustration */}
          <div className="my-custom-face-container my-4">
            <svg className="face" viewBox="0 0 320 380">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={25}
              >
                <g className="face__eyes" transform="translate(0,112.5)">
                  <g transform="translate(15,0)">
                    <polyline className="face__eye-lid" points="37,0 0,120 75,120" />
                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />
                  </g>
                  <g transform="translate(230,0)">
                    <polyline className="face__eye-lid" points="37,0 0,120 75,120" />
                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />
                  </g>
                </g>
                <rect
                  className="face__nose"
                  x="132.5"
                  y="112.5"
                  width={55}
                  height={155}
                  rx={4}
                  ry={4}
                />
                <g transform="translate(65,334)" strokeDasharray="102 102">
                  <path className="face__mouth-left" d="M 0 30 C 0 30 40 0 95 0" />
                  <path
                    className="face__mouth-right"
                    d="M 95 0 C 150 0 190 30 190 30"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* Minimal Editorial Message & Action Buttons */}
          <div className="mt-4 md:mt-6 flex flex-col items-center gap-4">
            <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-normal text-fg tracking-[-0.025em] leading-tight">
              Looks like you found a dead end.
            </h1>
            <p className="t-body text-fg-muted max-w-[500px] leading-relaxed">
              The page you are looking for has been moved, removed, or never existed in the GLAD studio directory.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <PillButton href="/">Return Home</PillButton>
              <PillButton href="/work" className="border-line-solid">
                Explore Work
              </PillButton>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style jsx global>{`
        .my-custom-face-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 320px;
          background: transparent;
          color: var(--fg, #0A0A0B);
        }

        .my-custom-face-container .face {
          width: 180px;
          height: auto;
          display: block;
        }

        @media (min-width: 768px) {
          .my-custom-face-container {
            height: 360px;
          }
          .my-custom-face-container .face {
            width: 210px;
          }
        }

        .my-custom-face-container .face__eyes,
        .my-custom-face-container .face__eye-lid,
        .my-custom-face-container .face__mouth-left,
        .my-custom-face-container .face__mouth-right,
        .my-custom-face-container .face__nose,
        .my-custom-face-container .face__pupil {
          animation: eyes 1s 0.3s forwards;
        }

        .my-custom-face-container .face__eye-lid,
        .my-custom-face-container .face__pupil {
          animation-duration: 4s;
          animation-delay: 1.3s;
          animation-iteration-count: infinite;
        }

        .my-custom-face-container .face__eye-lid {
          animation-name: eye-lid;
        }
        .my-custom-face-container .face__mouth-left {
          animation-name: mouth-left;
        }
        .my-custom-face-container .face__mouth-right {
          animation-name: mouth-right;
        }
        .my-custom-face-container .face__nose {
          animation-name: nose;
        }
        .my-custom-face-container .face__pupil {
          animation-name: pupil;
        }

        @keyframes eye-lid {
          0%,
          40%,
          45%,
          100% {
            transform: translateY(0);
          }
          42.5% {
            transform: translateY(17.5px);
          }
        }

        @keyframes eyes {
          from {
            transform: translateY(112.5px);
          }
          to {
            transform: translateY(15px);
          }
        }

        @keyframes pupil {
          0%,
          37.5%,
          40%,
          45%,
          87.5%,
          100% {
            stroke-dashoffset: 0;
            transform: translate(0, 0);
          }
          12.5%,
          25%,
          62.5%,
          75% {
            transform: translate(-35px, 0);
          }
          42.5% {
            stroke-dashoffset: 35;
            transform: translate(0, 17.5px);
          }
        }

        @keyframes mouth-left {
          from,
          50% {
            stroke-dashoffset: -102;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes mouth-right {
          from,
          50% {
            stroke-dashoffset: 102;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes nose {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(0, 22.5px);
          }
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </main>
  );
}
