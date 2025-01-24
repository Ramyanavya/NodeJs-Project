const userData = require('../models/first');
const express = require("express");

// Add User
const addUser = async (req, res) => {
    const userDetails = req.body;
    console.log(userDetails);

    try {
        const newUser = new userData(userDetails);
        const result = await newUser.save();
        res.status(200).json({
            user: result,
            response: 'User added successfully'
        });
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({
            error: err.message || 'Server error while adding user'
        });
    }
};

// Get User (Static)
const getuser = (req, res) => {
    const user = {
        username: "aditya",
        userroll: "22A91A0511"
    };
    res.status(200).json({ 'userData': user });
};

// Get User by Roll Number
const getUserDataByRoll = async (req, res) => {
    const userRoll = req.params.rollnumber;


    try {
        const result = await userData.findOne({ "UserRoll": userRoll });
        res.status(201).json(result);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({
            error: err.message || 'Server error while fetching user data'
        });
    }
};

// Update User by ID
const updateUserByID = async (req, res) => {
    const userId = req.params.userId;
    console.log(req.body);

    try {
        const result = await userData.findByIdAndUpdate({ "_id": userId }, req.body, { new: true });
        res.status(200).json({ result: "User updated successfully", updatedUser: result });
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({
            error: err.message || 'Server error while updating user'
        });
    }
};

// Export Controller Functions
exports.adduser = addUser;
exports.getuser = getuser;
exports.getUserDataByRoll = getUserDataByRoll;
exports.updateUserByID = updateUserByID;
