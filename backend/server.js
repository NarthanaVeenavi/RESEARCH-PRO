const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const databaseconnection = require('./utils/database.connection');
const authentication = require('./routes/auth/auth.routes');
// const studentGroups =  require('./routes/student-groups/studentGroups.routes');
// const submissionType = require('./routes/submission-type/submissionType.routes');
// const supervisorRequest = require('./routes/supervisor-request/supervisorRequest.routes');
// const template = require('./routes/template/template.routes');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000
const baseurl = process.env.BASE_URL

databaseconnection();

app.use(`${baseurl}/auth`, authentication);
// app.use(`${baseurl}/student-groups`, studentGroups);
// app.use(`${baseurl}/submission-type`, submissionType);
// app.use(`${baseurl}/supervisor-request`, supervisorRequest);
// app.use(`${baseurl}/template`, template);
app.use(`${baseurl}/check`, require('./routes/test.router'));

app.listen(port, ()=>{console.log(`server start on port ${port} base url `)})