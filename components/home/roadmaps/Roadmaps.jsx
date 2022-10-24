import RoadmapBubble from "./RoadmapBubble";

const Roadmaps = () => {
  return (
    <div className="grid grid-flow-row">
      <div className="flex justify-center text-3xl mb-4">ROADMAPS</div>
      <div className="grid grid-cols-2">
        <RoadmapBubble
          title={"Blockchain"}
          description={"Aprende desarrollo Blockchain paso a paso!"}
        />
        <RoadmapBubble
          title={"Solidity"}
          description={"Aprende desarrollo Blockchain paso a paso!"}
        />
      </div>
    </div>
  );
};

export default Roadmaps;
