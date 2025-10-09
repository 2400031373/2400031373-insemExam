import React from "react";

const ResourcesPage = ({ onBackClick }) => {
  const resources = [
    {
      category: "📘 Study Guides",
      items: [
        {
          title: "Introduction to the Indian Constitution",
          link: "https://www.india.gov.in/my-government/constitution-india",
        },
        {
          title: "Fundamental Rights Simplified",
          link: "https://byjus.com/ias-questions/fundamental-rights-in-the-constitution/",
        },
  
        {
          title:"Link for others",
          link:"https://en.wikipedia.org/wiki/Special:Search?go=Go&search=peoples+rights+india&ns0=1",
        },
      ],
    },
    {
      category: "🎥 Video Resources",
      items: [
        {
          title: "Preamble & Articles Explained (Animated)",
          link: "https://www.youtube.com/watch?v=jz8Fx1u1Rdo",
        },
        {
          title: "Amendments in Indian Constitution",
          link: "https://www.youtube.com/watch?v=PIgqRudE7Yk",
        },
      ],
    },
    {
      category: "🌐 Official Links",
      items: [
        {
          title: "Legislative Department - Constitution Portal",
          link: "https://legislative.gov.in/",
        },
        {
          title: "PRS India - Bill & Amendment Tracker",
          link: "https://prsindia.org/",
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        body { margin:0; font-family:'Open Sans',sans-serif; background-color:#f9f9f9; }
        .container { padding:2rem; max-width:800px; margin:auto; }
        h1 { text-align:center; font-family:'Roboto Slab',serif; color:#003366; }
        .category { margin-top:2rem; }
        .category h2 { color:#2e8c81ff; border-bottom:2px solid #2e8c81ff; padding-bottom:0.3rem; }
        ul { list-style-type:none; padding:0; }
        li { margin:0.7rem 0; }
        a { text-decoration:none; color:#003366; font-weight:bold; }
        a:hover { color:#2e8c81ff; }
        button { margin-top:2rem; background-color:#2e8c81ff; color:white; border:none; padding:0.6rem 1.2rem; border-radius:5px; cursor:pointer; }
        button:hover { background-color:#003366; }
      `}</style>

      <div className="container">
        <h1>📚 Constitution Learning Resources</h1>

        {resources.map((section, i) => (
          <div key={i} className="category">
            <h2>{section.category}</h2>
            <ul>
              {section.items.map((res, j) => (
                <li key={j}>
                  <a href={res.link} target="_blank" rel="noopener noreferrer">
                    {res.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button onClick={onBackClick}>🏠 Back to Home</button>
      </div>
    </>
  );
};

export default ResourcesPage;
