import Image from "next/image";
import style from "../layout.module.css";
import pageStyle from "./page.module.css";
import Benchmarks from "@/components/about/Benchmarks";
import BenchmarkResults from "@/components/about/BenchmarkResults";

import { results } from "./benchmarks";
import BottomNav from "@/components/about/BottomNav";

export default function SmallAndFast() {
  return (
    <>
      <h1>Small and Fast</h1>
      <section className={style.section}>
        <p>
          <span className={style.focus}>Git is fast.</span> With Git, nearly all
          operations are performed locally, giving it a huge speed advantage on
          centralized systems that constantly have to communicate with a server
          somewhere.
        </p>
        <p>
          Git was built to work on the Linux kernel, meaning that it has had to
          effectively handle large repositories from day one. Git is written in
          C, reducing the overhead of runtimes associated with higher-level
          languages. Speed and performance has been a primary design goal of Git
          from the start.
        </p>
      </section>
      <section className={style.section}>
        <h2>Benchmarks</h2>
        <p>
          Let's see how common operations stack up against Subversion, a common
          centralized version control system that is similar to CVS or Perforce.
          <i>Smaller is faster.</i>
        </p>
        <div className={pageStyle.benchmarks}>
          <Benchmarks />
        </div>
        <p>
          For testing, large AWS instances were set up in the same availability
          zone. Git and SVN were installed on both machines, the Ruby repository
          was copied to both Git and SVN servers, and common operations were
          performed on both.
        </p>
        <p>
          In some cases, the commands don't match up exactly. Here, matching on
          the lowest common denominator was attempted. For example, the 'commit'
          tests also include the time to push for Git, though most of the time
          you would not actually be pushing to the server immediately after a
          commit where the two commands cannot be separated in SVN.
        </p>
        <p>All of these times are in seconds.</p>
        <div className={pageStyle.benchmark_results}>
          <BenchmarkResults results={results} />
        </div>
        <p>
          Note that this is the best case scenario for SVN—a server with no load
          with a gigabit connection to the client machine. Nearly all of these
          times would be even worse for SVN if that connection was slower, while
          many of the Git times would not be affected.
        </p>
        <p>
          Clearly, in many of these common version control operations,{" "}
          <span className={style.focus}>
            Git is one or two orders of magnitude faster than SVN
          </span>
          , even under ideal conditions for SVN.
        </p>
      </section>
      <BottomNav
        previous={{
          label: "Branching & Merging",
          link: "/about/branching-and-merging",
        }}
        next={{ label: "Distributed", link: "/about/distributed" }}
      />
    </>
  );
}
