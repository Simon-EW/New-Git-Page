import style from "./benchmarkResults.module.css";

export interface BenchmarkResult {
  name: string;
  git: number;
  svn: number;
  diff: number;
}

export default function BenchmarkResults({
  results,
}: {
  results: BenchmarkResult[];
}) {
  return (
    <table className={style.benchmark_results}>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Git</th>
          <th>SVN</th>
          <th>Diff</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.name}>
            <td>{result.name}</td>
            <td>{result.git}</td>
            <td>{result.svn}</td>
            <td>{result.diff}x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
