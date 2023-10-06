import { HiOutlineDesktopComputer } from "react-icons/hi";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
];

export const WhatDoIHelp = [
  "Krantijyoti Mahatma Phule Highschool was started in the year 1984. The primary medium of instruction is Marathi and the student teacher ratio is 15:1. The school takes pride of its excellent teaching methodology.",
  "Krantijyoti Mahatma Phule Highschool is located in Kolhapur, Kolhapur. There are 8 dedicated and professional faculty members who impart quality education to children in this State Board school.",
  "Students from 6 to 10 are taught in this school. The current student strength of the school is approximately 124. The library in this school has 850 books.",
  "The school has given exceptional results in the academic sphere and its students have excelled in extra co-curricular activities too." 
];

export const workExp = [
  {
    place: "Demo Name ",
    tenure: "Qualification",
    role: "Speciality",
    detail:
      "details here",
  },
  {
    place: "Demo Name ",
    tenure: "Qualification",
    role: "Speciality",
    detail:
      "details here ",
  },
  {
    place: "Demo Name ",
    tenure: "Qualification",
    role: "Speciality",
    detail:
      "details here ",
  },
  
];

export const comments = [
  {
    name: "Name",
    post: "Co-Founder",
    comment:
      "A good teacher isn’t someone who gives the answers out to their kids but is understanding of needs and challenges and gives tools to help other people succeed.",
    img: "./people2.png",
  },
  {
    name: "Name",
    post: "Founder",
    comment:
      "A good teacher isn’t someone who gives the answers out to their kids but is understanding of needs and challenges and gives tools to help other people succeed.",
    img: "./people1.png",
  },
  {
    name: "Name",
    post: "Principal name",
    comment:
      "A good teacher isn’t someone who gives the answers out to their kids but is understanding of needs and challenges and gives tools to help other people succeed.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
