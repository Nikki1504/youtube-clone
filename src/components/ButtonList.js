import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Sports",
    "Movies",
    "News",
    "Music",
    "Recipes",
    "Exercise",
    "Lifestyle",
    "Live",
    "Comedy",
    "Albums",
  ];
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
