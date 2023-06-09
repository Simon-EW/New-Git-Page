import style from "./page.module.css";

export const metadata = {
  title: "Docs",
  description: "Git documentation",
};

export const generateStaticParams = async () => {
  return [
    { params: { title: "book" } },
    { params: { title: "videos" } },
    { params: { title: "external-links" } },
  ];
};

export default function Page({ params }: { params: { title: string } }) {
  return (
    <>
      <h1>{params.title} is not created yet</h1>
      <section>
        <p>Check out the completed pages at</p>
        <ul>
          <li>
            <a href="/docs/reference" className={style.link}>
              Reference
            </a>
          </li>
          {/* <li>
            <a href="/about/small-and-fast" className={style.link}>
              Small and Fast
            </a>
          </li> */}
        </ul>
      </section>
    </>
  );
}
