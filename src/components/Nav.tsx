import style from "./nav.module.css";
import Image from "next/image";
import gitIcon from "@/icons/Git.svg";

import Dropdown from "./Dropdown";

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
          <Dropdown
            label="About"
            items={[{ label: "Test", link: "google.com" }]}
          />
        </li>
      </ul>
      <button className={style.download}>Download</button>
    </nav>
  );
}
