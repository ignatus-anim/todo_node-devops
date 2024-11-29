import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../models/index.js';

const { User } = db;


// Register a new user
export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        // check if user already exists
        const existingUser = await User.findOne({where: {email: email}});
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create new user
        const user = await User.create({name, email, password: hashedPassword});
        // generate JWT
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        res.status(201).json({message: 'User created', token});
    } catch(err){res.status(500).json({message:"Registration Failed", err})}
    };

// Login a user
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        // check if user exists
        const user = await User.findOne({where: {email: email}});
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        // check password
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({message: 'Invalid password'});
        }
        // generate JWT
        const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message: 'Login successful', token});
    } catch(err){res.status(500).json({message: err.message})}
};