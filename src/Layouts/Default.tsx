import { Outlet } from 'react-router-dom'
import { Nav } from '../Components/Nav/Nav'
import { Footer } from '../Components/Footer/Footer'


export function LayoutDefault() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
