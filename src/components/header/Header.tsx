"use client";

import style from "./header.module.css";
import Image from "next/image";
import gitIcon from "@/icons/Git.svg";
import downloadIcon from "@/icons/Download.svg";

import Dropdown from "./Dropdown";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  // Code to add a border to the header when the user scrolls down
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Make sure to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [expanded, setExpanded] = useState(false);
  const header = useRef<HTMLHeadingElement>(null);

  // Close the dropdown when the user clicks outside of it
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (header.current && !header.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  const onClick = () => {
    setExpanded(!expanded);
  };

  return (
    <header
      className={`${style.header} ${showBorder ? style.show_border : ""}`}
      ref={header}
    >
      <a href="#main" className={style.skip}>
        Skip to main content
      </a>
      <a href="/" className={style.logo}>
        <Image src={gitIcon} alt="Git Logo" />
        <span>Git</span>
      </a>
      <nav>
        <button
          className={style.menu_toggle}
          onClick={onClick}
          aria-expanded={expanded}
          aria-controls="menu"
          aria-label="Open menu"
        >
          <span className={style.hamburger}>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </span>
        </button>
        <ul className={`${style.links}`} id="menu">
          <li>
            <Dropdown
              label="About"
              items={[
                {
                  label: "Branching & Merging",
                  link: "branching-and-merging",
                },
                { label: "Small & Fast", link: "small-and-fast" },
                { label: "Distributed", link: "distributed" },
                { label: "Data Assurance", link: "data-assurance" },
                { label: "Staging Area", link: "staging-area" },
                { label: "Free & Open Source", link: "free-and-open-source" },
                { label: "Trademark", link: "trademark" },
              ]}
            />
          </li>
          <li>
            <Dropdown
              label="Download"
              items={[
                { label: "Git Clients", link: "git-clients" },
                { label: "GUI Clients", link: "gui-clients" },
                { label: "Logos", link: "logos" },
              ]}
            />
          </li>
          <li>
            <Dropdown
              label="Docs"
              items={[
                { label: "Reference", link: "reference" },
                { label: "Book", link: "book" },
                { label: "Videos", link: "videos" },
                { label: "External Links", link: "external-links" },
              ]}
            />
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
        </ul>
      </nav>

      <a className={style.download} href="/download/git-clients">
        <Image src={downloadIcon} alt="" aria-hidden />
        <span>Download</span>
      </a>
    </header>
  );
}
