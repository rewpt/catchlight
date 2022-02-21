import React from "react";

export default function MediaDescription(props) {
  const { description } = props;

  return (
    <React.Fragment>
      <p className="font-semibold text-lg text-inputtext mt-3">{description}</p>
    </React.Fragment>
  );
}
