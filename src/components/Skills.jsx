import jsImg from '../images/js.png'
import cssImg from '../images/CSS3.png'
import bootstrapImg from '../images/Bootstrap.png'
import htmlImg from '../images/html.png'
import mongoImg from '../images/mongo.png'
import nodeImg from '../images/Node.png'
import reactImg from '../images/React.png'
import reduxImg from '../images/Redux.png' 
import expressImg from '../images/expressjs.png'
import socketImg from '../images/Socketio.png'
import gitImg from '../images/git.png'

import '../styles/Skills.css'

const Skills = () => {
  return (
    <div className='skills-wrapper' id="Skills">
        <div className="skills">
            <h2>SKILLS</h2>
            <div className='skills-container'>
                <div className="skill">
                    <div className='skill-img'>
                        <img src={jsImg}/>
                    </div>
                    <h3>JavaScript</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={cssImg}/>
                    </div>
                    <h3>CSS</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={reactImg}/>
                    </div>
                    <h3>Reactjs</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={nodeImg}/>
                    </div>
                    <h3>Nodejs</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={expressImg}/>
                    </div>
                    <h3>Expressjs</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={mongoImg}/>
                    </div>
                    <h3>MongoDB</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={bootstrapImg}/>
                    </div>
                    <h3>Bootstrap</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={gitImg}/>
                    </div>
                    <h3>Git</h3>
                </div>

                <div className="skill">
                    <div className='skill-img'>
                        <img src={socketImg}/>
                    </div>
                    <h3>Socket.io</h3>
                </div>
            </div>
        
        </div>
    </div>
    
  )
}
export default Skills