import './index.scss'
import logo from '../../../logohomepage.png'
import { useRef } from 'react'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()


    return (
        <div className='logo-container'>
            <img className='solid-logo' src={logo} alt="M" />
        </div>
    )
}

export default Logo