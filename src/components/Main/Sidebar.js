import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <aside>
        <h1 className="fs-4">Personal Training for $30</h1>
        <p>
          If you need career guide, personal interview tips, mock interview,
          Life Coaching, or anything else, you can book me for 30 min. Just pay
          $30 via paypal to Codinism (my company) and then book a time slot You
          can Book me
        </p>
        <div className="videos-section">
          <h2>Recent Videos</h2>
          <ul className="video-links">
            <li>
              <a href="/#">15+ tricks for dev tool</a>
            </li>
            <li>
              <a href="/#">Understanding this</a>
            </li>
            <li>
              <a href="/#">be expert in JS Array</a>
            </li>
            <li>
              <a href="/#">How Browsers works in 4 min</a>
            </li>
          </ul>
          <button className="btn btn-outline-secondary mb-2">
            More on Youtube
          </button>
        </div>

        <div className="recent-talks">
          <h2>Recent Talks</h2>
          <ul className="recent-talks-links">
            <li>
              <a href="/#">Functional Programming: What, Why and How</a>
            </li>
            <li>
              <a href="/#">JavaScript Code Quality</a>
            </li>
            <li>
              <a href="/#">Angular JS for Absolute Beginners</a>
            </li>
            <li>
              <a href="/#">Getting started with React JS</a>
            </li>
            <li>
              <a href="/#">High Perf JS</a>
            </li>
            <li>
              <a href="/#">Are you sure, you know JavaScripts</a>
            </li>
            <li>
              <a href="/#">High Performance JS and CSS</a>
            </li>
            <li>
              <a href="/#">What's New in ES6</a>
            </li>
            <li>
              <a href="/#">Make Web Faster</a>
            </li>
          </ul>
          <button className="btn btn-outline-secondary mb-2">
            Speaker profile
          </button>
        </div>

        <div className="invite-talk">
          <h2>Invite to a talk</h2>
          <p>
            if you want to invite that js dude in any of your meetup, conference
            or hangout, send email to
          </p>
          <a href="/#">khan4019@gmail.com</a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
