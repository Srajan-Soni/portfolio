import React from 'react'
import Certificates from './Certificates'
import Contact from './Contact'
import Experiences from './Experiences'
import Projects from './Projects'
import profileimg from '../src/imgs/srajan.jpeg'

import ggct from '../src/imgs/ggct.png'

const Home = () => {

  const aboutline = {
    width:'200px'
  }
  const styles = [
    {
      height : '28px',
      width: "95%"
    },
    {
      height : '28px',
      width: "85%"
    },
    {
      height : '28px',
      width: "75%"
    },
    {
      height : '28px',
      width: "70%"
    },
    {
      height : '28px',
      width: "65%"
    }


  ]



  return (
    
    <div className="w3-padding-large main w3-padding-64">
      
      <header className="w3-container w3-padding-32 w3-center w3-black" id="main">
        <h1 className="w3-jumbo"> Srajan Soni</h1> 
        {/* <a href="https://www.linkedin.com/in/srajan-soni-4b49601a4/" target={"_blank"} className=" w3-button w3-light-grey w3-margin-right w3-section w3-display-topright">
            <img src='imgs/social/linkedin.png' alt='' width={"40px"} />
        </a> */}
        <h4>Software Engineer</h4>
        <img src={profileimg} alt="boy" className="w3-image img-thumbnail" width="500" height="600" />
      </header>
      <div className="w3-container w3-dark-grey" style={{width:'800px',marginLeft:'10%'}}> 
        <h4><i> - working at</i></h4>
        <img src="imgs/company/psl.jpg" alt="" width={'50px'} />
        <h2>Persistent Systems</h2>
        <h4 className='text-warning'>Hinjewadi,Pune</h4>
        <p>Java Full Stack Developer</p>
        
        <hr />
      </div>
      <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
        <h2 className="w3-text-light-grey">About</h2>
        <hr style={aboutline} className="w3-opacity" />
        <p>My strongest skill is my creativity.
            I have a good Interest in reading and learning new skills. I like to learn new concepts , building logics and create many
            programmes.
            I am able to build logics using data structures and I have a good command in C , Java and Python.
            I like to create and develop we applications. 
            Currently , I am working as Software Engineer Full Time Employee in Persistent Systems. 
        </p>
      </div>

      <div className="w3-container w3-dark-grey" style={{width:'800px',marginLeft:'10%'}}> 
        <h4><i>Education</i></h4>
        <img src={ggct} alt="" width={'50px'} />
        <h2>Gyan Ganga College of Technology</h2>
        <h4 className='text-info'>Jabalpur</h4>
        <p>B.Tech | Computer Science</p>
        <strong className='text-warning'> 2018-2022</strong>
        
        <hr />
      </div>

      {/* Skills */}
    <div style={{width:"90%",margin:'0px auto'}}>
      <h3 className="w3-padding-16 w3-text-light-grey">My Technical Skills</h3>
    <p className="w3-wide">HTML & CSS</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[0]}></div>
    </div>
    <p className="w3-wide">JavaScript</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[0]}></div>
    </div>
     <p className="w3-wide">Bootstrap</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[1]}></div>
    </div>
    <p className="w3-wide">React</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[1]}></div>
    </div>
    <p className="w3-wide">Typescript</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[2]}></div>
    </div>
    <p className="w3-wide">Node.js</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[2]}></div>
    </div>
    <p className="w3-wide">Express</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[3]}></div>
    </div>
    <p className="w3-wide">MongoDB</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[3]}></div>
    </div>
    <p className="w3-wide">Java</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[3]}></div>
    </div>
    <p className="w3-wide">Python</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[2]}></div>
    </div>
    <p className="w3-wide">Web3</p>
    <div className="w3-white">
      <div className="w3-dark-grey" style={styles[3]}></div>
    </div>
    </div>
    <br />

    <button className="w3-button w3-light-grey w3-padding-large w3-section ml-5">
      <a href="Srajan_Soni_Resume.pdf" target={"_blank"}>View Resume</a>
    </button>

    <Certificates></Certificates>
    <Experiences></Experiences>
    <Projects></Projects>
    <Contact></Contact>

    </div>
    
  )
}

export default Home