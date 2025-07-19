import { Link } from "react-router-dom";

const NavbarStyles = {
  nav: { 
    justifyContent: "center", 
    padding: "1rem", 
    backgroundColor: "black", 
    display: "flex", 
  },

  ul: { 
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    color: "white",
    textColor: "white"
  },
  li: { 
    color: "white", 
  },

  Link: {
    textDecoration: "none",
    color: "white",
   
  }
};

function Navbar() {
  return (
    <nav style={NavbarStyles.nav}>
      <ul style={NavbarStyles.ul}>
        <li style={NavbarStyles.li}><Link style={NavbarStyles.Link} to="/">Home</Link></li>
        <li style={NavbarStyles.li}><Link style={NavbarStyles.Link} to="/about">About</Link></li>
        <li style={NavbarStyles.li}><Link style={NavbarStyles.Link} to="/services">Services</Link></li>
        <li style={NavbarStyles.li}><Link style={NavbarStyles.Link} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
