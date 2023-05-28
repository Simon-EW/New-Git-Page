import Image from "next/image";
import style from "./page.module.css";

// Imports starting with @/ are aliases for the src/ directory

import branchingImage from "@/images/branching.png";

import Carousel from "@/components/carousel/Carousel";
import Graph from "@/components/graph/Graph";

export default function Home() {
  return (
    <main className={style.main}>
      <section className={style.top_section}>
        <h1>Free & Open Source Version Control System</h1>
        <Image src={branchingImage} alt="Branching Image" />
        <p>
          Free and open source distributed version control system designed to
          handle everything from small to very large projects with speed and
          efficiency.
        </p>
        <div className={style.actions}>
          <a href="/download">Download</a>
          <a href="/docs">Documentation</a>
        </div>
      </section>

      <section className={style.section}>
        <h2>Companies & Projects Using Git</h2>
        <Carousel />
      </section>
      <section className={style.section}>
        <h2>Real-World Productivity Comparison</h2>
        <Graph />
      </section>
    </main>
  );
}
