"use client";

import { useEffect, useRef } from "react";
import style from "./bar.module.css";

export default function Bar({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const barCover = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barCover.current) {
      barCover.current.style.setProperty("--value", `${100 - value}%`);
    }
  }, []);

  return (
    <div className={style.bar}>
      <div className={style.bar_value}>
        <div className={style.bar_cover} ref={barCover}></div>
      </div>
      <span className={style.label}>{label}</span>
    </div>
  );
}
