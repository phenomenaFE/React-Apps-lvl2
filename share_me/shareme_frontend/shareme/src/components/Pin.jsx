import React from "react";
import { urlFor } from "../client";

export const Pin = ({ pin }) => {
  const { postedBy, image, _id, destination } = pin;
  return (
    <div>
      <img
        src={urlFor(image).width(250).url()}
        className="rounded-lg w-full "
        alt="user-post"
      />
    </div>
  );
};
