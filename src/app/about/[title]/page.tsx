import style from "./page.module.css";

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
