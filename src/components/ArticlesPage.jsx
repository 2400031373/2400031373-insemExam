import React, { useState } from "react";

const ArticlesPage = ({ onBackClick }) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The 106th Constitutional Amendment: Women's Reservation Bill",
      date: "September 2023",
      summary:
        "The Parliament passed the Women’s Reservation Bill ensuring 33% reservation for women in Lok Sabha and State Assemblies.",
      content:
        "The 106th Amendment, also known as the Nari Shakti Vandan Adhiniyam, is a landmark move in promoting gender equality in political representation. It will come into effect after delimitation following the next census.",
    },
    {
      id: 2,
      title: "Supreme Court Ruling on Same-Sex Marriage",
      date: "October 2023",
      summary:
        "The Supreme Court declined to legalize same-sex marriages but emphasized equality and anti-discrimination for LGBTQ+ individuals.",
      content:
        "The verdict recognized the right to live with dignity for queer couples but stated that the lawmaking responsibility lies with Parliament. The judgment highlighted the need for a future legal framework to protect civil unions.",
    },
    {
      id: 3,
      title: "Right to Privacy and AI Surveillance",
      date: "June 2024",
      summary:
        "The growing use of facial recognition and AI tools led to debates around Article 21 – the Right to Privacy.",
      content:
        "A recent public interest litigation (PIL) questioned unregulated AI surveillance. The court directed the government to draft clear data protection policies aligned with the Digital Personal Data Protection Act, 2023.",
    },
  ]);

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleRefresh = () => {
    // Random shuffle simulation for "latest" updates
    setArticles([...articles].sort(() => Math.random() - 0.5));
  };

  return (
    <>
      <style>{`
        body { margin: 0; font-family: 'Open Sans', sans-serif; background-color: #f9f9f9; }
        .container { padding: 2rem; max-width: 900px; margin: auto; }
        h1 { text-align: center; color: #003366; font-family: 'Roboto Slab', serif; }
        .article-card {
          background: white;
          padding: 1.5rem;
          margin-top: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .article-title {
          font-size: 1.4rem;
          color: #003366;
          font-weight: 600;
        }
        .article-date {
          font-size: 0.9rem;
          color: gray;
          margin-top: 0.3rem;
        }
        .article-summary {
          margin-top: 0.8rem;
          color: #333;
          line-height: 1.5;
        }
        .article-content {
          margin-top: 1rem;
          color: #333;
          line-height: 1.6;
          background: #f0f8ff;
          padding: 1rem;
          border-radius: 8px;
        }
        button {
          margin-top: 1rem;
          background-color: #2e8c81ff;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
        button:hover {
          background-color: #003366;
        }
        .top-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
        }
      `}</style>

      <div className="container">
        <h1>Latest Constitutional Updates 📰</h1>

        <div className="top-buttons">
          <button onClick={handleRefresh}>🔄 Refresh Updates</button>
          <button onClick={onBackClick}>🏠 Back to Home</button>
        </div>

        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-title">{article.title}</div>
            <div className="article-date">{article.date}</div>
            <div className="article-summary">{article.summary}</div>
            <button onClick={() => handleToggle(article.id)}>
              {expanded === article.id ? "Hide Details ▲" : "Read More ▼"}
            </button>

            {expanded === article.id && (
              <div className="article-content">{article.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
