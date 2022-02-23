import Topic from "./Topic";
import axios from "axios";
import { useEffect, useState } from "react";

function TopicContainer(props) {
  const { topicSelected, topicOnClick, activeFriend } = props;
  const [topics, setTopics] = useState({});
  const jwt = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
  useEffect(() => {
    const getFriendTopics = async () => {
      try {
        const response = await axios.post(
          `/api/conversations/topics`,
          { activeFriend: activeFriend },
          jwt
        );
        console.log("RESPONSE DATA", response.data);
        setTopics(response.data);
        console.log("TOPICS WITH FRIEND", topics);
      } catch (err) {
        console.log(err);
      }
    };
    getFriendTopics();
  }, [activeFriend]);
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
      {topics.length > 0 &&
        topics.map((topic, index) => {
          return (
            <Topic
              key={topic.id}
              topicid={topic.id}
              topicSelected={topicSelected}
              topicOnClick={topicOnClick}
            >
              {topic.title}
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
