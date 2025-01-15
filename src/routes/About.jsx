import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="my-6 text-3xl">
        About Us - <span className="font-bold">NewsBlog</span>{" "}
      </h1>
      <p className="text-xl">
        Welcome to NewsBlog, your go-to platform for insightful content and the
        latest updates in the world of technology and beyond. Our blog is
        designed to cater to tech enthusiasts, professionals, and curious minds
        alike, offering a variety of categories to explore:
      </p>
      <ul
        className="flex flex-col gap-3 text-xl"
        style={{ listStyleType: "disc", paddingLeft: "20px" }}
      >
        <li>
          <span className="font-bold">General: </span>
          Stay informed with a mix of trending topics, industry news, and
          thought-provoking stories from around the globe.
        </li>
        <li>
          <span className="font-bold">Web Design: </span>
          Dive into the art of creating user-friendly, visually appealing, and
          responsive designs that captivate and inspire.
        </li>
        <li>
          <span className="font-bold">Development: </span>
          Development: Discover the latest in software development, coding
          practices, frameworks, and tools that shape the digital landscape.
        </li>
        <li>
          <span className="font-bold">Databases: </span>
          Learn about database technologies, management strategies, and
          innovations powering today’s data-driven world.
        </li>
        <li>
          <span className="font-bold">Search Engines: </span>
          Uncover tips, techniques, and advancements in search engine
          technologies, optimization, and algorithms.
        </li>
        <li>
          <span className="font-bold">Marketing: </span>
          Explore the dynamic world of digital marketing, strategies, and
          insights to grow your online presence.
        </li>
      </ul>
      <p className="text-xl mb-8">
        Join us as we bring knowledge to your fingertips and fuel your passion
        for learning. NewsBlog – Inform, Inspire, Innovate.
      </p>
    </div>
  );
};

export default About;
