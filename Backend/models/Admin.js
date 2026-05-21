const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
     
    username:{
        type: String,
        required: [true, "Username is Required"]
    },
    email:{
        type: String,
        required: [true, "Email is Required"]
    },
      Password:{
        type: Password,
        minlength: [6, "Password must be 6 char"],
        required: [true, "Password is Required"]
    },
},{timestamps}

);


//hooks
adminSchema.pre("save", async function (next) {
    if(!this.isModified("Password")) return next();
     this.Password = await bcrypt.hash(this.Password,10);
});

adminSchema.methods.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.Password)
};

const Admin = mongoose.model ( "Admin",adminSchema)

module.exports = Admin;