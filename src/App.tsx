import { useAuth } from "./contexts/useAuth";
import { SignUp } from "./pages/SignUp";
import { Feed } from "./pages/Feed";

function App() {
  const { username } = useAuth();

  if (!username) {
    return <SignUp />;
  }

  return <Feed />;
}

export default App;
