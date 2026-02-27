import './Nav.css';

const Nav = () => {
  return (
    <header className="nav-header">
      <div className="nav-inner container">
        <div className="nav-brand">YNY</div>
        <nav className="nav-items" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};
export default Nav