import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-BPMMSW8U.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getAvailableSlots_createServerFn_handler = createServerRpc({
  id: "55cbb0ccceeac9040323e7bc33abb4620b0e86351462f98a7b8c26bb9a2beeec",
  name: "getAvailableSlots",
  filename: "src/routes/index.tsx"
}, (opts) => getAvailableSlots.__executeServer(opts));
const getAvailableSlots = createServerFn({
  method: "GET"
}).handler(getAvailableSlots_createServerFn_handler, async () => {
  try {
    const apiKey = process.env.CALCOM_API_KEY;
    if (!apiKey) return 2;
    const response = await fetch(`https://api.cal.com/v2/bookings`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-08-13"
      }
    });
    if (!response.ok) {
      console.error("Failed to fetch bookings from Cal.com", await response.text());
      return 2;
    }
    const data = await response.json();
    if (data.status === "success" && Array.isArray(data.data)) {
      const countedSlugs = ["project-consultation", "technical-discussion"];
      const validBookings = data.data.filter((booking) => {
        return booking.status === "accepted" && booking.eventType && countedSlugs.includes(booking.eventType.slug);
      });
      const CAPACITY_LIMIT = 5;
      const slotsLeft = Math.max(0, CAPACITY_LIMIT - validBookings.length);
      return slotsLeft;
    }
    return 2;
  } catch (err) {
    console.error("Error fetching bookings", err);
    return 2;
  }
});
export {
  getAvailableSlots_createServerFn_handler
};
