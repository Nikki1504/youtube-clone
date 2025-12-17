import React from "react";
import Button from "./Button";

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
  "Adventure games",
  "Indie Music",
  "Formula 1",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
