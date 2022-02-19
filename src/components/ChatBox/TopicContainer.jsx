import Topic from "./Topic";

function TopicContainer(props) {
  const { topicSelected, topicOnClick } = props;
  const topicArr = [
    { mediaTitle: "The Matrix", mediaid: 1 },
    { mediaTitle: "Lost In Translation", mediaid: 3 },
    { mediaTitle: "Inception", mediaid: 2 },
    { mediaTitle: "Happy Gilmore", mediaid: 5 },
    { mediaTitle: "Resevoir Dogs ", mediaid: 4 },
    { mediaTitle: "When Harry Met Sally...", mediaid: 6 },
  ];

  return (
    <div className="grid grid-cols-3 mx-2">
      {topicArr.map((topic, index) => {
        return (
          <Topic
            key={index}
            topicSelected={topicSelected}
            topicOnClick={topicOnClick}
          >
            {topic.mediaTitle}
          </Topic>
        );
      })}
      {/* <Topic topicSelected={topicSelected} topicOnClick={topicOnClick}>
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
      </Topic> */}
    </div>
  );
}

export default TopicContainer;
