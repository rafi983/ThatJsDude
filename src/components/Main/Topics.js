import React from "react";
import "./Topics.css";

const Topics = () => {
  const topics = [
    {
      title: "Angular2 Tutorial",
      desc: "If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you",
    },
    {
      title: "50 Dev tool Tips",
      desc: "If you have some idea about dev tool and want to become a master..this is the right video for your",
    },
    {
      title: "scope & closure",
      desc: "Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand.",
    },

    {
      title: "Interview Questions",
      desc: "If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing.",
    },

    {
      title: "Angular Interview Question",
      desc: "A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular.",
    },

    {
      title: "this",
      desc: "Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video...",
    },

    {
      title: "array",
      desc: "Array is the mostly used Data stucture. And in Javascript it is at least 3 one of the key data structure that you have to use to master. This video will tell you 15 hidden features that witll make u expert in JavaScript array.",
    },

    {
      title: "React Workshop for beginners",
      desc: "This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help.",
    },

    {
      title: "console",
      desc: "To be a decent web developer you have to know developer tool. If you want to be a better JavaScript developer, you have to master in the console tab of dev tool. there is no exception. no hanky panky...",
    },
  ];

  return (
    <div>
      <div className="ms-5 mt-5">
        <h1>JS Confusing Parts</h1>
        <p>
          Understand <span className="concept">this,</span>{" "}
          <span className="concept">scope,</span>{" "}
          <span className="concept">hoisting,</span>{" "}
          <span className="concept">closure,</span>{" "}
          <span className="concept">inheritance,</span>{" "}
          <span className="concept">bind,</span>{" "}
          <span className="concept">call,</span>
          <span className="concept">apply,</span>{" "}
          <span className="concept">prototype,</span>{" "}
          <span className="concept">event delegation,</span>{" "}
          <span className="concept">dom,</span>{" "}
          <span className="concept">timers</span> and many more caveats.
        </p>
      </div>
      <div className="all-topics">
        {topics.map((topic) => (
          <Topic title={topic.title} desc={topic.desc}></Topic>
        ))}
      </div>
    </div>
  );
};

const Topic = (props) => {
  const { title, desc } = props;
  return (
    <div className="single-topic  m-4">
      <div>
        <h1 className="topic-title">{title}</h1>
        <p className="topic-desc">{desc}</p>
        <button className="btn btn-outline-secondary">View details</button>
      </div>
    </div>
  );
};
export default Topics;
