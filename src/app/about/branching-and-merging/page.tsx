import Image from "next/image";
import style from "../layout.module.css";
import pageStyle from "./page.module.css";

import branchImage from "@/images/BranchingAndMerging/branches.png";
import BottomNav from "@/components/about/BottomNav";

export default function BranchingAndMerging() {
  return (
    <>
      <h1>Branching and Merging</h1>
      <section className={style.section}>
        <p>
          The Git feature that really makes it stand apart from nearly every
          other SCM out there is its branching model.
        </p>
        <p>
          Git allows and encourages you to have multiple local branches that can
          be entirely independent of each other. The creation, merging, and
          deletion of those lines of development takes seconds.
        </p>
        <div className={pageStyle.list_wrapper}>
          <p>This means that you can do things like:</p>
          <ul className={style.list}>
            <li>
              <p>
                <span className={style.focus}>
                  Frictionless Context Switching.
                </span>{" "}
                Create a branch to try out an idea, commit a few times, switch
                back to where you branched from, apply a patch, switch back to
                where you are experimenting, and merge it in.
              </p>
            </li>
            <li>
              <p>
                <span className={style.focus}>Role-Based Codelines.</span> Have
                a branch that always contains only what goes to production,
                another that you merge work into for testing, and several
                smaller ones for day to day work.
              </p>
            </li>
            <li>
              <p>
                <span className={style.focus}>Feature Based Workflow.</span>{" "}
                Create new branches for each new feature you&apos;re working on
                so you can seamlessly switch back and forth between them, then
                delete each branch when that feature gets merged into your main
                line.
              </p>
            </li>
            <li>
              <p>
                <span className={style.focus}>Disposable Experimentation.</span>{" "}
                Create a branch to experiment in, realize it&apos;s not going to
                work, and just delete it - abandoning the work—with nobody else
                ever seeing it (even if you&apos;ve pushed other branches in the
                meantime).
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={style.section}>
        <Image
          src={branchImage}
          alt="Image visualizing 3 branches, main, dev and topic"
          className={pageStyle.image}
        />
        <p>
          Notably, when you push to a remote repository, you do not have to push
          all of your branches. You can choose to share just one of your
          branches, a few of them, or all of them. This tends to free people to
          try new ideas without worrying about having to plan how and when they
          are going to merge it in or share it with others.
        </p>
        <p>
          There are ways to accomplish some of this with other systems, but the
          work involved is much more difficult and error-prone. Git makes this
          process incredibly easy and it changes the way most developers work
          when they learn it.
        </p>
      </section>
      <BottomNav
        next={{ label: "Small & Fast", link: "/about/small-and-fast" }}
      />
    </>
  );
}
