import gitIcon from "@/icons/Git.svg";
import gitHubIcon from "@/icons/Github.svg";
import tarBallIcon from "@/icons/Tarball.svg";
import windowsIcon from "@/icons/Windows.svg";
import macIcon from "@/icons/Mac.svg";

import style from "./footer.module.css";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.git_icon}>
        <Image src={gitIcon} alt="" aria-hidden />
        <span>Git</span>
      </div>
      <div className={style.download_wrapper}>
        <span>Downloads</span>
        <div className={style.downloads}>
          <a href="https://github.com/git/git" target="_blank">
            <Image src={gitHubIcon} alt="" aria-hidden /> <span>Source</span>
          </a>
          <a
            href="https://www.kernel.org/pub/software/scm/git/"
            target="_blank"
          >
            <Image src={tarBallIcon} alt="" aria-hidden /> <span>Tarballs</span>
          </a>
          <a href="/download/git-clients#windows">
            <Image src={windowsIcon} alt="" aria-hidden /> <span>Windows</span>
          </a>
          <a href="/download/git-clients#mac">
            <Image src={macIcon} alt="" aria-hidden /> <span>Mac</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
