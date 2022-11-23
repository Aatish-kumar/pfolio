import "../styles/hero-info.css";
import avatar from "../images/Avatar.png"

const HeroSection = () => {
  return (
    <div className="hero-info">
        <div class="avatar-container">
          <div class="avatar">
            <img src={avatar} alt="photo" />
          </div>
        </div>
        <div className="hero-info-container">
            <h1>I AM AATISH KUMAR</h1>
            <h1 className="animate-text">FRONTEND/BACKEND DEVELOPER</h1>
            <h1>MERN STACK</h1>
            <p>Full-stack Web Developer with  a knack to build Full-stack Web Applications with JavaScript ecosystem for Frontend(Reactjs) Web Development and Backend(Nodejs) API Development</p>
        </div>
    </div>
  )
}
export default HeroSection    
    