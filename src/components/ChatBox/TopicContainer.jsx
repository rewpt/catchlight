import Topic from "./Topic";

function TopicContainer(props) {
  const { topicSelected } = props;

  return (
    <div className="grid grid-cols-3 w-full">
      <Topic topicSelected={topicSelected}> Gone with the Wind </Topic>
      <Topic> Ferris Bueler's day off </Topic>
      <Topic> The Big Lebowski </Topic>
      <Topic> Happy Gilmore </Topic>
      <Topic> Labrynth </Topic>
      <Topic> Fantasia </Topic>
    </div>
  );
}

export default TopicContainer;
