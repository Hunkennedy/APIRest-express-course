const joi = require('joi');


const id = joi.string().uuid();
const name = joi.string().min(2).max(30);

const createCategorySchema = joi.object({
    name:name.required()
});

const updateCategorySchema = joi.object({
    name:name
});

const getCategorySchema = joi.object({
    id:id.required()
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema}
