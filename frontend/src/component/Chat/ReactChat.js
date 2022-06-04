import React from "react";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {Chat,Channel,Window,ChannelHeader,MessageList,MessageInput,Thread,LoadingIndicator,ChannelList,ChatContext,} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import "@stream-io/stream-chat-css";
import ChatOption from "./ChatSettings";
import SupervisorSideNavBar from "../SideBars/SupervisorSideNavBar";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const ReactChat = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const filters = { members: { $in: [token.iD] } };
  const sort = { last_message_at: -1 };
  const options = { limit: 10 };

  const key = "tzj6qyfvc9ha";

  const user = {
    id: token.iD,
    email: token,
  };
  console.log(token);
  console.log(user.id);
  const [cClient, setcClient] = useState(null);
  const [option, setOption] = useState(false);

  useEffect(() => {
    const init = async () => {
      console.log(user.id);
      const chatClient = StreamChat.getInstance(key);
      await chatClient.connectUser(user, chatClient.devToken(user.id));

      setcClient(chatClient);
    };
    init();
    console.log(cClient);
    if (cClient) return () => cClient.disconnectUser();
  }, []);

  if (!cClient) return <LoadingIndicator />;

  return (
    <div>
      {token.type == "Staff" ? <SupervisorSideNavBar /> : <StudentSideNavBar />}
      <div
        style={{
          marginLeft: "200px",
          marginTop: "0px",
          marginRight: "0px",
          height: "400px",
        }}
      >
        <Chat cClient={cClient} theme="messaging light">
          {token.type == "Staff" ? <ChatOption /> : ""}
          <ChannelList filters={filters} sort={sort} options={options} />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList hideDeletedMessages />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default ReactChat;
