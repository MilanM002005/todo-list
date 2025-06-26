import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Todo List </h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};
export default Navbar;
