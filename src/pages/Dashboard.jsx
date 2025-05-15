import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <div className="container mt-5"><h3>Unauthorized. Please login.</h3></div>;
  }

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.name}</h2>
      <p><strong>Role:</strong> {user.role}</p>
      <button className="btn btn-danger mt-3" onClick={logout}>Logout</button>
    </div>
  );
}
