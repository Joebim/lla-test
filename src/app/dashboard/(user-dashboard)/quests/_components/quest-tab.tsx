"use client";

import { useState } from "react";

import { QuestTabBody } from "./quest-tab-body";
import { QuestTabHeader } from "./quest-tab-header";

export default function QuestTab() {
  const [tab, setTab] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <QuestTabHeader tab={tab} setTab={setTab} />
      <QuestTabBody tab={tab} />
    </div>
  );
}
