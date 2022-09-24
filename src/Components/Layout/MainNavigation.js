import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="container">
      <header className={classes.header}>
        <div className={classes.logo}>To do App</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/home" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/todo" activeClassName={classes.active}>
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink to="/doing" activeClassName={classes.active}>
                Doing
              </NavLink>
            </li>
            <li>
              <NavLink to="/done" activeClassName={classes.active}>
                Done
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
