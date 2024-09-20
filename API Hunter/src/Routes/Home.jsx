import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <Link to="/login">
        <h2 data-testid="login-link">Login Page</h2>
      </Link>
      <Link to="/dashboard">
        <h2 data-testid="home-link">Home</h2>
      </Link>
    </div>
  );
}
export default Home;
