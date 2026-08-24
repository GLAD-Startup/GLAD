import * as React from "react";

export function RetroTv404() {
  return (
    <div className="retro-tv-wrapper relative flex items-center justify-center select-none overflow-visible">
      <style>{`
        .retro-tv-wrapper {
          font-size: 13px;
        }
        @media (min-width: 640px) {
          .retro-tv-wrapper {
            font-size: 15px;
          }
        }

        .retro-tv-wrapper .main_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26em;
          height: 20em;
          position: relative;
        }

        .retro-tv-wrapper .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .retro-tv-wrapper .antenna {
          width: 4.5em;
          height: 4.5em;
          border-radius: 50%;
          border: 2px solid black;
          background-color: #f27405;
          margin-bottom: -5.5em;
          margin-left: 0em;
          z-index: -1;
          position: relative;
        }
        .retro-tv-wrapper .antenna_shadow {
          position: absolute;
          background-color: transparent;
          width: 42px;
          height: 48px;
          margin-left: 1.4em;
          border-radius: 45%;
          transform: rotate(140deg);
          border: 4px solid transparent;
          box-shadow:
            inset 0px 14px #a85103,
            inset 0px 14px 1px 1px #a85103;
        }
        .retro-tv-wrapper .antenna::after {
          content: "";
          position: absolute;
          top: 0.6em;
          left: 0.6em;
          transform: rotate(-25deg);
          width: 0.9em;
          height: 0.45em;
          border-radius: 50%;
          background-color: #f69e50;
        }
        .retro-tv-wrapper .antenna::before {
          content: "";
          position: absolute;
          top: 1.5em;
          left: 1.1em;
          transform: rotate(-20deg);
          width: 1.3em;
          height: 0.7em;
          border-radius: 50%;
          background-color: #f69e50;
        }
        .retro-tv-wrapper .a1 {
          position: relative;
          top: -95%;
          left: -125%;
          width: 11em;
          height: 5em;
          border-radius: 50px;
          background-image: linear-gradient(
            #171717,
            #171717,
            #353535,
            #353535,
            #171717
          );
          transform: rotate(-29deg);
          clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
        }
        .retro-tv-wrapper .a1d {
          position: relative;
          top: -205%;
          left: -33%;
          transform: rotate(45deg);
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          border: 2px solid black;
          background-color: #979797;
          z-index: 99;
        }
        .retro-tv-wrapper .a2 {
          position: relative;
          top: -200%;
          left: -8%;
          width: 11em;
          height: 3.8em;
          border-radius: 50px;
          background-color: #171717;
          background-image: linear-gradient(
            #171717,
            #171717,
            #353535,
            #353535,
            #171717
          );
          margin-right: 4.5em;
          clip-path: polygon(
            47% 0,
            47% 0,
            34% 34%,
            54% 25%,
            32% 100%,
            29% 96%,
            49% 32%,
            30% 38%
          );
          transform: rotate(-8deg);
        }
        .retro-tv-wrapper .a2d {
          position: relative;
          top: -285%;
          left: 92%;
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          border: 2px solid black;
          background-color: #979797;
          z-index: 99;
        }

        .retro-tv-wrapper .tv {
          width: 17em;
          height: 9.4em;
          margin-top: 2.8em;
          border-radius: 15px;
          background-color: #d36604;
          display: flex;
          justify-content: center;
          border: 2px solid #1d0e01;
          box-shadow: inset 0.2em 0.2em #e69635;
          position: relative;
        }
        .retro-tv-wrapper .tv::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 13px;
          background:
            repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px
              2500px,
            repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px
              2500px;
          background-blend-mode: difference;
          opacity: 0.09;
          pointer-events: none;
        }
        .retro-tv-wrapper .curve_svg {
          position: absolute;
          top: 0.4em;
          left: 0.4em;
          height: 12px;
          width: 12px;
          fill: #1d0e01;
        }
        .retro-tv-wrapper .display_div {
          display: flex;
          align-items: center;
          align-self: center;
          justify-content: center;
          border-radius: 12px;
          box-shadow: 3px 3px 0px #e69635;
        }
        .retro-tv-wrapper .screen_out {
          width: auto;
          height: auto;
          border-radius: 10px;
        }
        .retro-tv-wrapper .screen_out1 {
          width: 11em;
          height: 7.8em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          overflow: hidden;
        }
        .retro-tv-wrapper .screen {
          width: 12.5em;
          height: 7.8em;
          border: 2px solid #1d0e01;
          background:
            radial-gradient(ellipse at center, rgba(235, 245, 238, 0.95) 0%, rgba(200, 215, 205, 0.9) 100%),
            repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px 2500px;
          background-blend-mode: overlay;
          animation: retroB 0.25s infinite alternate;
          border-radius: 10px;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Face inside TV screen styles */
        .retro-tv-wrapper .tv-face-svg {
          width: 5.2em;
          height: auto;
          color: #121815;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));
        }

        .retro-tv-wrapper .face__eyes,
        .retro-tv-wrapper .face__eye-lid,
        .retro-tv-wrapper .face__mouth-left,
        .retro-tv-wrapper .face__mouth-right,
        .retro-tv-wrapper .face__nose,
        .retro-tv-wrapper .face__pupil {
          animation: faceEyes 1s 0.3s forwards;
        }

        .retro-tv-wrapper .face__eye-lid,
        .retro-tv-wrapper .face__pupil {
          animation-duration: 4s;
          animation-delay: 1.3s;
          animation-iteration-count: infinite;
        }

        .retro-tv-wrapper .face__eye-lid {
          animation-name: faceEyeLid;
        }
        .retro-tv-wrapper .face__mouth-left {
          animation-name: faceMouthLeft;
        }
        .retro-tv-wrapper .face__mouth-right {
          animation-name: faceMouthRight;
        }
        .retro-tv-wrapper .face__nose {
          animation-name: faceNose;
        }
        .retro-tv-wrapper .face__pupil {
          animation-name: facePupil;
        }

        @keyframes faceEyeLid {
          0%, 40%, 45%, 100% {
            transform: translateY(0);
          }
          42.5% {
            transform: translateY(17.5px);
          }
        }

        @keyframes faceEyes {
          from {
            transform: translateY(112.5px);
          }
          to {
            transform: translateY(15px);
          }
        }

        @keyframes facePupil {
          0%, 37.5%, 40%, 45%, 87.5%, 100% {
            stroke-dashoffset: 0;
            transform: translate(0, 0);
          }
          12.5%, 25%, 62.5%, 75% {
            transform: translate(-35px, 0);
          }
          42.5% {
            stroke-dashoffset: 35;
            transform: translate(0, 17.5px);
          }
        }

        @keyframes faceMouthLeft {
          from, 50% {
            stroke-dashoffset: -102;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes faceMouthRight {
          from, 50% {
            stroke-dashoffset: 102;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes faceNose {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(0, 22.5px);
          }
        }

        .retro-tv-wrapper .lines {
          display: flex;
          column-gap: 0.15em;
          align-self: flex-end;
          margin-bottom: 0.6em;
          margin-left: 0.3em;
        }
        .retro-tv-wrapper .line1,
        .retro-tv-wrapper .line3 {
          width: 2px;
          height: 0.5em;
          background-color: black;
          border-radius: 25px 25px 0px 0px;
          margin-top: 0.5em;
        }
        .retro-tv-wrapper .line2 {
          width: 2px;
          height: 1em;
          background-color: black;
          border-radius: 25px 25px 0px 0px;
        }

        .retro-tv-wrapper .buttons_div {
          width: 3.8em;
          align-self: center;
          height: 7.8em;
          background-color: #e69635;
          border: 2px solid #1d0e01;
          padding: 0.5em;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 0.6em;
          box-shadow: 2.5px 2.5px 0px #e69635;
          margin-left: 0.4em;
        }
        .retro-tv-wrapper .b1 {
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid black;
          position: relative;
          box-shadow:
            inset 2px 2px 1px #b49577,
            -2px 0px #513721,
            -2px 0px 0px 1px black;
        }
        .retro-tv-wrapper .b1::before {
          content: "";
          position: absolute;
          top: 0.8em;
          left: 0.4em;
          transform: rotate(47deg);
          border-radius: 5px;
          width: 0.1em;
          height: 0.35em;
          background-color: #000000;
        }
        .retro-tv-wrapper .b1::after {
          content: "";
          position: absolute;
          top: 0.7em;
          left: 0.7em;
          transform: rotate(47deg);
          border-radius: 5px;
          width: 0.1em;
          height: 0.45em;
          background-color: #000000;
        }
        .retro-tv-wrapper .b1 div {
          position: absolute;
          top: 0.1em;
          left: 0.55em;
          transform: rotate(45deg);
          width: 0.15em;
          height: 1.2em;
          background-color: #000000;
        }
        .retro-tv-wrapper .b2 {
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid black;
          position: relative;
          box-shadow:
            inset 2px 2px 1px #b49577,
            -2px 0px #513721,
            -2px 0px 0px 1px black;
        }
        .retro-tv-wrapper .b2::before {
          content: "";
          position: absolute;
          top: 0.85em;
          left: 0.65em;
          transform: rotate(-45deg);
          border-radius: 5px;
          width: 0.15em;
          height: 0.35em;
          background-color: #000000;
        }
        .retro-tv-wrapper .b2::after {
          content: "";
          position: absolute;
          top: 0.1em;
          left: 0.55em;
          transform: rotate(-45deg);
          width: 0.15em;
          height: 1.2em;
          background-color: #000000;
        }
        .retro-tv-wrapper .speakers {
          display: flex;
          flex-direction: column;
          row-gap: 0.4em;
          width: 100%;
        }
        .retro-tv-wrapper .speakers .g1 {
          display: flex;
          column-gap: 0.2em;
          justify-content: center;
        }
        .retro-tv-wrapper .speakers .g1 .g11,
        .retro-tv-wrapper .speakers .g1 .g12,
        .retro-tv-wrapper .speakers .g1 .g13 {
          width: 0.55em;
          height: 0.55em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 1.5px solid black;
          box-shadow: inset 1px 1px 1px #b49577;
        }
        .retro-tv-wrapper .speakers .g {
          width: 100%;
          height: 2px;
          background-color: #171717;
        }

        .retro-tv-wrapper .bottom {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 7.5em;
          position: relative;
        }
        .retro-tv-wrapper .base1,
        .retro-tv-wrapper .base2 {
          height: 0.9em;
          width: 1.8em;
          border: 2px solid #171717;
          background-color: #4d4d4d;
          margin-top: -0.15em;
          z-index: 1;
        }
        .retro-tv-wrapper .base3 {
          position: absolute;
          height: 0.15em;
          width: 15.5em;
          background-color: #171717;
          bottom: -0.1em;
        }

        .retro-tv-wrapper .text_404 {
          position: absolute;
          display: flex;
          flex-direction: row;
          column-gap: 5.5em;
          z-index: 0;
          align-items: center;
          justify-content: center;
          opacity: 0.08;
          font-family: inherit;
          font-weight: 900;
          pointer-events: none;
        }
        .retro-tv-wrapper .text_4041,
        .retro-tv-wrapper .text_4042,
        .retro-tv-wrapper .text_4043 {
          transform: scaleY(14) scaleX(6);
          font-size: 1.2em;
          color: black;
        }

        @keyframes retroB {
          100% {
            background-position:
              50% 0,
              60% 50%;
          }
        }
      `}</style>

      <div className="main_wrapper">
        <div className="main">
          {/* Antenna */}
          <div className="antenna">
            <div className="antenna_shadow" />
            <div className="a1" />
            <div className="a1d" />
            <div className="a2" />
            <div className="a2d" />
          </div>

          {/* TV Cabinet */}
          <div className="tv">
            <div className="cruve">
              <svg
                className="curve_svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 189.929 189.929"
              >
                <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
              </svg>
            </div>

            {/* TV Screen with the Animated 404 Face */}
            <div className="display_div">
              <div className="screen_out">
                <div className="screen_out1">
                  <div className="screen">
                    <svg className="tv-face-svg" viewBox="0 0 320 380">
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={26}
                      >
                        <g className="face__eyes" transform="translate(0,112.5)">
                          <g transform="translate(15,0)">
                            <polyline
                              className="face__eye-lid"
                              points="37,0 0,120 75,120"
                            />
                            <polyline
                              className="face__pupil"
                              points="55,120 55,155"
                              strokeDasharray="35 35"
                            />
                          </g>
                          <g transform="translate(230,0)">
                            <polyline
                              className="face__eye-lid"
                              points="37,0 0,120 75,120"
                            />
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
                        <g
                          transform="translate(65,334)"
                          strokeDasharray="102 102"
                        >
                          <path
                            className="face__mouth-left"
                            d="M 0 30 C 0 30 40 0 95 0"
                          />
                          <path
                            className="face__mouth-right"
                            d="M 95 0 C 150 0 190 30 190 30"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tuning Lines */}
            <div className="lines">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>

            {/* Buttons & Speakers */}
            <div className="buttons_div">
              <div className="b1">
                <div />
              </div>
              <div className="b2" />
              <div className="speakers">
                <div className="g1">
                  <div className="g11" />
                  <div className="g12" />
                  <div className="g13" />
                </div>
                <div className="g" />
                <div className="g" />
              </div>
            </div>
          </div>

          {/* TV Stand Base */}
          <div className="bottom">
            <div className="base1" />
            <div className="base2" />
            <div className="base3" />
          </div>
        </div>

        {/* Big 404 Background Lettering */}
        <div className="text_404">
          <div className="text_4041">4</div>
          <div className="text_4042">0</div>
          <div className="text_4043">4</div>
        </div>
      </div>
    </div>
  );
}
