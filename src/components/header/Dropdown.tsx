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

  // Used to close the dropdown when the user clicks outside of it
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
    // Make sure to clear the timeout if there is one so the dropdown doesn't close
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    // Don't display the dropdown on hover on mobile or screens smaller than 1000px
    // due to the design at this size.
    if (window.innerWidth < 1000) {
      return;
    }
    setHovered(true);
  };

  const onMouseLeave = () => {
    // Make sure to clear the timeout so the dropdown doesn't close to early
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
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
