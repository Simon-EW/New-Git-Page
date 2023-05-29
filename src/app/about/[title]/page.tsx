import style from "./page.module.css";

export const metadata = {
  title: "About",
  description: "Learn about Git",
};

export const generateStaticParams = async () => {
  return [
    { params: { title: "distributed" } },
    { params: { title: "data-assurance" } },
    { params: { title: "staging-area" } },
    { params: { title: "free-and-open-source" } },
    { params: { title: "trademark" } },
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
            <a href="/about/branching-and-merging" className={style.link}>
              Branching and Merging
            </a>
          </li>
          <li>
            <a href="/about/small-and-fast" className={style.link}>
              Small and Fast
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
