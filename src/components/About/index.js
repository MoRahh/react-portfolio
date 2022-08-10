import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (

        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>A</span>
                        <span className={`${letterClass} _12`}>b</span>
                        <span className={`${letterClass} _13`}>o</span>
                        <span className={`${letterClass} _14`}>u</span>
                        <span className={`${letterClass} _15`}>t</span>
                        <span className={`${letterClass} _16`}> </span>
                        <span className={`${letterClass} _17`}>m</span>
                        <span className={`${letterClass} _18`}>e</span>
                    </h1>

                    <p>
                        I'm very ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#efd810" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faPython} color="#28a4d9" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>

    )
}

export default About