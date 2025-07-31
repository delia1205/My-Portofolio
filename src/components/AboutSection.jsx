import { Code, Gamepad2, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web, Game and Frontend Developer
            </h3>
            <p className="text-muted-foreground">
              I'm a Frontend Developer with a background in Computer Science and
              a Master's degree in Software Engineering. I enjoy building clean,
              user-focused interfaces with modern tools like React, TypeScript,
              and Sass. Whether I'm contributing to agile team projects or
              crafting ideas into code on my own, I'm always looking to create
              intuitive, responsive, and accessible web experiences. My journey
              blends both technical skill and teaching experience, and I'm
              driven by curiosity, creativity, and a passion for making
              technology more human.
            </p>

            <p className="text-muted-foreground">
              I have experience working in a SCRUM environments with React and
              Typescript and developed skills with hooks, React Router, Redux,
              React Query and the React Developer Tools extension for debugging.
              I also have acquired previous knowledge through personal and
              academical projects and courses working with HTML, CSS, Sass,
              Javascript, Node.js, Express.js and more.
            </p>

            <p className="text-muted-foreground">
              Besides coding, I also enjoy teaching and sharing what I know.
              During my time as a substitute teacher, I had the chance to guide
              students through topics like HTML, C++, and computer basics — and
              I discovered how rewarding it is to make tech more accessible to
              others. Whether it's mentoring or collaborating with a team, I
              love helping others grow while continuing to learn myself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              <a
                href="/CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download my CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating dynamic and responsive web applications using
                    modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and user-friendly web applications using
                    React, TypeScript, JavaScript and modern CSS techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Game Development</h4>
                  <p className="text-muted-foreground">
                    Creating immersive gaming experiences using Unity and C#.
                    Experience with VR and AR development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
