import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 	'./_nav.scss';

export function Nav() {
	const [Open, setOpen] = useState(false)
    const [activePage, setActivePage] = useState('Home')

    function toggleMenu() {
        setOpen((prevOpen) => !prevOpen)
    }

    function handlePageClick(pageName: string) {
        setActivePage(pageName)
    }
    function handleLinkClick(pageName: string) {
        handlePageClick(pageName)
        toggleMenu()
    }
  return (
	<>
	<header  className="head  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl " >
		<h1 className="head__logo sm:text-base font-bold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">Edie</h1>
		<ul className={`head__nav ${Open ? 'head__nav--active' : ''} `}>
			<li
				className={`head__nav__item ${
					activePage === 'Home' ? 'head__nav__item--active' : ''
				}`}
			>
				<NavLink
					to="/"
					className="head__nav__item__link"
					onClick={() => handleLinkClick('Home')}
				>
					Home
				</NavLink>
			</li>
			<li
				className={`head__nav__item ${
					activePage === 'Services' ? 'head__nav__item--active' : ''
				}`}
			>
				<NavLink
					to="/Services"
					className="head__nav__item__link"
					onClick={() => handleLinkClick('Services')}
				>
					Services
				</NavLink>
			</li>
			<li
				className={`head__nav__item ${
					activePage === 'OurWorks' ? 'head__nav__item--active' : ''
				}`}
			>
				<NavLink
					to="/ourworks"
					className="head__nav__item__link"
					onClick={() => handleLinkClick('OurWorks')}
				>
					Our Works
				</NavLink>
			</li>
			<li
				className={`head__nav__item ${
					activePage === 'Clients' ? 'head__nav__item--active' : ''
				}`}
			>
				<NavLink
					to="/Clients"
					className="head__nav__item__link"
					onClick={() => handleLinkClick('Clients')}
				>
					Clients
				</NavLink>
			</li>
			<li
				className={`head__nav__item ${
					activePage === 'Contact' ? 'head__nav__item--active' : ''
				}`}
			>
				<NavLink
					to="/Contact"
					className="head__nav__item__link"
					onClick={() => handleLinkClick('Contact')}
				>
					Contact
				</NavLink>
			</li>
		</ul>
		<div className="head__menuIcon" aria-expanded={Open} onClick={toggleMenu}>
			<span
				className={`head__menuIcon__burger ${
					Open ? 'head__menuIcon__burger--open' : ''
				}`}
			></span>
		</div>
	</header>
</>
  );
}

