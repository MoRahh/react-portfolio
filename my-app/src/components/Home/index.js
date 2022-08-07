import './index.scss'
import logo from '../../logocropped.png'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/index'
import AnimatedLetters from '../AnimatedLetters/index'
import { useState, useEffect } from 'react'
import Logo from './Logo/index'
import About from '../About/index'
import Loader from 'react-loaders'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>

            <div className='container home-page'>
                <Sidebar />
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <img src={logo} alt="developer" />
                        <span className={`${letterClass} _15`}>o</span>
                        <span className={`${letterClass} _16`}>h</span>
                        <span className={`${letterClass} _17`}>a</span>
                        <span className={`${letterClass} _18`}>m</span>
                        <span className={`${letterClass} _19`}>m</span>
                        <span className={`${letterClass} _20`}>e</span>
                        <span className={`${letterClass} _21`}>d</span>
                        <br />
                        <span className={`${letterClass} _22`}>W</span>
                        <span className={`${letterClass} _23`}>e</span>
                        <span className={`${letterClass} _24`}>b</span>
                        <span className={`${letterClass} _25`}> </span>
                        <span className={`${letterClass} _26`}>D</span>
                        <span className={`${letterClass} _27`}>e</span>
                        <span className={`${letterClass} _28`}>v</span>
                        <span className={`${letterClass} _29`}>e</span>
                        <span className={`${letterClass} _30`}>l</span>
                        <span className={`${letterClass} _31`}>o</span>
                        <span className={`${letterClass} _32`}>p</span>
                        <span className={`${letterClass} _33`}>e</span>
                        <span className={`${letterClass} _34`}>r</span>

                        <br />

                    </h1>
                    <h2>Frontend Developer / ReactJS</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div >
            <Loader type="pacman" />
        </>

    )
}
export default Home