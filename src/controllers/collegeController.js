const collegeModel = require("../models/collegeModel.js");
const internModel = require("../models/internModel.js");
const validator = require("../validator/validator.js");

const createCollege = async function (req, res) {
    try {
        const { name, fullName, logoLink } = req.body;
        const data = { name, fullName, logoLink }
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({ status: false, msg: "no content in the document, please provide college details" });
        }
        if (name && fullName && logoLink) {
            if (!(validator.isValidCharacterLimit2to8(name) && validator.isValid(name))) {
                return res.status(400).send({ status: false, message: "please provide your valid college name, name should be in lower case, e.g: iit" })
            }
            const checkCollege = await collegeModel.findOne({ name: name })
            if (checkCollege) {
                return res.status(400).send({ status: false, message: `college ${checkCollege.name} is already present` })
            }
            if (!(validator.isValid(fullName) && validator.isValidCharacterLimit2to100(fullName))) {
                return res.status(400).send({ status: false, message: "please provide your valid college fullname" })
            }

            if (!(validator.isValid(logoLink) && validator.isValidUrl(logoLink))) {
                return res.status(400).send({ status: false, message: "please provide a valid link e.g: https://www.example.com or https://example.com " })
            }
            const savedData = await collegeModel.create(data);
            res.status(201).send({ status: true, data: savedData })
        }
        else {
            res.status(400).send({ status: false, message: "Invalid request, please provide college name,fullName and logoLink" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, errorName: error.name, msg: error.message });
    }
}



const getCollegeData = async function (req, res) {
    try {
        const collegeName = req.query.collegeName
        if (collegeName) {
            const collegeData = await collegeModel.findOne({ $or:[{name: collegeName},{fullName:collegeName}]})
            if (!collegeData) {
                return res.status(404).send({ status: false, message: `college name ${collegeName} not found`})
            }
            const internData = await internModel.find({ collegeId: collegeData._id }).select({ _id: 1, name: 1, email: 1, mobile: 1 })
            if (Object.keys(internData).length == 0) {
                return res.status(404).send({ status: false, message: "intern Data not found" })
            }
            const collegeDetail = { name: collegeData.name, fullName: collegeData.fullName, logoLink: collegeData.logoLink, interns: internData }
            res.status(200).send({ status: true, data: collegeDetail })
        }
        else {
            res.status(400).send({ status: false, message: "please enter valid data" })
        }
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.createCollege = createCollege
module.exports.getCollegeData = getCollegeData


