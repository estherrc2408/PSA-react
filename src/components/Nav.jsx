import { NavLink } from 'react-router-dom'
export const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className="nav-link active">
                    <NavLink
                        to='/'
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink
                        to='/search'
                    >Search
                    </NavLink></li>
                <li className="nav-link" >
                    <NavLink
                        to='/btsellers'
                    >Best Sellers
                    </NavLink></li >
                <li className="nav-link" >
                    <NavLink
                        to='/phones'
                    >Phones
                    </NavLink></li >
                <li className="nav-link" >
                    <NavLink
                        to='/login'
                    >Login
                    </NavLink></li >
            </ul >
        </nav >
    )
}
