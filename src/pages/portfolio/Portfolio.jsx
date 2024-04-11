import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("projects.json").then((res) =>
      res.json().then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
    );
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (projects) => projects.category === category
      );
      setFilteredProjects(filtered);
    }
  };
  return (
    <section className="portfolio" datapage="potfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "Web design", "Applications", "web development"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button
                onClick={() => handleFilterClick(category)}
                data-filter-btn
                className={category === selectedCategory ? "active" : ""}>
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* show portfolio data */}
      <div className="projects">
        <ul className="project-list">
          {filteredProjects.map((projects) => (
            <li
              key={projects.id}
              className="project-item active"
              data-filter-item
              data-category={projects.category}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={projects.image} alt="" loading="lazy" />
                </figure>
                <h3 className="project-title">{projects.title}</h3>
                <p className="project-category">{projects.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
