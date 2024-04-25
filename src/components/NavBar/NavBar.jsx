import style from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const NavBar = ({ navItems }) => {

    return (
        <>
            <nav className={style.navBar}>
                <ul>
                    {navItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.link}> {item.name} </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </>
    )
}

NavBar.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default NavBar