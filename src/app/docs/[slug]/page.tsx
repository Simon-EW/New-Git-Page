import style from "./page.module.css";
import AsciiDocRenderer from "@/components/docs/AsciiDocRenderer";

export const metadata = {
  title: "Docs",
  description: "Git documentation",
};

export const generateStaticParams = async () => {
  return [
    { params: { title: "git-config" } },
    { params: { title: "videos" } },
    { params: { title: "external-links" } },
  ];
};

interface Tree {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

interface TreeData {
  sha: string;
  url: string;
  tree: Tree[];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const treeData: TreeData = await fetch(
    "https://api.github.com/repos/git/htmldocs/git/trees/gh-pages"
  ).then((res) => res.json());

  const file = treeData.tree.find(
    (file) => file.path.toLowerCase() === `${params.slug}.txt`.toLowerCase()
  );

  if (!file) {
    return (
      <>
        <h1>Page not found</h1>
        <p>
          <a href="/docs">Go back to the docs</a>
        </p>
      </>
    );
  }
  const dataFile = await fetch(file.url).then((res) => res.json());
  const encodedContent = dataFile.content;
  const decodedContent = atob(encodedContent);

  return (
    <>
      <h1> is not created yet</h1>
      <section>
        <AsciiDocRenderer content={decodedContent} />
        <ul>
          <li>
            <a href={file?.url || ""} className={style.link}>
              File
            </a>
          </li>
          {/* <li>
            <a href="/about/small-and-fast" className={style.link}>
              Small and Fast
            </a>
          </li> */}
        </ul>
      </section>
    </>
  );
}
