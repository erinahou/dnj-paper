import React from 'react'
import { Link } from 'react-router-dom'
import Swiper from '../../components/Swiper'
import { makeServer } from '../../server' // May not need cus already declared in shop

// Initialize the MirageJS server (already declared in Shop)
// makeServer();

export default function Projects() {
  let [projectList, setProjects] = React.useState([])

  React.useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data.projectList))
  }, [])

  // Group projects by year; acc is  acc is an object where each key is a year, and the value is an array of projects for that year.
  const projectsByYear = projectList.reduce((acc, project) => {
    const year = project.year
    if (!acc[year]) {
      acc[year] = {}
    }

    const type = project.type
    if (!acc[year][type]) {
      acc[year][type] = []
    }

    acc[year][type].push(project)
    return acc
    }, {})

    // Function to capitalize words (e.g. type of project)
    function capitalizeFirstLetter(word) {
      if (!word) return ''; // Handle empty input
      return word.charAt(0).toUpperCase() + word.slice(1)
    }

    // Sort years in descending order
    const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

    // Render projects grouped by year and sorted by type
    const projectElements = sortedYears.map(year => (
      <div className="p-medium-bottom" key={year}>
        <p className="label">{year}</p>
        {Object.keys(projectsByYear[year]).map(type => (
          <div key={type}>
            {/* <h2 className="label">{type}</h2> */}

              {projectsByYear[year][type].map(project => (
                <Link
                  to={`/projects/${project.id}`}
                  aria-label={`View details for project ${project.title}`}
                  key={project.id}
                  className="project-list--item"
                >

                    <span>{project.title}</span>
                    <span class="font-serif"> {capitalizeFirstLetter(project.type)}</span>

                </Link>
              ))}

          </div>
        ))}
      </div>
    ))

    return (
      <div className="twelve-grid-container">
        <div className="project-list">
          {projectElements}
        </div>
      </div>
    );
}
