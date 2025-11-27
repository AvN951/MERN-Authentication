import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.json({ success: false, message: "Missing Details" });
    }
    
    try {
        const existingUser = await userModel.findone({email});
        
        if(existingUser){
            res.json({ success: false, message: "User Already Exists" });
        }

        const hashedpassword = await bcrypt.hash(password,10);
        const user = new userModel({ name, email, password: hashedpassword });
        await user.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.cookie('token',token,{
            httpOnly : true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7*24*60*60*1000
        });

        res.json({ success: true, message: "User Registered Successfully" });
    } 
    catch (error) {
        res.json({ success: false, message: error.message });
    }
};
