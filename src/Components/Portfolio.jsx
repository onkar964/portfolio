/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-commerce website",
    description:
      "•It is a MERN stack-based web app with products and payment gateway. It mimics the functionality of any ecommerce website and allows us to purchase products.",
    url: "https://github.com/onkar964/E-commere",
  },
  {
    title: "PGLife",
    description:
      "PG Life is a full-stack web application designed to help users find suitable PG hostels quickly and efficiently. Whether you're a student or a working professional, PG Life offers features to streamline your PG search process.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Portfolio",
    description:
      "Created from resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/onkar964/portfolio",
  },
  {
    title: "30 Days Of JavaScript",
    description: "JavaScript Tutorial",
    url: "https://github.com/onkar964/30-Days-Of-JavaScript",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
