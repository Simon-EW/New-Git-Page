import style from "./page.module.css";

export const metadata = {
  title: "Git Community",
  description:
    "Git is a part of a larger community of developers and users. Here are some ways to get involved.",
};

export default function Page() {
  return (
    <>
      <main className={style.main}>
        <h1>Community</h1>
        <section className={style.section}>
          <h2>Mailing List</h2>
          <div className={style.grid}>
            <p>
              General questions or comments for the Git community can be sent to
              the mailing list by using the email address{" "}
              <a href="mailto:git@vger.kernel.org">git@vger.kernel.org</a>.
            </p>
            <p className={style.focus}>
              If you wish to report any possible bug for Git, please use this
              mailing list as well.
            </p>
            <p>
              You do not need to subscribe: you will be Cc&apos;d in replies.
              Please keep the Cc list intact when replying (use &quot;Reply to
              all&quot;). Greylisting may delay your first post for a few hours.
              Note also that the list only accepts{" "}
              <a href="https://useplaintext.email/">plain-text email</a>; please
              disable HTML in your outgoing messages.
            </p>
            <p>
              By subscribing (click{" "}
              <a href="mailto:majordomo@vger.kernel.org?body=subscribe git">
                here
              </a>
              ), you can make sure you&apos;re not missing follow-up discussions
              and you can also learn about other development in the community.
              The list archive can be found{" "}
              <a href="https://lore.kernel.org/git/">here</a>.
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2>Bug Reporting</h2>
          <div className={style.grid}>
            <p>
              Bugs in git can be reported directly to the mailing list (see
              above for details). Note that you do not need to subscribe to the
              list to send to it. You can help us out by attempting to reproduce
              the bug in the latest released version of git, or if you&apos;re
              willing to build git from source, the{" "}
              <a href="https://github.com/git/git/tree/next">next branch</a>.
              Sometimes an attempted fix may be pending in this branch, in which
              case your feedback as to whether the fix worked for you will be
              appreciated.
            </p>
            <p>
              If you are using git 2.27.0 or later, you can run{" "}
              <a href="https://git-scm.com/docs/git-bugreport">git bugreport</a>{" "}
              in the repository where you observed the bug, which generates a
              template to guide you through writing a useful bug report and
              gathers some diagnostic information about your environment.
            </p>
            <p>
              Bugs related to this website can be reported at its{" "}
              <a href="https://github.com/git/git-scm.com/issues">
                issue tracker
              </a>
              . Bugs related to the content of the &quot;Pro Git&quot; book can
              be reported at its{" "}
              <a href="https://github.com/git/git-scm.com/issues">
                issue tracker
              </a>
              .
            </p>
            <p>
              If you are new to submitting bugs, you might find{" "}
              <a href="http://www.chiark.greenend.org.uk/~sgtatham/bugs.html">
                this guide
              </a>{" "}
              helpful for producing useful bug reports.
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2>Contributing to Git</h2>
          <div className={style.grid}>
            <p>
              The{" "}
              <a href="https://github.com/git/git/tree/master/Documentation">
                Documentation directory
              </a>{" "}
              in the Git source code has several files of interest to developers
              who are looking to help contribute. After reading the{" "}
              <a href="https://github.com/git/git/blob/master/Documentation/CodingGuidelines">
                coding guidelines
              </a>
              , you can learn{" "}
              <a href="https://git-scm.com/docs/SubmittingPatches">
                how to submit patches
              </a>
              . If you are just starting out, you can read the{" "}
              <a href="https://git-scm.com/docs/MyFirstContribution">
                My First Contribution tutorial
              </a>
              . For those looking to get more deeply involved, there is a{" "}
              <a href="https://github.com/git/git/blob/master/Documentation/howto/maintain-git.txt">
                howto for Git maintainers
              </a>
              .
            </p>
            <p>
              The <a href="https://git.github.io/">Git Developer Pages</a> have
              a{" "}
              <a href="https://git.github.io/Hacking-Git/">Hacking Git page</a>{" "}
              which lists useful development resources. They also have{" "}
              <a href="https://git.github.io/General-Application-Information/">
                information
              </a>{" "}
              for people applying to work on Git as part of programs like
              <a href="https://www.outreachy.org/">Outreachy</a> or the{" "}
              <a href="https://summerofcode.withgoogle.com/">
                Google Summer of Code
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
