import './index.scss'
import Home from '../Home/index'
import About from '../About/index'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            <About />
            <Home />
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters