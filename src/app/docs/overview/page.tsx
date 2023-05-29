import style from "./page.module.css";

const Command = ({
  command,
  prepend = true,
}: {
  command: string;
  prepend?: boolean;
}) => (
  <li>
    <a href={`https://git-scm.com/docs/${prepend ? "git-" : ""}${command}`}>
      {command}
    </a>
  </li>
);

export default function Page() {
  return (
    <>
      <h1 className={style.title}>Documentation overview</h1>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#setup">Setup and Config</a>
          </li>
          <li>
            <a href="#snapshotting">Basic Snapshotting</a>
          </li>
          <li>
            <a href="#branching">Branching and Merging</a>
          </li>
          <li>
            <a href="#sharing">Sharing and Updating Projects</a>
          </li>
          <li>
            <a href="#inspect">Inspection and Comparison</a>
          </li>
          <li>
            <a href="#patching">Patching</a>
          </li>
          <li>
            <a href="#debugging">Debugging</a>
          </li>
        </ul>
      </nav>
      <section className={style.section}>
        <ul>
          <li>
            <section id="setup">
              <h2>Setup and Config</h2>
              <ul>
                <Command command="git" prepend={false} />
                <Command command="config" />
                <Command command="help" />
                <Command command="bugreport" />
              </ul>
            </section>
          </li>
          <li>
            <section id="snapshotting">
              <h2>Basic Snapshotting</h2>
              <ul>
                <Command command="add" />
                <Command command="status" />
                <Command command="diff" />
                <Command command="commit" />
                <Command command="notes" />
                <Command command="restore" />
                <Command command="reset" />
                <Command command="rm" />
                <Command command="mv" />
              </ul>
            </section>
          </li>
          <li>
            <section id="branching">
              <h2>Branching and Merging</h2>
              <ul>
                <Command command="branch" />
                <Command command="checkout" />
                <Command command="switch" />
                <Command command="merge" />
                <Command command="mergetool" />
                <Command command="log" />
                <Command command="stash" />
                <Command command="tag" />
                <Command command="worktree" />
              </ul>
            </section>
          </li>
          <li>
            <section id="sharing">
              <h2>Sharing and Updating Projects</h2>
              <ul>
                <Command command="fetch" />
                <Command command="pull" />
                <Command command="push" />
                <Command command="remote" />
                <Command command="submodule" />
              </ul>
            </section>
          </li>
          <li>
            <section id="inspect">
              <h2>Inspection and Comparison</h2>
              <ul>
                <Command command="show" />
                <Command command="log" />
                <Command command="diff" />
                <Command command="difftool" />
                <Command command="range-diff" />
                <Command command="shortlog" />
                <Command command="describe" />
              </ul>
            </section>
          </li>
          <li>
            <section id="patching">
              <h2>Patching</h2>
              <ul>
                <Command command="apply" />
                <Command command="cherry-pick" />
                <Command command="diff" />
                <Command command="rebase" />
                <Command command="revert" />
              </ul>
            </section>
          </li>
          <li>
            <section id="debugging">
              <h2>Debugging</h2>
              <ul>
                <Command command="bisect" />
                <Command command="blame" />
                <Command command="grep" />
              </ul>
            </section>
          </li>
        </ul>
      </section>
    </>
  );
}
