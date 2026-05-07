import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Home Page</h1>

      <Link to="/" className="btn btn-primary m-2">
        Register
      </Link>

      <Link to="/login" className="btn btn-success m-2">
        Login
      </Link>
    </div>
  );
}

export default Home;