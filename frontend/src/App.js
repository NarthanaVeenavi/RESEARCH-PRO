import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubTypes from "./component/SubmissionTypes/SubmissionTypes";
import SubDoc from "./component/Submissions/DocSubmission";
import UploadDoc from "./component/Uploads/UploadDocuments";
import UploadTemp from "./component/Templates/UploadTemp";
import DownloadTemp from "./component/Templates/DownloadTemplates";
import CreateStudentGroups from "./component/StudentGroups/addStudentGroup";
import RegisterResearchTopic from "./component/StudentGroups/ResearchTopicRegistration";
import AcceptRejectTopic from "./component/ResearchTopics/ResearchTopicStatus";
import ResearchGroups from "./component/StudentGroups/ResearchGroups";
import TopicApprovalStudent from "./component/ResearchTopics//ResearchTopicApprovalStudent";
import ReactChat from "./component/Chat/ReactChat";
import StudentReg from "./component/Registration/StudentRegistration";
import UserLogin from "./component/User/UserLogin";
import StaffReg from "./component/Registration/StaffRegistration";
import UserCard from "./component/UserProfiles/UserProfileCard";
import UserProfile from "./component/UserProfiles/UserProfile";
import AdminStudentView from "./component/Admin/StudentViewAdmin";
import AdminStaffView from "./component/Admin/StaffViewAdmin";
import StudentStaffView from "./component/Student/StudentStaffView";
import SupRequestsStaffView from "./component/SupCoSupReqs/SupervisorRequestsStaffView";
import SupRequestsStudentView from "./component/SupCoSupReqs/SupervisorRequestsStudentView";
import CoSupRequestsStaffView from "./component/SupCoSupReqs/StaffViewCoSupervisorRequests";
import CoSupRequestsStudentView from "./component/SupCoSupReqs/CoSupRequestsStudentView";
import RequestSup from "./component/SupCoSupReqs/RequestSupervisor";
import RequestCoSup from "./component/SupCoSupReqs/RequestCoSupervisor";
import StudentSub from "./component/UploadForm/StudentSubmission";
import SubLinks from "./component/Submissions/SubmissionLinks";
import CreateChatChannel from "./component/Chat/AddChatChannels";
import EvaluateDocument from "./component/Evaluations/EvaluateDocuments";
import EvaluatePresentation from "./component/Evaluations/EvaluatePresentations";
import CreateMarkingScheme from "./component/MarckingSchemes/AddMarkingSchemes";
import ResearchGroupsStudents from "./component/StudentGroups/ResearchGroupsStudents";

function App(){
return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/creategroups" exact element={<CreateStudentGroups />} />
            <Route path="/viewgroups" exact element={<ResearchGroups />}/>
            <Route path="/registertopic" exact element={<RegisterResearchTopic />} />
            <Route path="/viewtopics" exact element={<AcceptRejectTopic />} />
            <Route path="/studenttopicapproval" exact element={<TopicApprovalStudent />} />
            <Route path="/chat" exact element={<ReactChat />} />
            <Route path="/createchanel" exact element={<CreateChatChannel />} />
            <Route path="/evaluatedocument" exact element={<EvaluateDocument />} />
            <Route path="/evaluatepresentation" exact element={<EvaluatePresentation />} />
            <Route path="/createmarking" exact element={<CreateMarkingScheme/>}/>
            <Route path="/Userlogin" exact element={<UserLogin/>}/>
            <Route path="/Studentreg" exact element={<StudentReg/>}/>
            <Route path="/Staffreg" exact element={<StaffReg/>}/>
            <Route path="/Usercard" exact element={<UserCard/>}/>
            <Route path="/Userprofile" exact element={<UserProfile />} />
            <Route path="/Adminstudentview" exact element={<AdminStudentView/>}/>
            <Route path="/Adminstaffview" exact element={<AdminStaffView/>}/>
            <Route path="/Studentstaffview" exact element={<StudentStaffView/>}/>
            <Route path="/requestsup" exact element={<RequestSup />}/>
            <Route path="/requestcosup" exact element={<RequestCoSup />}/>
            <Route path="/supstaff" exact element={<SupRequestsStaffView />}/>
            <Route path="/supstudent" exact element={<SupRequestsStudentView />}/>
            <Route path="/cosupstaff" exact element={<CoSupRequestsStaffView />}/>
            <Route path="/cosupstudent" exact element={<CoSupRequestsStudentView />}/>
            <Route path="/subtypes" exact element={<SubTypes/>} />
            <Route path="/subtypes/:id" exact element={<SubDoc/>} />
            <Route path="/subdoc" exact element={<SubDoc/>} />
            <Route path="/uploaddoc" exact element={<UploadDoc/>} />
            <Route path="/uploadtemp" exact element={<UploadTemp/>} />
            <Route path="/downloadtemp" exact element={<DownloadTemp/>} />
            <Route path="/studentsub" exact element={<StudentSub/>} />    
            <Route path="/sublinks" exact element={<SubLinks/>} />
            <Route path="/downloadtemp" exact element={<DownloadTemp/>} />    
            <Route path="/viewgroupsstd" exact element={<ResearchGroupsStudents/>} />  
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App;
