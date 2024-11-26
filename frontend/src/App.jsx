import { useState } from "react";

import "./App.css";
import AuthPage from "./Authpage";
import Chatspage from "./Chatpage";
function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <Chatspage user={user} />;
  }
}

export default App;