function Projects() {
  const projects = [
    {
      number: "01",
      title: "3 DOF robotic arm",
      description:
        "A 3 DOF robotic arm for pick and place purpose for small interprises which is cost effective and reliable.",
      technologies: "MathLab",
    },
    {
      number: "02",
      title: "Personal Finance Tracker",
      description:
        "A Python application designed to help users manage income, expenses and personal finances.",
      technologies: "Python • Logic • Data",
    },
    {
      number: "03",
      title: "Web Development Project",
      description:
        "A responsive web project focused on creating a clean and engaging user experience.",
      technologies: "HTML • CSS • JavaScript",
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
                
              </span>

            </div>

            <div className="project-info">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="technologies">
                {project.technologies}
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;