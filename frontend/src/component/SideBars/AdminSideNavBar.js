import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { adminsidenavbarData } from "./SideNavBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { FiLogOut } from "react-icons/fi";
import UserModaldelete from "../User/UserModalDelete";
import { useNavigate } from "react-router-dom";

const AdminSideNavBar = () => {
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
        <div className="navbar">
          <div
            style={{
              color: "white",
              marginLeft: "250px",
              fontSize: "30px",
              marginTop: "8px",
            }}
          >
            Research Project Management Tool
          </div>
          <div
            style={{
              color: "white",
              marginLeft: "450px",
              fontSize: "18px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Userprofile")}
          >
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
            <FiLogOut onClick={logout} title="Log Out" />
          </div>
        </div>

        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div>
                <a href="/">
                  <img
                    src="../Logo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Project Managenet Tool logo"
                  />
                </a>
              </div>
            </li>
            {adminsidenavbarData.map((item, index) => {
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

export default AdminSideNavBar;
