function Projects() {
  const projects = [
    {
      number: "01",
      title: "Addis-Eats",
      description:
        "An interactive Ethiopian food delivery app built with React — menu, cart, checkout and delivery form, all driven by state.",
      technologies: "Node.js • React • API • Zustand",
      liveLink: "https://addis-eats-ashen.vercel.app",
      githubLink: "https://github.com/ayantudejene-rgb/codeops/tree/main/Module_03/addis-eats",
    },
    {
      number: "02",
      title: "MedFinder Ethiopia",
      description:
        "A React application that helps users discover health centers and useful healthcare information.",
      technologies: "React • API • JavaScript • CSS",
      liveLink: "https://codeops-react-data-driven-app.vercel.app",
      githubLink: "https://github.com/ayantudejene-rgb/codeops/tree/main/Module_03/healthguide-ethiopia",
    },
    {
      number: "03",
      title: "Personal Finance Tracker",
      description:
        "A Python application designed to help users manage income, expenses and personal finances.",
      technologies: "Python • Logic • Data",
    },
    {
      number: "01",
      title: "3 DOF robotic arm",
      description:
        "A 3 DOF robotic arm for pick and place purpose for small interprises which is cost effective and reliable.",
      technologies: "MathLab",
    },
  ];

  return (
    <section className="projects section" id="projects">

      <div className="section-heading">

        <p>03 — SELECTED WORK</p>

        <h2>
          Things I've
          <br />
          <span>built.</span>
        </h2>

      </div>

      <div className="projects-list">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </div>

            <div className="project-info">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="technologies">
                {project.technologies}
              </span>
              <div className="project-links">

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;