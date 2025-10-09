import React, { useState } from "react";

const HomePage = ({ onLoginClick, onArticlesClick, onQuizClick, onResourcesClick }) => {
  const [fact, setFact] = useState("");

  const funFacts = [
    "India has the longest written constitution in the world!",
    "The Constitution borrowed ideas from UK, USA, Ireland, and more.",
    "Constitution Day is celebrated on November 26.",
    "There are 6 Fundamental Rights and 11 Fundamental Duties.",
    "The word 'Socialist' was added to the Preamble in 1976.",
    "Originally recognized 14 languages; now 22 in the 8th Schedule.",
    "Justice M. Fathima Beevi was the first female Supreme Court judge in 1989.",
    "The President can grant pardons, reprieves, and remissions.",
    "India’s Constitution is over 470 articles long including amendments.",
    "It’s inspired by over 7 countries but uniquely Indian in spirit!"
  ];

  const showRandomFact = () => {
    const random = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFact(random);
  };

  return (
    <div className="container">
      {/* CSS at top */}
      <style>{`
        body { margin: 0; font-family: Arial, sans-serif; }

        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #003366;
          color: white;
          width: 100%;
        }

        nav .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        nav .logo h1 {
          margin: 0;
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-size: 2rem;
          font-weight: bold;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
          align-items: center;
        }

        nav ul li {
          cursor: pointer;
          font-weight: 600;
          transition: color 0.3s;
        }

        nav ul li:hover {
          color: #2e8c81ff;
        }

        nav ul li span {
          cursor: pointer;
          font-weight: 600;
          color: white;
          text-decoration: none;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          transition: background 0.3s;
        }

        nav ul li span:hover {
          background: #2e8c81ff;
        }

        .Main {
          flex: 1;
          text-align: center;
          padding: 4rem 2rem;
          background-color: #f9f9f9;
          width: 100%;
        }

        .Main h2 {
          font-family: 'Roboto Slab', serif;
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #003366;
        }

        .Main p {
          font-size: 1.2rem;
          margin: 0 auto 2rem auto;
          font-family: 'Open Sans', sans-serif;
          line-height: 1.6;
          max-width: 600px;
        }

        .section-title {
          font-family: 'Roboto Slab', serif;
          font-size: 1.8rem;
          color: #003366;
          margin: 3rem 0 1.5rem 0;
          text-align: center;
          text-decoration: underline;
          text-underline-offset: 6px;
        }

        .features {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          width: 100%;
          padding: 0 2rem 4rem 2rem;
        }

        .feature-card {
          flex: 1;
          min-width: 220px;
          background-color: white;
          border-radius: 15px;
          padding: 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
          text-align: center;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          background-color: #eef6f5;
        }

        .feature-card h3 {
          font-family: 'Roboto Slab', serif;
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: #003366;
        }

        .feature-card p {
          font-size: 1rem;
          line-height: 1.5;
          color: #333;
        }

        .fun-fact-card .fact-display {
          margin-top: 1rem;
          font-style: italic;
          color: #2e8c81ff;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #003366;
          color: white;
          width: 100%;
        }
      `}</style>

      {/* Body */}
      <nav>
        <div className="logo">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Constitution_of_India.jpg" 
            alt="Logo" 
            style={{ width: "50px", height: "50px" }}
          />
          <h1>LENS4LAWS</h1>
        </div>
        <ul>
          <li onClick={onArticlesClick}>Articles</li>
          <li onClick={onQuizClick}>Quiz</li>
          <li onClick={onResourcesClick}>Resources</li>
          <li>About Us</li>
          <li><span onClick={onLoginClick}>Login</span></li>
        </ul>
      </nav>

      <section className="Main">
        <h2>GETTING STARTED!</h2>
        <p>
          Do you know what the Constitution is? Don’t worry, this is for you! 
          Explore your rights, learn the laws, and discover interesting facts along the way.
        </p>

        <h3 className="section-title">What You Can Do Here</h3>
        <div className="features">
          <div className="feature-card" onClick={onArticlesClick}>
            <h3>Learn Articles</h3>
            <p>Dive into important sections and understand your rights and duties.</p>
          </div>
          <div className="feature-card" onClick={onQuizClick}>
            <h3>Quizzes</h3>
            <p>Test your knowledge and see how well you know the Constitution in a fun way.</p>
          </div>
          <div className="feature-card" onClick={onResourcesClick}>
            <h3>Resources</h3>
            <p>Access books, PDFs, and interactive tools for deeper learning.</p>
          </div>
          <div className="feature-card fun-fact-card" onClick={() => setFact(funFacts[Math.floor(Math.random() * funFacts.length)])}>
            <h3>Fun Facts</h3>
            <p>Click to discover quirky and interesting facts about our Constitution!</p>
            {fact && <div className="fact-display">💡 {fact}</div>}
          </div>
          <div className="feature-card">
            <h3>About Us</h3>
            <p>Learn why this web exists and how it helps every citizen explore their rights.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 LENS4LAWS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
