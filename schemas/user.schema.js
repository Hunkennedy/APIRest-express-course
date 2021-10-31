const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(2).max(30);
const lastName = joi.string().min(2).max(30);

const createUserSchema = joi.object({
    name:name.required(),
    lastname: lastName.required()
});

const updateUserSchema = joi.object({
    name: name,
    lastname: lastName
});

const getUserSchema = joi.object({
    id:id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
