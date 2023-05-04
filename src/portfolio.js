/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Saurabh",
  logo_name: "Saurabh()",
  nickname: "Saurabh",
  full_name: "Saurabh Singh",
  subTitle:
    "Full Stack Developer. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/13FbRijq_RBB1Oc65y35p9fmNdRxTa2ru/view",
  mail: "mailto:saurabhrauthan4@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/awesmatic",
  linkedin: "https://www.linkedin.com/in/saurabh-singh-600414155/",
  gmail: "saurabhrauthan4@gmail.com",

};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },






        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Graphic Era Hill University",
      subtitle: "Master of Computer Applications",
      logo_path: "gehu.png",
      alt_name: "DAL",
      duration: "2019 - 2021",
      website_link: "https://www.gehu.ac.in//",
    },
    {
      title: "Graphic Era Hill University",
      subtitle: "Bachelor of Computer Applications",
      logo_path: "gehu.png",
      alt_name: "SETI",
      duration: "2016 - 2019",
      website_link: "https://www.gehu.ac.in//",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Cybersecurity",
      subtitle: "2020",
      logo_path: "cisco.png",
      certificate_link: "https://drive.google.com/drive/folders/1d7WKyYNr9sgpRqB113nbsN90Q9iwany8",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "2020",
      logo_path: "cisco.png",
      certificate_link: "https://drive.google.com/drive/folders/1d7WKyYNr9sgpRqB113nbsN90Q9iwany8",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed one internships and current working as a full stack developer. I've mostly done projects on my own and I am actively looking for job. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Buyproperly",
          company_url: "https://quicko.com/",
          logo_path: "buyproperly.png",
          duration: "August 2022 - April 2021",
          location: "Work From Home",
          description:
            "BuyProperly is an AI driven online exchange for fractional alternate asset investments such as Real Estate.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "React Developer",
          company: "Rampwin Technology",
          company_url: "https://sugarlabs.org/",
          logo_path: "rampwin.png",
          duration: "May 2022 - July 2022",
          location: "Jaipur",
          description:
            "As a React developer, I developed and maintained user-friendly web applications using React JS, HTML, CSS, JavaScript, and Redux. I worked closely with designers and developers to create responsive web designs that improved the user experience. I also implemented and managed the state of the application using Redux, and created reusable components to improve the application's maintainability and scalability",
        },

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      name: "",
      url: "",
      description:
        "",
      languages: [
        {
          name: "",
          iconifyClass: "",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
