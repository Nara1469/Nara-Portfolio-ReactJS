import React from 'react';
import ImageProject1 from "../images/mapped-event-tracker.png"
import ImageProject2 from "../images/financial-statement-analysis.png"
import ImageTechBlog from "../images/tech-blog.png"
import ImageWeather from "../images/weather-dashboard.png"
import ImageKeys from "../images/photo-keys.jpeg"

export default function Project() {
  return (
    <div>
      <h3 class="text-center text-color">My Work</h3>
      <div class="container justify-start">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
              <a href="https://skerans.github.io/Mapped-event-tracker/"><img class="img-class" src={ImageProject1} alt="Mapped Event Tracker" /></a>
              <h4>Project: Mapped Event Tracker</h4>
              <a href="https://github.com/skerans/Mapped-event-tracker"><h5>Repo: Server-Side-APIs</h5></a>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm- row-cols-md-2 row-cols-lg-2">
          <div class="col">
            <div class="card">
              <a href="https://fsa-ratio.herokuapp.com/"><img class="img-class" src={ImageProject2} alt="Financial Ratio Analysis" /></a>
              <h4>Project: Financial Statement Ratio Analysis</h4>
              <a href="https://github.com/ebattani/Financial-Statement-Ratio-Analysis"><h5>Repo: Full Stack - MVC</h5></a>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <a href="https://the-tech-blog-mvc-structure.herokuapp.com/"><img class="img-class" src={ImageTechBlog} alt="Tech Blog" /></a>
              <h4>The Tech Blog</h4>
              <a href="https://github.com/Nara1469/mvc-tech-blog"><h5>Repo: Model-View-Controller Paradigm</h5></a>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <a href="https://nara1469.github.io/weather-app/"><img class="img-class" src={ImageWeather} alt="Weather Dashboard" /></a>
              <h4>Weather App</h4>
              <a href="https://github.com/Nara1469/weather-app"><h5>Repo: Server-Side-API</h5></a>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <a href="https://nara1469.github.io/MiniProject2/"><img class="img-class" src={ImageKeys} alt="CSS Code Snippets" /></a>
              <h4>CSS Snippets</h4>
              <a href="https://github.com/Nara1469/MiniProject2"><h5>Repo: HTML/CSS</h5></a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
