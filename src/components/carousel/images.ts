import Android from "@/icons/carousel/Android.svg";
import Eclipse from "@/icons/carousel/Eclipse.svg";
import Gnome from "@/icons/carousel/Gnome.svg";
import Google from "@/icons/carousel/Google.svg";
import Linkedin from "@/icons/carousel/Linkedin.svg";
import Linux from "@/icons/carousel/Linux.svg";
import Microsoft from "@/icons/carousel/Microsoft.svg";
import Netflix from "@/icons/carousel/Netflix.svg";
import Perl from "@/icons/carousel/Perl.svg";
import Postgres from "@/icons/carousel/Postgres.svg";
import Ruby from "@/icons/carousel/Ruby.svg";
import Xorg from "@/icons/carousel/Xorg.svg";


// Make images into an array of objects with src, alt, and href
// to be used in the carousel component, hrefs are the same as on the
// normal git page
export const images = [
  {
    src: Android,
    alt: "Android",
    href: "https://android-review.googlesource.com/#/q/status:open,n,z",
  },
  { src: Eclipse, alt: "Eclipse", href: "https://git.eclipse.org/c/" },
  { src: Gnome, alt: "Gnome", href: "https://www.gnome.org/" },
  { src: Google, alt: "Google", href: "https://gitlab.gnome.org/GNOME" },
  { src: Linkedin, alt: "Linkedin", href: "https://www.github.com/linkedin" },
  {
    src: Linux,
    alt: "Linux",
    href: "https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git",
  },
  {
    src: Microsoft,
    alt: "Microsoft",
    href: "https://www.github.com/microsoft",
  },
  { src: Netflix, alt: "Netflix", href: "https://www.github.com/netflix" },
  { src: Perl, alt: "Perl", href: "https://perl5.git.perl.org/perl.git" },
  {
    src: Postgres,
    alt: "Postgres",
    href: "https://git.postgresql.org/gitweb/",
  },
  { src: Ruby, alt: "Ruby", href: "https://github.com/rails/rails" },
  {
    src: Xorg,
    alt: "Xorg",
    href: "https://cgit.freedesktop.org/xorg/xserver/",
  },
];
