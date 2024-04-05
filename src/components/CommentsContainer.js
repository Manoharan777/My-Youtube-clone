import React from "react";

const commentsData = [
  {
    name: "John",
    text: "This video looks nice and informative, keep doing like this. ",
    replies: [],
  },
  {
    name: "John",
    text: "lorem ipsum dolar saga ",
    replies: [
      {
        name: "John",
        text: "lorem ipsum dolar saga ",
        replies: [
          {
            name: "John",
            text: "lorem ipsum dolar saga ",
            replies: [
              {
                name: "John",
                text: "lorem ipsum dolar saga ",
                replies: [],
              },
              {
                name: "John",
                text: "lorem ipsum dolar saga ",
                replies: [],
              },
              {
                name: "John",
                text: "lorem ipsum dolar saga ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "John",
        text: "lorem ipsum dolar saga ",
        replies: [],
      },
    ],
  },
  {
    name: "John",
    text: "lorem ipsum dolar saga ",
    replies: [
      {
        name: "John",
        text: "lorem ipsum dolar saga ",
        replies: [],
      },
    ],
  },
  {
    name: "John",
    text: "lorem ipsum dolar saga ",
    replies: [],
  },
];

const Comment = ({data}) => {

    const {name,text} = data;
    return (
      <div className="flex items-center shadow-sm bg-gray-100 rounded my-2 p-2">
        <img
        src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg"
        alt="user"
        className="w-10 rounded-full mr-2"
      />  
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
}

//nested comments
const CommentList = ({comments}) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
}

const CommentsContainer = () => {
  return (
    <div className="p-5 my-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
