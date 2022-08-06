import './index.scss'
import Home from '../Home/index'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
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