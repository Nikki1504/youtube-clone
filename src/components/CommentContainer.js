import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "@Nikita_Thakur",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [],
  },
  {
    name: "@PoojaPretty",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [
      {
        name: "@Kritika_Aggarwal",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [
          {
            name: "@codyn.8225",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [
              {
                name: "@Nikita_Thakur",
                text: "Lorem ipsum dolor sit amet consectetur.",
                replies: [
                  {
                    name: "@MegaRaikou",
                    text: "Lorem ipsum dolor sit amet consectetur.",
                    replies: [
                      {
                        name: "@outlaw58",
                        text: "Lorem ipsum dolor sit amet consectetur.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "@Anushkaaa2626",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [],
          },
          {
            name: "@harshada_pathak",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [],
          },
        ],
      },
      {
        name: "@timeryd3r",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [
          {
            name: "@Keep_smiling107",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [
              {
                name: "@juhis1620",
                text: "Lorem ipsum dolor sit amet consectetur.",
                replies: [],
              },
            ],
          },
          {
            name: "@justaakss",
            text: "Lorem ipsum dolor sit amet consectetur.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "@Itsvinitahere",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [
      {
        name: "@venomb1274",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [],
      },
    ],
  },
  {
    name: "@olivieghosh015",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [
      {
        name: "@ivenstorm",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [],
      },
    ],
  },
  {
    name: "@MasonTheMarvelous",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [],
  },
  {
    name: "@antoniz32",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [
      {
        name: "@priyanshu.3108",
        text: "Lorem ipsum dolor sit amet consectetur.",
        replies: [],
      },
    ],
  },
  {
    name: "@AustoLaVista",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [],
  },
  {
    name: "@Yitaika1",
    text: "Lorem ipsum dolor sit amet consectetur.",
    replies: [],
  },
];

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
