let calInitialized = false;
let calPromise: Promise<any> | null = null;

export async function getLazyCal() {
  if (typeof window === "undefined") return null;
  if (!calPromise) {
    calPromise = (async () => {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      });
      calInitialized = true;
      return cal;
    })();
  }
  return calPromise;
}

export function setupLazyCalListener() {
  if (typeof window === "undefined") return;

  const onInteraction = (e: Event) => {
    const target = e.target as HTMLElement | null;
    if (target && target.closest("[data-cal-link]")) {
      getLazyCal();
    }
  };

  document.addEventListener("pointerenter", onInteraction, { passive: true, capture: true });
  document.addEventListener("click", onInteraction, { passive: true, capture: true });
}
