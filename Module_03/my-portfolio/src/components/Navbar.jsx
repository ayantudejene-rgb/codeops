function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AYANTU D<span>.</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;