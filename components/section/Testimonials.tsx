import React from "react";
import * as styles from "./../styles";

// const testimonials = [
//   {
//     id: 1,
//     text: "This product has completely transformed our workflow. It's intuitive, powerful, and has saved us countless hours.",
//     name: "Alex Johnson",
//     position: "CTO, TechCorp",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     text: "I can't imagine running our business without this tool. The customer support is top-notch, and the features are always improving.",
//     name: "Samantha Lee",
//     position: "CEO, InnovateNow",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     text: "As a small business owner, I appreciate how this solution scales with our needs. It's been a game-changer for our productivity.",
//     name: "Michael Chen",
//     position: "Founder, GrowFast",
//     image: "/placeholder.svg?height=100&width=100",
//   },
// ];

const Testimonials = () => {
  return (
    <div
      className={`${styles.ContainerPadding}  h-fit flex py-24 justify-start items-center flex-col gap-16`}
    >
      <div>
        <h2 className='text-4xl md:text-5xl text-center'>
          Apa kata customer
          <br />
          kami?
        </h2>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
