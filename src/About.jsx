import React from 'react'
import myGif from './images/lo.webp'

const About = () => { 
  return (
    <main className='About'>
      <h2>About</h2>
      <p style={{marginTop : "1rem"}}>
        "Hello, I'm Andrews, and I'm excited to introduce you to my new social media app. This platform is all about sharing your thoughts and seeing what others have to say. Join us and let's post our ideas together. Thank you for your support!"
      </p>
      <div className='immain' >
          <img src={myGif} alt="" />
      </div>
    </main>
  )
}

export default About