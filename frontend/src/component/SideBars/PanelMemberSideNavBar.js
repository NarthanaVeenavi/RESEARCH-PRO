import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { panelsidenavbarData } from "./SideNavBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { FiUser } from "react-icons/fi";
import { FiLogOut, FiUser } from "react-icons/fi";
import UserModaldelete from "./UserModalDelete";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const PanelSideNavBar = () => {
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
      <IconContext.Provider value={{ color: "#fff" }}>
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
              <Link to="/supstaff" style={{ color: "white", textDecoration: "none" }}>Supervisor | Co-Supervisor</Link>
            </Button>
            <Button>
              <Link to="/viewtopics" style={{ color: "white", textDecoration: "none" }}>Panel Member</Link>
            </Button>
          </div>
          <div
            style={{
              color: "white",
              marginLeft: "400px",
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

        <nav className={"nav-menu active"} style={{background: "white"}}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
            </li>
            {panelsidenavbarData.map((item, index) => {
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
export default PanelSideNavBar;
