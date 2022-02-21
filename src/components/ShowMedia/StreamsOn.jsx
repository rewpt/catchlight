import React from "react";

export default function StreamsOn(props) {
  const { streamingServices } = props;

  return (
    <div className="flex-col font-semibold sm:justify-center md:justify-start text-navbar">
      <h3>Streaming on:</h3>
      <div className="flex font-semibold text-xl text-inputtext mt-2">
        {streamingServices.map((service) => {
          return <p className="mr-2">{`${service.title}`}</p>;
        })}
      </div>
    </div>
  );
}
