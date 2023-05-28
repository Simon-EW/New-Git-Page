import style from "./bottomNav.module.css";

interface Link {
  label: string;
  link: string;
}

export default function BottomNav({
  previous,
  next,
}: {
  previous?: Link;
  next?: Link;
}) {
  return (
    <nav className={style.nav}>
      {previous ? (
        <a href={previous.link}>
          <span className={style.arrow}>&#8592;</span>
          <span>{previous.label}</span>
        </a>
      ) : (
        <span></span>
      )}
      {next ? (
        <a href={next.link}>
          <span>{next.label}</span>
          <span className={style.arrow}>&#8594;</span>
        </a>
      ) : (
        <span></span>
      )}
    </nav>
  );
}
