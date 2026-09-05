'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { siteConfig } from '@/data/site';

export async function openCalModal(calLink: string = siteConfig.contact.calLink) {
  try {
    const modalBoxes = document.querySelectorAll('cal-modal-box');
    modalBoxes.forEach((box) => {
      (box as HTMLElement).style.display = '';
      (box as HTMLElement).style.visibility = '';
    });
    const cal = await getCalApi();
    cal('modal', {
      calLink,
      config: {
        layout: 'month_view',
        theme: 'light',
      },
    });
  } catch (err) {
    console.error('Failed to open Cal.com modal:', err);
    // Fallback if embed fails
    window.open(`https://cal.com/${calLink}`, '_blank', 'noopener,noreferrer');
  }
}

export default function CalProvider() {
  useEffect(() => {
    (async function initCal() {
      try {
        const cal = await getCalApi();
        cal('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
          theme: 'light',
          cssVarsPerTheme: {
            light: {
              'cal-brand': '#4E6B00',
              'cal-text': '#0A0A0B',
              'cal-bg': '#FBFBF9',
              'cal-bg-muted': '#F2F2EE',
              'cal-border': '#E2E2DD',
            },
            dark: {
              'cal-brand': '#C6F000',
              'cal-text': '#FBFBF9',
              'cal-bg': '#0A0A0B',
              'cal-bg-muted': '#141416',
              'cal-border': 'rgba(255,255,255,0.15)',
            },
          },
        });

        // Listen for internal close events from the Cal embed
        cal('on', {
          action: '__closeIframe',
          callback: () => {
            document.querySelectorAll('cal-modal-box').forEach((box) => {
              (box as HTMLElement).style.display = 'none';
              (box as HTMLElement).style.visibility = 'hidden';
              box.setAttribute('state', 'closed');
            });
            document.body.style.overflow = '';
          },
        });
      } catch (err) {
        console.error('Cal.com initialization error:', err);
      }
    })();

    const applyCustomShadowStyles = () => {
      const modalBoxes = document.querySelectorAll('cal-modal-box');
      modalBoxes.forEach((modalBox) => {
        if (modalBox.shadowRoot) {
          if (!modalBox.shadowRoot.querySelector('#glad-cal-custom-style')) {
            const style = document.createElement('style');
            style.id = 'glad-cal-custom-style';
            style.textContent = `
              :host([state="closed"]) {
                display: none !important;
                visibility: hidden !important;
              }
              .my-backdrop {
                background-color: rgba(10, 10, 11, 0.22) !important;
                backdrop-filter: blur(4px) !important;
                -webkit-backdrop-filter: blur(4px) !important;
              }
              .header {
                position: fixed !important;
                top: 24px !important;
                right: 28px !important;
                z-index: 999999999999 !important;
                float: none !important;
              }
              .close {
                color: #0A0A0B !important;
                background: #FBFBF9 !important;
                border: 1px solid rgba(10, 10, 11, 0.14) !important;
                width: 42px !important;
                height: 42px !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-family: inherit !important;
                line-height: 1 !important;
                position: static !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
                transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
                cursor: pointer !important;
              }
              .close:hover {
                background: #0A0A0B !important;
                color: #FBFBF9 !important;
                border-color: #0A0A0B !important;
                transform: scale(1.08) !important;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14) !important;
              }
              .close:active {
                transform: scale(0.96) !important;
              }
              .modal-box {
                border: none !important;
                box-shadow: none !important;
                outline: none !important;
                background: transparent !important;
              }
              .body,
              #skeleton-container {
                border: none !important;
                box-shadow: none !important;
                outline: none !important;
                background: transparent !important;
              }
            `;
            modalBox.shadowRoot.appendChild(style);
          }

          // Wire up direct close handler on close button
          const closeBtn = modalBox.shadowRoot.querySelector('.close') as HTMLButtonElement | null;
          if (closeBtn && !closeBtn.getAttribute('data-glad-wired')) {
            closeBtn.setAttribute('data-glad-wired', 'true');
            closeBtn.innerHTML = `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none; display: block;">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            `;
            closeBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const mb = modalBox as unknown as { explicitClose?: () => void };
              if (typeof mb.explicitClose === 'function') {
                mb.explicitClose();
              }
              (modalBox as HTMLElement).style.display = 'none';
              (modalBox as HTMLElement).style.visibility = 'hidden';
              modalBox.setAttribute('state', 'closed');
              document.body.style.overflow = '';
            });
          }

          // Wire backdrop click to close modal when clicking outside the card
          const backdrop = modalBox.shadowRoot.querySelector('.my-backdrop');
          if (backdrop && !backdrop.getAttribute('data-glad-wired')) {
            backdrop.setAttribute('data-glad-wired', 'true');
            backdrop.addEventListener('click', (e) => {
              const target = e.target as HTMLElement;
              if (target === backdrop || target.classList.contains('header')) {
                const mb = modalBox as unknown as { explicitClose?: () => void };
                if (typeof mb.explicitClose === 'function') {
                  mb.explicitClose();
                }
                (modalBox as HTMLElement).style.display = 'none';
                (modalBox as HTMLElement).style.visibility = 'hidden';
                modalBox.setAttribute('state', 'closed');
                document.body.style.overflow = '';
              }
            });
          }
        }
      });
    };

    const observer = new MutationObserver(applyCustomShadowStyles);
    observer.observe(document.body, { childList: true, subtree: true });
    applyCustomShadowStyles();

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
