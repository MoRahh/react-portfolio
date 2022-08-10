import './index.scss'
import { useState } from 'react'
import Loader from 'react-loaders'

const Skills = () => {
    const [letterClass] = useState('text-animate')


    return (
        <>
            <div className="container skills-page">
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}> </span>
                        <span className={`${letterClass} _12`}>S</span>
                        <span className={`${letterClass} _13`}>k</span>
                        <span className={`${letterClass} _14`}>i</span>
                        <span className={`${letterClass} _15`}>l</span>
                        <span className={`${letterClass} _16`}>l</span>
                        <span className={`${letterClass} _17`}>s</span>
                        <span className={`${letterClass} _18`}> </span>
                        <span className={`${letterClass} _19`}>&</span>
                        <span className={`${letterClass} _20`}> </span>
                        <span className={`${letterClass} _21`}>E</span>
                        <span className={`${letterClass} _22`}>x</span>
                        <span className={`${letterClass} _23`}>p</span>
                        <span className={`${letterClass} _24`}>e</span>
                        <span className={`${letterClass} _25`}>r</span>
                        <span className={`${letterClass} _26`}>i</span>
                        <span className={`${letterClass} _27`}>e</span>
                        <span className={`${letterClass} _28`}>n</span>
                        <span className={`${letterClass} _29`}>c</span>
                        <span className={`${letterClass} _30`}>e</span>
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

                <div className="skills-details">
                    <div className='html'>
                        <span>Front end</span>
                        <div className='full'>
                            <div className='skill-width'></div>
                        </div>
                    </div>
                    <div className='css'>
                        <span>Back end</span>
                        <div className='full'>
                            <div className='skill-width'></div>
                        </div>
                    </div>
                    <div className='js'>
                        <span>JAVASCRIPT</span>
                        <div className='full'>
                            <div className='skill-width'></div>
                        </div>
                    </div>
                    <div className='react'>
                        <span>REACT</span>
                        <div className='full'>
                            <div className='skill-width'></div>
                        </div>
                    </div>

                    <div className='experience'>
                        <div className='card'>
                            <span>Frontend Web Developer</span>
                            <p><span>Kutez CNC | Istanbul, Turkey</span></p>
                        </div>
                        <div className='card'>
                            <span>Full Stack Web Developer</span>
                            <p><span>Upwork | Freelance</span></p>
                        </div>
                    </div>

                </div>



            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Skills;
