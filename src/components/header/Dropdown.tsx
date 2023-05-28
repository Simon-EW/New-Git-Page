"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dropdownArrow from "@/icons/DropdownArrow.svg";
import style from "./dropdown.module.css";

export default function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; link: string }[];
}) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const button = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLUListElement>(null);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (button.current && dropdown.current) {
        if (
          !button.current.contains(e.target as Node) &&
          !dropdown.current.contains(e.target as Node)
        ) {
          setClicked(false);
          setHovered(false);
        }
      }
    };

    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("click", onClickOutside);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const onClick = () => {
    if (clicked) {
      setClicked(false);
      setHovered(false);
    } else {
      setClicked(true);
    }
  };

  const onMouseEnter = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (window.innerWidth < 1000) {
      return;
    }
    setHovered(true);
  };

  const onMouseLeave = () => {
    timeout.current = setTimeout(() => {
      setHovered(false);
    }, 150);
  };

  return (
    <>
      <div className={style.dropdown}>
        <button
          aria-expanded={hovered || clicked}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={button}
          className={style.button}
        >
          <span>{label}</span>
          <Image
            src={dropdownArrow}
            alt=""
            aria-hidden
            className={hovered || clicked ? style.flip : ""}
          />
        </button>
        <ul
          aria-expanded={hovered || clicked}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={dropdown}
          className={`${style.items}`}
        >
          {items.map((child) => (
            <li key={child.label}>
              <a href={`/${label.toLowerCase()}/${child.link}`}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
