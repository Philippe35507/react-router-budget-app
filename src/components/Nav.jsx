//rrd imports
import { Form, NavLink } from "react-router-dom";

// assets
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" arial-label="Home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete user</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
