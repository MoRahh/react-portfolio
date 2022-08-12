import './Index.scss'
import Bg from '../Bg/index'

const Layout = () => {
    return (
        <>
            <Bg />
            <div className='App'>
                <div className='page'>
                    <span className='tags top-tags'>&lt;body&gt;</span>

                    {/* <Outlet /> */}

                    <span className='tags bottom-tags'>
                        &lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Layout;