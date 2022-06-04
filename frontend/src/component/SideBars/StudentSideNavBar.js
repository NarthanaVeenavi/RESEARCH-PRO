import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { studentsidenavbarData } from "./SideNavBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { FiLogOut, FiUser } from "react-icons/fi";
import UserModaldelete from "./UserModalDelete";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const StudentSideNavBar = () => {
  const [modalDelete, setModalDelete] = React.useState(false);
  const [modleType, setModaltype] = useState("");
  const token = JSON.parse(sessionStorage.getItem("token"));
  const navigate = useNavigate();

  const logout = () => {
    setModalDelete(true);
    setModaltype("logout");
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }} >
        <div className="navbar" style={{background: "grey"}}>
          <div
            style={{
              color: "white",
              marginLeft: "250px",
              fontSize: "30px",
              marginTop: "8px",
              background: "grey"
            }}
          >
            RESEARCH PRO
          </div>
          
          <div style={{marginTop:"0.2cm", marginLeft:"1cm"}}>
            <Button>
              <Link to="/viewgroupsstd" style={{ color: "white", textDecoration: "none" }}>Student Dashboard</Link>
            </Button>
            <Button>
              <Link to="/sublinks" style={{ color: "white", textDecoration: "none" }}>Submissions</Link>
            </Button>
          </div>

          <div
            style={{
              color: "white",
              marginLeft: 250,
              fontSize: "18px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Userprofile")}
          >
            <FiUser /> &nbsp;
            {token.email}
          </div>
          <div
            style={{
              color: "white",
              marginRight: "30px",
              fontSize: "18px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            <Button style={{marginTop:"-0.2cm"}} onClick={logout}>LogOut</Button>
          </div>
        </div>

        <nav className="nav-menu active" style={{background: "white"}}>
          <ul style={{ height: "130" }} className="nav-menu-items">
            <li className="navbar-toggle">
            </li>
            {studentsidenavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <UserModaldelete
        show={modalDelete}
        type={modleType}
        onHide={() => setModalDelete(false)}
      />
    </div>
  );
};

export default StudentSideNavBar;
