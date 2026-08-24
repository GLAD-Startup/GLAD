import * as React from "react";

export function RotatingXYZCards() {
  return (
    <div className="rotating-xyz-wrapper select-none">
      <style>{`
        .rotating-xyz-wrapper {
          --w-card: 130px;
          --h-card: 175px;
          --rotate-card: 15deg;
          --insetX-card: 24px;
          --t-card: calc(var(--insetX-card) * 1.25);
          --w-wrap-card: calc(var(--w-card) + calc(calc(var(--w-card) / 2) * 2));
        }

        .wrap_card {
          position: relative;
          overflow: hidden;
          width: var(--w-wrap-card);
          height: calc(var(--h-card) / 1.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          background-color: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(4px);
          overflow: hidden;
          position: relative;
          width: calc(100% - calc(var(--pd) * 2));
          height: calc(100% - calc(var(--pd) * 2));
          border-radius: calc(var(--round) - var(--pd));
        }

        .content > span {
          font-size: 240px;
          font-weight: 800;
          line-height: 0.75;
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 50% 0 0 50%;
          transform: translate(-50%, -50%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-stroke-width: 2px;
          color: transparent;
          opacity: 0;
          background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.75) 100%);
          animation: xyzOpacity 0s cubic-bezier(1, 0, 0, 1) forwards var(--delay) reverse;
        }

        .content > svg {
          height: 52px;
          width: 52px;
          position: absolute;
          inset: 50% 0 0 50%;
          opacity: 1;
          animation: xyzOpacity 8.4s cubic-bezier(1, 0, 0, 1) forwards calc(var(--delay) - 4.3s);
          transform: translate(-50%, -50%);
        }

        .xyz-card:nth-child(1) {
          --delay: 4.3s;
        }
        .xyz-card:nth-child(2) {
          --delay: 7.3s;
        }
        .xyz-card:nth-child(3) {
          --delay: 10.3s;
        }

        @keyframes xyzOpacity {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .xyz-card {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          overflow: hidden;
          animation: xyzRotating 9s cubic-bezier(0.75, 0, 0, 1.01) infinite 0s;
          border-radius: var(--round);
          background: var(--bg);
          order: var(--order);
          width: var(--w-card);
          height: var(--h-card);
          z-index: var(--z1);
          top: var(--t1);
          left: var(--l1);
          right: var(--r1);
          transform: var(--trans1);
          --pd: 4px;
          --round: 14px;
          --x1: var(--insetX-card);
          --x2: calc(var(--w-wrap-card) - calc(var(--w-card) + var(--insetX-card)));
          --to-left: rotate(calc(var(--rotate-card) * -1));
          --to-center: calc(var(--w-card) / 2);
          --to-right: rotate(calc(var(--rotate-card) * 1));
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);
        }

        .xyz-card:nth-child(1) {
          --order: 2;
          --bg: radial-gradient(
            circle,
            rgba(252, 240, 142, 1) 0%,
            rgba(246, 173, 32, 1) 40%,
            rgba(192, 142, 8, 1) 100%
          );
          --z1: 2;
          --t1: 0;
          --l1: var(--to-center);
          --r1: var(--to-center);
          --trans1: rotate(calc(var(--rotate-card) * 0));
          --z2: 0;
          --t2: var(--t-card);
          --l2: var(--x1);
          --r2: var(--x2);
          --trans2: var(--to-left);
          --z3: 0;
          --t3: var(--t-card);
          --l3: var(--x2);
          --r3: var(--x1);
          --trans3: var(--to-right);
        }

        .xyz-card:nth-child(2) {
          --order: 3;
          --bg: radial-gradient(
            circle,
            rgba(142, 249, 252, 1) 0%,
            rgba(32, 164, 246, 1) 40%,
            rgba(8, 81, 192, 1) 100%
          );
          --z1: 0;
          --t1: var(--t-card);
          --l1: var(--x2);
          --r1: var(--x1);
          --trans1: var(--to-right);
          --z2: 2;
          --t2: 0;
          --l2: var(--to-center);
          --r2: var(--to-center);
          --trans2: rotate(calc(var(--rotate-card) * 0));
          --z3: 0;
          --t3: var(--t-card);
          --l3: var(--x1);
          --r3: var(--x2);
          --trans3: var(--to-left);
        }

        .xyz-card:nth-child(3) {
          --order: 1;
          --bg: radial-gradient(
            circle,
            rgba(222, 128, 233, 1) 0%,
            rgba(213, 32, 246, 1) 40%,
            rgba(139, 6, 157, 1) 100%
          );
          --z1: 0;
          --t1: var(--t-card);
          --l1: var(--x1);
          --r1: var(--x2);
          --trans1: var(--to-left);
          --z2: 0;
          --t2: var(--t-card);
          --l2: var(--x2);
          --r2: var(--x1);
          --trans2: var(--to-right);
          --z3: 2;
          --t3: 0;
          --l3: var(--to-center);
          --r3: var(--to-center);
          --trans3: rotate(calc(var(--rotate-card) * 0));
        }

        @keyframes xyzRotating {
          0%,
          99.99% {
            z-index: var(--z1);
            top: var(--t1);
            left: var(--l1);
            right: var(--r1);
            transform: var(--trans1);
          }
          33.33% {
            z-index: var(--z2);
            top: var(--t2);
            left: var(--l2);
            right: var(--r2);
            transform: var(--trans2);
          }
          66.66% {
            z-index: var(--z3);
            top: var(--t3);
            left: var(--l3);
            right: var(--r3);
            transform: var(--trans3);
          }
        }

        .xyz-lines {
          position: absolute;
          inset: auto 0 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .xyz-lines::after {
          content: "";
          width: 100%;
          height: 0px;
          position: absolute;
          z-index: 2;
          inset: 0;
          --mask-bg: #e8e8e8;
          background: var(--mask-bg);
          mask-image: radial-gradient(
            50% 200px at top,
            transparent 20%,
            var(--mask-bg)
          );
        }

        .xyz-line {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .xyz-line::before,
        .xyz-line::after {
          content: "";
          position: absolute;
          inset: auto;
          background: linear-gradient(
            to right,
            var(--gradient-a-line, transparent),
            var(--gradient-b-line, transparent),
            var(--gradient-c-line, transparent)
          );
          filter: var(--blur-line);
          width: var(--w-line);
          height: var(--h-line);
        }

        .xyz-line:nth-child(1)::before {
          --blur-line: blur(4px);
          --w-line: 100%;
          --h-line: 5px;
          --gradient-b-line: #2f69f2;
        }

        .xyz-line:nth-child(1)::after {
          --w-line: 100%;
          --h-line: 1px;
          --gradient-b-line: #6366f1;
        }

        .xyz-line:nth-child(2)::before {
          --blur-line: blur(4px);
          --w-line: 50%;
          --h-line: 5px;
          --gradient-b-line: #84ccfc;
        }

        .xyz-line:nth-child(2)::after {
          --w-line: 50%;
          --h-line: 1px;
          --gradient-b-line: #14d3f5;
        }
      `}</style>

      <div className="wrap_card">
        {/* Card 1: X */}
        <div className="xyz-card">
          <div className="content">
            <span>X</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#xyz-gradient-full)"
                d="M12.3999 17.4999C11.8999 17.2999 11.2999 17.3999 11.0999 17.8999L9.29989 21.4999C8.99989 21.9999 9.19989 22.5999 9.69989 22.8999C9.79989 22.9999 9.99989 22.9999 10.1999 22.9999C10.5999 22.9999 10.8999 22.7999 11.0999 22.4999L12.8999 18.8999C13.0999 18.2999 12.8999 17.6999 12.3999 17.4999Z"
              />
              <path
                fill="url(#xyz-gradient-full)"
                d="M17 17.4999C16.5 17.2999 15.9 17.3999 15.7 17.8999L13.9 21.4999C13.7 21.9999 13.8 22.5999 14.3 22.7999C14.4 22.8999 14.6 22.8999 14.8 22.8999C15.2 22.8999 15.5 22.6999 15.7 22.3999L17.5 18.7999C17.7 18.2999 17.5 17.6999 17 17.4999Z"
              />
              <path
                fill="url(#xyz-gradient-full)"
                d="M7.89994 17.4999C7.39994 17.2999 6.79994 17.3999 6.59994 17.8999L4.79994 21.4999C4.59994 21.9999 4.69994 22.5999 5.19994 22.7999C5.29994 22.9999 5.49994 22.9999 5.59994 22.9999C5.99994 22.9999 6.29994 22.7999 6.49994 22.4999L8.29994 18.8999C8.59994 18.2999 8.39994 17.6999 7.89994 17.4999Z"
              />
              <path
                fill="url(#xyz-gradient-full)"
                d="M15.2 1C12.4 1 9.9 2.5 8.5 4.8C8 4.7 7.5 4.6 7 4.6C3.7 4.6 1 7.3 1 10.6C1 13.9 3.7 16.6 7 16.6H15.2C19.5 16.6 23 13.1 23 8.8C23 4.5 19.5 1 15.2 1Z"
              />
            </svg>
          </div>
        </div>

        {/* Card 2: Y */}
        <div className="xyz-card">
          <div className="content">
            <span>Y</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#xyz-gradient-full)"
                d="M12.2999 22.0001C9.59992 22.0001 6.99992 21.0001 4.99992 19.0001C0.999923 15.0001 0.999923 8.70009 4.89992 4.80009C6.29992 3.30009 8.19992 2.30009 10.2999 2.00009C10.6999 1.90009 11.0999 2.10009 11.2999 2.50009C11.4999 2.90009 11.4999 3.30009 11.1999 3.60009C8.99992 6.10009 9.19992 10.0001 11.5999 12.4001C13.9999 14.8001 17.7999 15.0001 20.2999 12.8001C20.5999 12.5001 21.0999 12.5001 21.3999 12.7001C21.7999 12.9001 21.9999 13.3001 21.8999 13.7001C21.5999 15.8001 20.5999 17.6001 19.1999 19.1001C17.2999 21.0001 14.7999 22.0001 12.2999 22.0001Z"
              />
            </svg>
          </div>
        </div>

        {/* Card 3: Z */}
        <div className="xyz-card">
          <div className="content">
            <span>Z</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#xyz-gradient-full)"
                d="M8.49995 22.9999C8.19995 22.9999 7.89995 22.8999 7.59995 22.7999C6.79995 22.3999 6.39995 21.5999 6.59995 20.7999L7.79995 14.9999H5.99995C5.19995 14.9999 4.49995 14.4999 4.19995 13.7999C3.89995 13.0999 3.99995 12.2999 4.59995 11.7999L14.0999 1.6999C14.6999 1.0999 15.6999 0.899901 16.3999 1.2999C17.1999 1.6999 17.5999 2.4999 17.3999 3.2999L16.1999 9.0999H17.9999C18.7999 9.0999 19.4999 9.5999 19.7999 10.2999C20.0999 10.9999 19.9999 11.7999 19.3999 12.2999L9.89995 22.3999C9.49995 22.7999 8.99995 22.9999 8.49995 22.9999Z"
              />
            </svg>
          </div>
        </div>

        {/* Global SVG Gradients */}
        <svg style={{ visibility: "hidden", width: 0, height: 0, position: "absolute" }}>
          <defs>
            <linearGradient id="xyz-gradient-full" x1="0%" y1="0%" x2="120%" y2="120%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bottom glowing lines */}
        <div className="xyz-lines">
          <div className="xyz-line" />
          <div className="xyz-line" />
        </div>
      </div>
    </div>
  );
}
