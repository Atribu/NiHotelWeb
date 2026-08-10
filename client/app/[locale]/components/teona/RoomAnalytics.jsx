"use client";

import { useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { pushAnalyticsEvent } from "@/lib/analytics";

export function RoomListAnalytics({ items, listId, listName, locale }) {
  const hasSent = useRef(false);

  useEffect(() => {
    if (hasSent.current) return;
    hasSent.current = true;

    pushAnalyticsEvent("view_item_list", {
      site_language: locale,
      ecommerce: {
        item_list_id: listId,
        item_list_name: listName,
        items,
      },
    });
  }, [items, listId, listName, locale]);

  return null;
}

export function RoomDetailAnalytics({ item, locale }) {
  const hasSent = useRef(false);

  useEffect(() => {
    if (hasSent.current) return;
    hasSent.current = true;

    pushAnalyticsEvent("view_item", {
      room_type: item.item_id,
      site_language: locale,
      ecommerce: {
        items: [item],
      },
    });
  }, [item, locale]);

  return null;
}

export function TrackedRoomLink({
  children,
  item,
  listId,
  listName,
  locale,
  onClick,
  ...props
}) {
  function handleClick(event) {
    pushAnalyticsEvent("select_item", {
      room_type: item.item_id,
      site_language: locale,
      ecommerce: {
        item_list_id: listId,
        item_list_name: listName,
        items: [item],
      },
    });

    onClick?.(event);
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
