import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProjectDetail() {
  let params = useParams()
  let [updatedProject, setProject] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProject(data.project)
      })
  }, [params.id])

  if (!updatedProject) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{updatedProject.title}</h1>
      <h1>{updatedProject.year}</h1>
    </div>
  )
}
