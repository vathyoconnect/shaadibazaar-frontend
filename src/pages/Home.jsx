import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h1>Welcome to ShaadiBazaar 🎉</h1>
      <button className="btn btn-primary me-2 mt-3" onClick={() => navigate('/login')}>Login</button>
      <button className="btn btn-success mt-3" onClick={() => navigate('/register')}>Register</button>
    </div>
  );
}
