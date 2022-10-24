import Link from "next/link";
import { useRouter } from "next/router";

const RoadmapBubble = ({ title, description }) => {
  const router = useRouter();

  return (
    <Link href={`/roadmaps/${title}`}>
      <a className="py-2 px-4 my-4 mx-8 border-b-4 border-l-4 border-t border-r border-emerald-400 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-emerald-400/60">
        <div className="text-2xl">{title}</div>
        <div className="text-base">{description}</div>
      </a>
    </Link>
  );
};

export default RoadmapBubble;
