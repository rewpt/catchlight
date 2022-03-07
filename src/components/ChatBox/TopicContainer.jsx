import Topic from "./Topic";
import axios from "axios";
import { useEffect, useState } from "react";

function TopicContainer(props) {
  const { topicSelected, topicOnClick, activeFriend, topicRefresh } = props;
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
        if (response.data[0]) {
          setTopics(response.data);
          topicOnClick(response.data[0].id);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFriendTopics();
  }, [activeFriend, topicRefresh]);

  return (
    <div className="flex justify-start my-2 text-xl">
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
    </div>
  );
}

export default TopicContainer;
