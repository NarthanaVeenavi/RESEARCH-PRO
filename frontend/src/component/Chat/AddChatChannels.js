import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CardContent, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { StreamChat } from "stream-chat";
import { Box } from "@mui/material";
import { useChatContext } from "stream-chat-react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import ChatOption from "./ChatSettings";
import SupervisorSideNavBar from "../SideBars/SupervisorSideNavBar";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";
import { FaUserPlus } from "react-icons/fa";

const AddChatChannel = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const key = "tzj6qyfvc9ha";

  const UserChat = {
    id: token.iD,
    email: token.email,
  };

  const channelMembers = [UserChat.id];
  const clientChat = StreamChat.getInstance(key);
  clientChat.connectUser(UserChat, clientChat.devToken(UserChat.id));
  const [chanelName, setChanenelName] = useState("");

  const createChanel = async () => {
    const channel = clientChat.channel("team", chanelName, {
      name: chanelName,
      members: channelMembers,
    });
    await channel.create();
    navigate("/chat");
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await clientChat.queryUsers(
          { id: { $ne: UserChat.id } },
          { id: 1 }
        );
        if (response.users.length) {
          setUsers(response.users);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div
      
    >
      {token.type == "Staff" ? <SupervisorSideNavBar /> : <StudentSideNavBar />}
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <ChatOption />
        <div
          style={{
            marginLeft: "50px",
            width: "400px",
            backgroundColor: "whitesmoke",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "90ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography svariant="h5">Group Name</Typography>
            <TextField
              style={{ width: "370px" }}
              id="filled-basic"
              required
              label="Group Name"
              variant="filled"
              type="text"
              value={chanelName}
              onChange={(e) => setChanenelName(e.target.value)}
            />
            <Typography svariant="h5">Select Members</Typography>
            <div style={{ overflow:"auto", height:"300px" }}>
            {users.map((user) => (
              <>
                <Card
                  variant="outlined"
                  onClick={() => {
                    channelMembers.push(user.id);
                    alert(user.id + " Added to Group");
                    console.log(channelMembers);
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <FaUserPlus /> &nbsp;
                      {user.id}
                      {console.log(user)}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            ))}
            </div>
            <br />
            <Button variant="contained" color="success" onClick={createChanel}>
              Create Group
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddChatChannel;
