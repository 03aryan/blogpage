// import React from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const SliderComponent = () => {
//   const handleNext = () => {
//     const items = document.querySelectorAll('.item');
//     document.querySelector('.slide').appendChild(items[0]);
//   };

//   const handlePrev = () => {
//     const items = document.querySelectorAll('.item');
//     document.querySelector('.slide').prepend(items[items.length - 1]);
//   };

//   return (
//     <div className="bg-gray-900 flex items-center justify-center min-h-screen">
//       <div className="container w-full md:w-[90%] lg:w-[70%] h-[500px] bg-white shadow-lg relative overflow-hidden rounded-lg">
//         <div className="slide flex transition-transform duration-500">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`item w-full md:w-[40%] h-[500px] bg-cover bg-center rounded-lg relative transition-all duration-500 ${
//                 index === 0 ? 'order-first' : ''
//               }`}
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div
//                 className={`${
//                   index === 0 ? 'block' : 'hidden md:block'
//                 } content absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white p-6`}
//               >
//                 <h2 className="text-2xl md:text-3xl font-bold">{slide.name}</h2>
//                 <p className="mt-2 mb-4 text-lg">{slide.description}</p>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
//                   See More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="button absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
//           <button
//             className="prev bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition"
//             onClick={handlePrev}
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             className="next bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition"
//             onClick={handleNext}
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const slides = [
//   {
//     name: 'Well organised classrooms',
//     description: 'Healthy and well structured classrooms for great learning!',
//     image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
//   },
//   {
//     name: 'Explore Hub',
//     description: 'For enhancement in learning of students!',
//     image: 'https://cdn.prod.website-files.com/5f46c318c843828732a6f8e2/66b1e2154c2a0754f94223fe_6502da7f7db6895ad68bb12d_Tools-for-Effective-Teaching.webp',
//   },
//   {
//     name: 'Research Labs',
//     description: 'Provides a Research platform!',
//     image: 'https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F98f59339-df9a-4c9e-80b7-13cd475006b3.png&w=3840&q=75',
//   },
//   {
//     name: 'Library',
//     description: 'Peaceful and Quiet place for learning!',
//     image: 'https://img.freepik.com/free-photo/modern-classroom-with-computer-equipment-learning-generated-by-ai_188544-29279.jpg?semt=ais_hybrid',
//   },
//   {
//     name: 'Dedicated Staff',
//     description: 'A cooperative and helpful staff for a great learning experience!',
//     image: 'https://csl.imgix.net/Teacher-with-Students-stock-image.jpg?auto=compress&fm=pjpg',
//   },
//   {
//     name: 'Fun Sessions',
//     description: 'When life gets rough and problematic, it’s best to shake it!',
//     image: 'https://junipereducation.org/hs-fs/hubfs/Homepage/Homepage-Classroom-Solutions.png?width=663&height=445&name=Homepage-Classroom-Solutions.png',
//   },
// ];

// export default SliderComponent;

import React from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SliderComponent = () => {
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
