import style from "./page.module.css";

export default function Page({ params }: { params: { title: string } }) {
  return (
    <>
      <h1>{params.title} is not created yet</h1>
      <section>
        <p>Check out the completed pages at</p>
        <ul>
          <li>
            <a href="/download/git-clients" className={style.link}>
              Git Clients
            </a>
          </li>
          {/* <li>
            <a href="/download" className={style.link}>
              Small and Fast
            </a>
          </li> */}
        </ul>
      </section>
    </>
  );
}
