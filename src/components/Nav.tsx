import style from "./nav.module.css";
import Image from "next/image";
import gitIcon from "@/icons/Git.svg";
import dropdownArrow from "@/icons/DropdownArrow.svg";
import { useRef, useState } from "react";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Image src={gitIcon} alt="Git Logo" />
      </div>
      <ul className={style.links}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <button aria-expanded="false">
            <span>About</span>
            <Image src={dropdownArrow} alt="" aria-hidden />
          </button>
          <div aria-labelledby="about"></div>
        </li>
      </ul>
      <button className={style.download}>Download</button>
    </nav>
  );
}

function Dropdown({
  label,
  children,
}: {
  label: string;
  children: { label: string; link: string }[];
}) {
  const [expanded, setExpanded] = useState(false);

  const button = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setExpanded((state) => !state);
  };

  const onMouseEnter = () => {
    setExpanded(true);
  };

  const onMouseLeave = (e: MouseEvent) => {
    setExpanded(false);
  };

  return (
    <>
      <button
        aria-expanded="false"
        aria-label={label}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span>{label}</span>
        <Image src={dropdownArrow} alt="" aria-hidden />
      </button>
      <ul aria-labelledby={label}>
        {children.map((child) => (
          <li key={label} className={expanded ? "expanded" : ""}>
            <a href={child.link}>{child.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
