import './index.scss'
import logo from '../../logocropped.png'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/index'
import AnimatedLetters from '../AnimatedLetters/index'
import { useState } from 'react'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'h', 'a', 'm', 'm', 'e', 'd']
    const jobArray = ['w', 'e', 'b', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    return (

        <div className='container home-page'>
            <Sidebar />
            <div className='text-zone'>
                <h1>Hi, <br /> I'm &nbsp;
                    <img src={logo} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>
                <h2>Frontend Developer / ReactJS</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home