const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc    Get all users
// @route   GET /users
// @access  Private
const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()
})

// @desc    Create new user
// @route   POST /users
// @access  Private

const createNewUser = asyncHandler(async (req, res) => {

})

// @desc    Update a user
// @route   PATCH /users
// @access  Private

const updateUser = asyncHandler(async (req, res) => {

})

// @desc    Delete a user
// @route   DELETE /users
// @access  Private

const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}