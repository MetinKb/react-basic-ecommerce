import { Outlet, Link } from 'react-router-dom'
import Navbar from 'Components/Navbar'
import ListWrapper from 'Components/ListWrapper'

const WebLayout = () => {

    const urls = ["/", "about", "contact", "products"]

    return (
        <>
            <header className='flex w-full h-20'>
                <Navbar location="header">
                    <ListWrapper location="header">
                        {urls.map(url =>
                            <li
                                key={url}
                                className='h-full grid place-items-center'
                            >
                                <Link
                                    className="relative py-2 after:absolute after:content[''] after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:duration-500"
                                    to={url}
                                >{url === '/' ? 'HOME' : url.toLocaleUpperCase()}</Link>
                            </li>
                        )}
                    </ListWrapper>
                </Navbar>
            </header>
            <main className='w-full flex-auto'>
                <Outlet />
            </main>
            <footer className='flex w-full h-20 bg-gray-800 text-white'>
                Footer Content
            </footer>
        </>
    )
}

export default WebLayout