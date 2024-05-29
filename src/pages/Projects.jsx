import React from 'react'
import { createServer } from "miragejs"

let server = createServer()
server.get("/api/projects", { projects:[
    { id: 1, year: 2024, type: "judging panel", title: "Fresh!"},
    { id: 2, year: 2024, type: "workshops", title: "Making Paper Cloth"},
  ]
})

export default function Projects() {
  let [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data.projects))
  }, [])


  // Map through array to create elements
  let projectElements = projects.map(project => (
    <li key={project.id}>{project.title}, {project.type}</li>
  ))

  return(
    <ul>
      {projectElements}
    </ul>
  )
}
