/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import "../sass/Header.scss"


function About() {
  const [user, setUser] = useState('mario')

  if (!user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div>
      <div className='about'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero laboriosam soluta accusamus ex, corrupti reprehenderit quibusdam sint quisquam delectus!</p>
        <p>Error, illum dicta adipisci corrupti suscipit modi pariatur molestias ratione ipsum odio. Officiis, totam delectus nesciunt ipsam minima voluptatibus reiciendis!</p>
        <p>Dolorem a doloribus eos debitis modi. Inventore, debitis magnam, blanditiis aliquid aut id eum provident ullam dolor nam eveniet eaque.</p>
        <p>Facilis sapiente, placeat, repellendus neque animi id, voluptas doloremque inventore odio veniam temporibus ducimus pariatur natus laborum saepe perferendis! Dolorem!</p>
      </div>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About