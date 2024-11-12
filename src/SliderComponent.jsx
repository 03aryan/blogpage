import React from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

const SliderComponent = () => {
  const [slid, setSlide] = useState(null);
  const handleNext = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };

  return (
    <div className="container">
      <div className="slide">
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509062522246-3755977927d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D)"
          }}
        >
          <div className="content">
            <div className="name">Well organised classrooms</div>
            <div className="des">
              Healthy and well-structured classrooms for great learning!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://cdn.prod.website-files.com/5f46c318c843828732a6f8e2/66b1e2154c2a0754f94223fe_6502da7f7db6895ad68bb12d_Tools-for-Effective-Teaching.webp)"
          }}
        >
          <div className="content">
            <div className="name">Explore Hub</div>
            <div className="des">For enhancement in learning of students!</div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F98f59339-df9a-4c9e-80b7-13cd475006b3.png&w=3840&q=75)"
          }}
        >
          <div className="content">
            <div className="name">Research Labs</div>
            <div className="des">Provides a Research platform!</div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/modern-classroom-with-computer-equipment-learning-generated-by-ai_188544-29279.jpg?semt=ais_hybrid)"
          }}
        >
          <div className="content">
            <div className="name">Library</div>
            <div className="des">Peaceful and Quiet place for learning!</div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://csl.imgix.net/Teacher-with-Students-stock-image.jpg?auto=compress&fm=pjpg)"
          }}
        >
          <div className="content">
            <div className="name">Dedicated Staff</div>
            <div className="des">
              A cooperative and helpful staff for a great learning experience!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://junipereducation.org/hs-fs/hubfs/Homepage/Homepage-Classroom-Solutions.png?width=663&height=445&name=Homepage-Classroom-Solutions.png)"
          }}
        >
          <div className="content">
            <div className="name">Fun Sessions</div>
            <div className="des">
              When life gets rough and problematic, it’s best to shake it!
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
