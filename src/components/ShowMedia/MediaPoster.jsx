import * as React from "react";

export default function MediaPoster(props) {
  const { image } = props;

  return (
    <React.Fragment>
      <div className="flex justify-center lg:justify-start w-full row-span-2">
        <div className="w-full border-black border-solid drop-shadow-md border-2 h-full bg-cover bg-center ">
          <img className="h-full w-full object-cover" alt={""} src={image} />
        </div>
      </div>
    </React.Fragment>
  );
}
