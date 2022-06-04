import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";
import PanelAssignModal from "../PanelMembers/PanelMemberAssignModal";

const ResearchGroups = () => {
  const [groups, setGroup] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const getGroups = () => {
      axios
        .get("http://localhost:5000/group")
        .then((res) => {
          setGroup(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getGroups();
  }, []);

  return (
    <div
      
    >
      <AdminSideNavBar />
      <div style={{ marginLeft: "200px", marginRight: "10px" }}>
        <center>
          <h3 style={{ color: "white" }}>Research Project Groups </h3>
        </center>
        <br />
        <div className="grouptable">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Leader's ID</th>
                <th>Leader's Name</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Member 2 ID</th>
                <th>Member 3 ID</th>
                <th>Member 4 ID</th>
                <th>Assign Panel Members</th>
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group._id}>
                <tr>
                  <td>{group.groupID}</td>
                  <td>{group.leaderID}</td>
                  <td>{group.leaderName}</td>
                  <td>{group.contactNo}</td>
                  <td>{group.email}</td>
                  <td>{group.member2ID}</td>                  
                  <td>{group.member3ID}</td>                 
                  <td>{group.member4ID}</td>                 
                  <td>
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Assign
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <PanelAssignModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchGroups;
