import React from 'react';
import ImageCoding from "../images/coding-languages.jpg"
import ImageProfile from "../images/profile-picture.jpeg"
import Icons from './Icons';

export default function About() {
  return (
    <div>
      <figure>
        <img className="top-picture" src={ImageCoding} alt="Coding Languages" />
          <figcaption>Learning to Learn is Key!</figcaption>
      </figure>
      <h3 className="text-center text-color">About Me</h3>
      <div className="container">
        <img className="profile-picture" src={ImageProfile} alt="Profile" />
        <p>Full Stack Web Developer with a background of old-school software developer and life-long dedication to
          learning. Effective at combining creativity and analytical problem solving to develop user-friendly
          applications.</p>
        <p>Being known among financial sectors for data analysis interest and attention to detail no matter the
          complexity. Recently earned a certificate in Full Stack Web Development from a Coding Bootcamp of the
          University of Denver. Strengths in teamwork, problem-solving, analytical thinking, and building projects to
          satisfy user expectations.</p>
      </div>
      <Icons />
    </div>
  );
}
