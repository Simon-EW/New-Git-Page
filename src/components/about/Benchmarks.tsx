import Image from "next/image";

export default function Benchmarks() {
  return (
    <>
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.649,2.6&chds=0,2.6&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Commit A"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:1.53,24.7&chds=0,24.7&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Commit B"
        alt="Git vs SVN"
        width={100}
        height={125}
      />{" "}
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.257,1.09&chds=0,1.09&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Diff Curr"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.248,3.99&chds=0,3.99&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Diff Rec"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:1.17,83.57&chds=0,83.57&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Diff Tags"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git*|git|svn&chd=t:21.0,107.5,14.0&chds=0,107.5&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Clone"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.012,0.381&chds=0,0.381&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Log (50)"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.519,169.197&chds=0,169.197&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Log (All)"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.601,82.843&chds=0,82.843&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Log (File)"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:0.896,2.816&chds=0,2.816&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Update"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:1.91,3.04&chds=0,3.04&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Blame"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
      <Image
        src="https://chart.googleapis.com/chart?chxt=x&cht=bvs&chl=git|svn&chd=t:181,132&chds=0,181&chs=100x125&chco=0fadcc&chf=bg,s,f0f0f0&chtt=Size"
        alt="Git vs SVN"
        width={100}
        height={125}
      />
    </>
  );
}
