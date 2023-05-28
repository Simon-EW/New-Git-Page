import style from "./graph.module.css";
import Bar from "./Bar";

export default function Graph() {
  return (
    <div className={style.graph}>
      <Bar value={100} label="Git" />
      <Bar value={23} label="Subversion" />
      <Bar value={36} label="Perforce" />
      <Bar value={57} label="Mercurial" />
      <Bar value={40} label="Bazaar" />
    </div>
  );
}
