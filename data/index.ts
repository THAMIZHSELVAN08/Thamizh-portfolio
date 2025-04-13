export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Quick to adapt, strong in fundamentals, and effective in team communication.",
    description: "Always eager to learn and integrate the latest technologies into real-world projects.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comfortable with async workflows",
    description: "Collaborating remotely and managing time effectively",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "With constant improvements.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech-savvy student with a builder’s mindset.",
    description: "Obsessed with crafting intuitive UIs and scalable backend systems",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Attendance Management System",
    description: "Complete full-stack project with role-based access, JWT auth, and dynamic reports.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Collaborate on Projects?",
    description: "Let’s connect and bring ideas to life through code.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    des: "A modern, fully animated portfolio built with Framer Motion and GSAP. Includes resume download and responsive UI.",
    img: "/portfolio.1.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/framer.svg", "/gsap.svg", "/js.png"],
    link: "",
  },
  {
    id: 2,
    title: "Passive Solar Tracker (Differential Pressure)",
    des: "A fully passive solar tracking system using R134a refrigerant, designed without electrical components. Operates on fluid dynamics and differential pressure to optimize solar PV efficiency.",
    img: "/20373.1.jpg",
    iconLists: ["/fluid.svg", "/solar.svg", "/r134a.png", "/eng.svg", "/mech.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Gamified Learning & Study Scheduler",
    des: "An platform that transforms education through gamification and personalized study roadmaps. Built to boost student engagement, self-paced learning, and academic productivity using game theory and adaptive learning models.",
    img: "/game.1.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/js.png", "/game.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Attendance Management System - In progress",
    des: "A full-stack system with JWT auth, role-based dashboards, and real-time attendance tracking. Built with a production-grade mindset.",
    img: "/attendance.png",
    iconLists: ["/react.svg", "/node.svg", "/mongo.svg", "/express.png", "/tail.svg"],
    link: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Development Team Member – FOResE",
    desc: "Collaborated on backend development for internal tools including an HR database, online aptitude test platform, and report generation software using Node.js and MongoDB for FOResE.",
    className: "md:col-span-2",
    thumbnail: "/forese.png",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    desc: "Currently interning at VCodez, contributing to end-to-end development of full-stack applications using modern web technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/vcodez.png",
  },
  
  {
    id: 4,
    title: "Project Lead – GDSC DevCon 2024",
    desc: "Led a gamified learning platform project using Next.js and adaptive learning models. Won 2nd place at GDSC DevCon hosted by Google Developer Student Club, SVCE.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link : "https://github.com/THAMIZHSELVAN08",
  },
  
  {
    id: 3,
    img: "/link.svg",
    link : "https://www.linkedin.com/in/thamizhselvan18/ ",
  },
];
