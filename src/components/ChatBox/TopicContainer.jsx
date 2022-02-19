import Topic from "./Topic";

function TopicContainer(props) {
  const { topicSelected, topicOnClick } = props;

  return (
    <div className="grid grid-cols-3 mx-2">
      <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
        Gone with the Wind
      </Topic>
      <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
        Ferris Bueler's day off
      </Topic>
      <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
        The Big Lebowski
      </Topic>
      <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
        Happy Gilmore
      </Topic>
      <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
        Labrynth
      </Topic>
      <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
        Fantasia
      </Topic>
    </div>
  );
}

export default TopicContainer;
