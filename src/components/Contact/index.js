import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import marker from '../../maps-and-flags.png'





const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>C</span>
                        <span className={`${letterClass} _16`}>o</span>
                        <span className={`${letterClass} _17`}>n</span>
                        <span className={`${letterClass} _18`}>t</span>
                        <span className={`${letterClass} _19`}>a</span>
                        <span className={`${letterClass} _20`}>c</span>
                        <span className={`${letterClass} _21`}>t</span>
                        <span className={`${letterClass} _22`}> </span>
                        <span className={`${letterClass} _23`}>M</span>
                        <span className={`${letterClass} _24`}>e</span>
                    </h1>

                    <p>
                        I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, dont hesitate to contact me using below form either
                    </p>

                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li className='half'>
                                    <input type="submit" className='flat-button' value="Send" required />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Mohammed Aburahma,
                    <br />
                    Turkey
                    <br />
                    Istanbul, Eyupsultan, 34065 <br />
                    <span>moodyaburahma@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[41.015137, 28.979530]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker Icon={marker} position={[41.015137, 28.979530]}>
                            <Popup>Mohammed lives here, come over for a cup of coffee </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact