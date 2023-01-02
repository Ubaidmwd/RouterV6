import React from 'react'
import {useParams} from 'react-router-dom';

function About() {
    const param=useParams()
  return (
    <div>About
        <h1>About params {param.id}</h1>
    </div>
  )
}

export default About;