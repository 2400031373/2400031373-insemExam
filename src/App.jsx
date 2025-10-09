import React, { useState } from "react";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import LoginPage from "./components/Loginpage";
import ArticlesPage from "./components/ArticlesPage";
import ResourcesPage from "./components/ResourcesPage"; // new import

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      {currentPage === "home" && (
        <HomePage
          onLoginClick={() => setCurrentPage("login")}
          onArticlesClick={() => setCurrentPage("articles")}
          onQuizClick={() => setCurrentPage("quiz")}
          onResourcesClick={() => setCurrentPage("resources")} // new
        />
      )}

      {currentPage === "login" && (
        <LoginPage onBackClick={() => setCurrentPage("home")} />
      )}

      {currentPage === "articles" && (
        <ArticlesPage onBackClick={() => setCurrentPage("home")} />
      )}

      {currentPage === "quiz" && (
        <QuizPage onBackClick={() => setCurrentPage("home")} />
      )}

      {currentPage === "resources" && (
        <ResourcesPage onBackClick={() => setCurrentPage("home")} />
      )}
    </div>
  );
}

export default App;
