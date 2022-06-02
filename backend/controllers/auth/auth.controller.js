const User = require('../../models/users/user.model');
const Student = require('../../models/users/student/student.model');
const Staff = require('../../models/users/staff/staff.model');
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const signup = async (req,res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const role = req.body.role;
        const email = req.body.email;
        const password = req.body.password;

        const user = new User({
            firstname,
            lastname,
            role,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        let saveduser = await user.save();
        let id = saveduser._id.toString();

        if(role === "STUDENT") {
            const studentId = req.body.studentId;
            const batch = req.body.batch;
            const groupId = req.body.groupId;
            const userId = id;

            const student = new Student({
                userId,
                studentId,
                batch,
                groupId
            })

            await student.save()
            .then(() => {
                res.status(200).send({status: "Student Added Successfully", student});
            })
        }

        if(role === "STAFF") {
            const userId = id;

            const staff = new Staff({
                userId
            })

            await staff.save()
            .then(() => {
                res.status(200).send({status: "Staff Member Added Successfully", staff});
            })
        }
    } catch(err) {
        console.log(err.message);
        res.status(400).json(err.message);
    }
}

const login = async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).send("Invalid Credentials");
        } else {
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                user.password,
            );

            if (!isValidPassword) {
                return res.status(400).send("Invalid Credentials");
            }

            console.log(user, process.env.JWT_SECRET);
            const token = jwtToken.sign({ _id: user._id , role : user.role}, process.env.JWT_SECRET, { expiresIn: '1800s' });
            console.log(token);
            return res.status(200).send(token);
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}

module.exports = { signup,login };