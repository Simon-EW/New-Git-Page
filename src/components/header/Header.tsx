import style from "./header.module.css";
import Image from "next/image";
import gitIcon from "@/icons/Git.svg";
import downloadIcon from "@/icons/Download.svg";

import Dropdown from "./Dropdown";

export default function Nav() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={gitIcon} alt="Git Logo" />
        <span>Git</span>
      </div>
      <nav>
        <ul className={style.links}>
          <li>
            <Dropdown
              label="About"
              items={[
                {
                  label: "Branching and Merging",
                  link: "branching-and-merging",
                },
                { label: "Small and Fast", link: "small-and-fast" },
                { label: "Distributed", link: "distributed" },
                { label: "Data Assurance", link: "data-assurance" },
                { label: "Staging Area", link: "staging-area" },
                { label: "Free and Open Source", link: "free-and-open-source" },
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
            <a href="google.com">Community</a>
          </li>
        </ul>
      </nav>

      <a className={style.download} href="/download">
        <Image src={downloadIcon} alt="" aria-hidden />
        <span>Download</span>
      </a>
    </header>
  );
}
