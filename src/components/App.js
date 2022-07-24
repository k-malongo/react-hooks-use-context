import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { UserProvider } from "../context/user";
import Header from "./Header";
import Profile from "./Profile";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}
