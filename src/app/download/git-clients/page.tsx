import Image from "next/image";
import style from "../layout.module.css";
import pageStyle from "./page.module.css";
import downloadIcon from "@/icons/Download.svg";

export default function GitClients() {
  return (
    <>
      <h1>Git Clients</h1>

      <section className={`${style.section} ${pageStyle.oses}`}>
        <h2>Select OS</h2>
        <ul>
          <li>
            <a href="#windows">Windows</a>
          </li>
          <li>
            <a href="#mac">MacOs</a>
          </li>
          <li>
            <a href="#linux">Linux</a>
          </li>
        </ul>
      </section>

      <section id="windows" className={`${style.section} ${pageStyle.windows}`}>
        <h2>Windows</h2>
        <ul>
          <li>
            <a href="https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-64-bit.exe">
              <Image src={downloadIcon} alt="" aria-hidden />
              <span>64-bit Installer</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-32-bit.exe">
              <Image src={downloadIcon} alt="" aria-hidden />
              <span>32-bit Installer</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/PortableGit-2.40.1-64-bit.7z.exe">
              <Image src={downloadIcon} alt="" aria-hidden />
              <span>64-bit Portable</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/PortableGit-2.40.1-32-bit.7z.exe">
              <Image src={downloadIcon} alt="" aria-hidden />
              <span>32-bit Portable</span>
            </a>
          </li>
        </ul>
      </section>
      <section id="mac" className={`${style.section} ${pageStyle.mac}`}>
        <h2>MacOs</h2>
        <ul>
          <li>
            <h3>Homebrew</h3>
            <p>
              Install <a href="https://brew.sh/">homebrew</a> if you don&apos;t
              have it already, then:
            </p>
            <pre>
              <code>$ brew install git</code>
            </pre>
          </li>
          <li>
            <h3>MacPorts</h3>
            <p>
              Install <a href="https://www.macports.org/">MacPorts</a> if you
              don&apos;t have it already, then:
            </p>
            <pre>
              <code>$ sudo port install git</code>
            </pre>
          </li>
          <li>
            <h3>Installer</h3>
            <p>
              Download the latest{" "}
              <a href="https://sourceforge.net/projects/git-osx-installer/files/">
                installer
              </a>{" "}
              and follow the instructions.
            </p>
          </li>
        </ul>
      </section>
      <section id="linux" className={`${style.section} ${pageStyle.linux}`}>
        <h2>Linux</h2>
        <ul>
          <li>
            <h3>Debian/Ubuntu</h3>
            <pre>
              <code>$ apt-get install git</code>
            </pre>
          </li>
          <li>
            <h3>Fedora</h3>
            <pre>
              <code>$ dnf install git</code>
            </pre>
          </li>
          <li>
            <h3>Gentoo</h3>
            <pre>
              <code>$ emerge --ask --verbose dev-vcs/git</code>
            </pre>
          </li>
          <li>
            <h3>Arch Linux</h3>
            <pre>
              <code>$ pacman -S git</code>
            </pre>
          </li>
          <li>
            <h3>openSUSE</h3>
            <pre>
              <code>$ zypper install git</code>
            </pre>
          </li>
          <li>
            <h3>FreeBSD</h3>
            <pre>
              <code>$ pkg install git</code>
            </pre>
          </li>
          <li>
            <h3>OpenBSD</h3>
            <pre>
              <code>$ pkg_add git</code>
            </pre>
          </li>
        </ul>
      </section>
    </>
  );
}
