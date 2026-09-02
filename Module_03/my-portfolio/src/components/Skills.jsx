function Skills() {
  const skills = [
    {
      number: "01",
      name: "HTML",
      description: "Semantic & accessible structure",
    },
    {
      number: "02",
      name: "CSS",
      description: "Responsive & modern design",
    },
    {
      number: "03",
      name: "JavaScript",
      description: "Interactive web experiences",
    },
    {
      number: "04",
      name: "React",
      description: "Component-based interfaces",
    },
    {
      number: "05",
      name: "Python",
      description: "Programming & backend logic",
    },
    {
      number: "06",
      name: "Git",
      description: "Version control & collaboration",
    },
  ];

  return (
    <section className="skills section" id="skills">

      <div className="section-heading">
        <p>02 — MY SKILLS</p>

        <h2>
          Tools I use to
          <br />
          <span>build things.</span>
        </h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.number}>

            <span className="skill-number">
              {skill.number}
            </span>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

            <span className="skill-arrow">↗</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;