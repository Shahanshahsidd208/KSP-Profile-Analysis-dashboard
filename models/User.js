const mongoose = require("mongoose");  

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        minlength: 3,
        maxlength: 50,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 3
    },
    districtName: String,
    unitName: String,
    firNo: String,
    year: String,
    month: String,
    firDate: String,
    firType: String,
    firStage: String,
    crimeGroupName: String,
    ioName: String,
    firId: String,
    unitId: String,
    designation: String,
    policeId: String,
    policePassword: String,
    underOfficer: String,
    topCase1: String,
    topCase2: String,
    topCase3: String,
    topCase1no: String,
    topCase2no: String,
    topCase3no: String,
    others: String,
    pendingTrial: String,
    underInvestigation: String,
    convicted: String,
    undetected: String,
    jan: String,
    feb: String,
    march: String,
    april: String,
    may: String,
    jun: String,
    jul: String,
    aug: String,
    sep: String,
    oct: String,
    nov: String,
    dec: String,
});

UserSchema.methods.comparePassword = function(candidatePassword) {
    return this.password === candidatePassword;
};


module.exports = mongoose.model("User", UserSchema);
