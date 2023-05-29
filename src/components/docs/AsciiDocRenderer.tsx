import style from "./component.module.css";
import asciidoctor from "asciidoctor";

export default function Renderer({ content }: { content: string }) {
  const Asciidoctor = asciidoctor();
  const html = Asciidoctor.convert(content, {
    attributes: { linkgit: "https://git-scm.com/docs/" },
  });

  return (
    <div className={style.container}>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
