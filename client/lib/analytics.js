const ROOM_BRAND = "Teona Hotel";
const ROOM_CATEGORY = "Hotel Room";

export function createRoomAnalyticsItem({
  id,
  index,
  listId,
  listName,
  name,
}) {
  const item = {
    item_id: id,
    item_name: name,
    item_brand: ROOM_BRAND,
    item_category: ROOM_CATEGORY,
    quantity: 1,
  };

  if (Number.isInteger(index)) item.index = index;
  if (listId) item.item_list_id = listId;
  if (listName) item.item_list_name = listName;

  return item;
}

export function pushAnalyticsEvent(event, parameters = {}) {
  if (typeof window === "undefined") return false;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });

  window.dataLayer.push({
    event,
    ...parameters,
  });

  return true;
}

export function getStayNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return undefined;

  const start = Date.parse(`${checkIn}T00:00:00Z`);
  const end = Date.parse(`${checkOut}T00:00:00Z`);

  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return undefined;
  }

  return Math.round((end - start) / 86_400_000);
}

export function navigateAfterAnalytics(event, parameters, destination) {
  if (typeof window === "undefined") return;

  let hasNavigated = false;
  let timeoutId;

  const navigate = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    if (timeoutId) window.clearTimeout(timeoutId);
    window.location.assign(destination);
  };

  timeoutId = window.setTimeout(navigate, 800);

  const wasQueued = pushAnalyticsEvent(event, {
    ...parameters,
    eventCallback: navigate,
    eventTimeout: 750,
  });

  if (!wasQueued) navigate();
}

export function trackAnalyticsNavigation(
  browserEvent,
  event,
  parameters,
  destination,
) {
  const opensNewContext =
    browserEvent.button !== 0 ||
    browserEvent.metaKey ||
    browserEvent.ctrlKey ||
    browserEvent.shiftKey ||
    browserEvent.altKey ||
    browserEvent.currentTarget?.target === "_blank";

  if (opensNewContext) {
    pushAnalyticsEvent(event, parameters);
    return;
  }

  browserEvent.preventDefault();
  navigateAfterAnalytics(event, parameters, destination);
}
