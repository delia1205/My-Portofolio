import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SimulEase: A VR Application for Reducing Social Anxiety",
    description:
      "SimulEase is a virtual reality application designed to help users manage and reduce social anxiety through immersive simulations and interactive scenarios. The app provides a safe space for users to practice social interactions, build confidence, and develop coping strategies in a controlled environment.",
    image: "/projects/project1.png",
    tags: ["Unity", "C#", "VR/AR Development", "Blender"],
    demoUrl: "https://youtu.be/qqRoeoP07iE",
    githubUrl: "https://github.com/delia1205/SimulEase-VR",
  },
  {
    id: 2,
    title: "PlantiPal: Plant Identification and Care Guide",
    description:
      "PlantiPal is a mobile application that helps users identify plants and provides care instructions based on the specific needs of each plant. Users can take pictures of plants, and the app will use machine learning to identify them and offer personalized care tips.",
    image: "/projects/project2.png",
    tags: ["iOS", "Swift", "Tensorflow", "UIKit", "Keras", "PlantNet", "VGG16"],
    demoUrl: "https://youtu.be/yXNyiDvLqMM",
    githubUrl: "https://github.com/delia1205/PlantiPal",
  },
  {
    id: 3,
    title: "Book-A-Session: A Booking System for React Mentoring Sessions",
    description:
      "Book-A-Session is a frontend application that allows users to book mentoring sessions with experienced React developers. The platform provides a user-friendly interface for scheduling, managing and registering for courses.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/delia1205/Book-A-Session",
  },
  {
    id: 4,
    title:
      "GAIT: A Web-Based Tool for Natural Language Interaction with GraphQL APIs",
    description:
      "GAIT is a web-based tool that enables users to interact with GraphQL APIs using natural language (text or voice) queries. The application leverages NLP techniques to parse user input and generate corresponding GraphQL queries, making API interactions more intuitive.",
    image: "/projects/project4.png",
    tags: ["React", "GraphQL", "Node.js", "Express", "Python", "NLP"],
    demoUrl: "https://youtu.be/oeIdOVDBm40",
    githubUrl: "https://github.com/delia1205/-WADe-Project",
  },
  {
    id: 5,
    title:
      "Movie Search: A Landing Page for an Application Which Allows Users to Search for Movies",
    description:
      "A landing page for a movie search application built with React. Users can search for movies and view details on movies such as ratings, reviews, and trailers. Data is fetched from a public movie API: OMDb API.",
    image: "/projects/project5.png",
    tags: ["React", "CSS", "OMDb API", "Context API"],
    githubUrl: "https://github.com/delia1205/Movie-Search",
  },
  {
    id: 6,
    title: "Delia's Blog - A MERN Full Stack Blog Web Application",
    description:
      "A full stack blog web application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can create, read, update, and delete blog posts. The application features user authentication and a responsive design.",
    image: "/projects/project6.png",
    tags: ["MERN", "MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/delia1205/My-Blog",
  },
  {
    id: 7,
    title: "McEscape: Horror Escape Room VR Game Located in McDonalds",
    description:
      "McEscape is a virtual reality horror escape room game set in a McDonald's restaurant. Players must solve puzzles and find clues to escape while avoiding the terrifying creature that is Ronald McDonald.",
    image: "/projects/project7.png",
    tags: [
      "Unity",
      "C#",
      "VR/AR Development",
      "Game Design",
      "Blender",
      "Animation",
    ],
    demoUrl: "https://youtu.be/yRzJ_yxjE4U",
    githubUrl: "https://github.com/delia1205/McEscape-Proiect_IMR",
  },
  {
    id: 8,
    title: "CoSe: The Most Recent Crisis Situations Around the World",
    description:
      "CoSe is a multiple page web application that provides real-time information and alerts about crisis situations globally. Users can access detailed reports, safety tips, and resources to stay informed and safe during emergencies.",
    image: "/projects/project8.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "APIs", "Maps"],
    demoUrl: "https://youtu.be/wZJyG6rixVY",
  },
  {
    id: 9,
    title: "A New Fascinating Project Coming Soon...",
    description:
      "Stay tuned for my next exciting project! I am currently working on something special that will be revealed soon. Keep an eye on my portfolio for updates!",
    image: "/projects/project9.png",
    tags: ["Coming Soon"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Here are some of my most recent projects. Each project showcases my
          skills in frontend and fullstack, web and game development, utilizing
          technologies like React, Unity, and more. Click on the project titles
          to view demos or source code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/delia1205"
          >
            Check Out My Entire GitHub Page <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
