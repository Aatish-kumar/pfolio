import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import '../styles/header.css';
import logo from '../images/filename__1_-removebg-preview.png';
const Header = () => {
  return (
    <div className="h-wrapper">
        <div className="header">
            <nav className="h-left">
                
                    <li>HOME</li>
                    <li>PROJECTS</li>
                    <li>SKILLS</li>
                    <li>CONTACT</li>
                
            </nav>
            <div className="h-center">
                <div className="logo-container">
                    <img className="logo" src={ logo } alt="logo"/>
                </div>
                
            </div>
            <div className="h-right">
                <AiOutlineLinkedin className="icon-social" size={35}/>
                <AiOutlineGithub className="icon-social" size={25}/>
                <AiOutlineTwitter className="icon-social" size={25}/>
            </div>
        </div>
        
    </div>
  )
}
export default Header