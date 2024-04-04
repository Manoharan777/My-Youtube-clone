import React from "react";

const commentsData = [
  {
    name: "Mano",
    text: "This video looks nice and informative, keep doing like this. ",
    replies: [],
  },
  {
    name: "Mano",
    text: "lorem ipsum dolar saga ",
    replies: [
      {
        name: "Mano",
        text: "lorem ipsum dolar saga ",
        replies: [
          {
            name: "Mano",
            text: "lorem ipsum dolar saga ",
            replies: [
              {
                name: "Mano",
                text: "lorem ipsum dolar saga ",
                replies: [],
              },
              {
                name: "Mano",
                text: "lorem ipsum dolar saga ",
                replies: [],
              },
              {
                name: "Mano",
                text: "lorem ipsum dolar saga ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Mano",
        text: "lorem ipsum dolar saga ",
        replies: [],
      },
    ],
  },
  {
    name: "Mano",
    text: "lorem ipsum dolar saga ",
    replies: [
      {
        name: "Mano",
        text: "lorem ipsum dolar saga ",
        replies: [],
      },
    ],
  },
  {
    name: "Mano",
    text: "lorem ipsum dolar saga ",
    replies: [],
  },
];

const Comment = ({data}) => {

    const {name,text,replies} = data;
    return (
      <div className="flex shadow-sm bg-gray-100 rounded my-2 p-2">
        <img className="w-16 h-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
          alt="user"
        />
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
}


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
    <div className="p-5 m-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
