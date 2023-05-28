import style from "./layout.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={style.main}>{children}</main>;
}
