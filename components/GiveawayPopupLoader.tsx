"use client";

import dynamic from "next/dynamic";

const GiveawayPopup = dynamic(() => import("@/components/GiveawayPopup"), {
  ssr: false,
});

export default function GiveawayPopupLoader() {
  return <GiveawayPopup />;
}
