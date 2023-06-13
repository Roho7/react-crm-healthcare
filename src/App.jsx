import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase.js";
import Login from "./pages/Login";
import Home from "./Home";

function App() {
  // const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  return <div>{auth.currentUser ? <Home /> : <Login />}</div>;
}

export default App;
