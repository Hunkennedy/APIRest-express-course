const faker = require('faker');
const boom = require('@hapi/boom');


class CategoryService {


    constructor() {
        this.categories = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.categories.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productAdjective(),
                isBlock: faker.datatype.boolean()
            });
        }
    }

    async get() {
        return this.categories;
    }
    async getCategory(id) {
        const category = this.categories.find(item => item.id === id);
        if (category == -1) {
            throw boom.notFound('category not found');
        }
        if(!category.isBlock) {
            throw boom.conflict('not allowed');
        }
        return category;
    }

    async create(data) {
      const newCategory = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.categories.push(newCategory);
      return newCategory;
    }

    async update(id, changes) {
      const index = this.products.findIndex(item => item.id === id);
      if (index === -1) {
        throw boom.notFound('category not found');
      }
      const category = this.categories[index];
      this.categories[index] = {
        ...category,
        ...changes
      };
      return category;
    }

    async delete(id) {
      const index = this.products.findIndex(item => item.id === id);
      if (index === -1) {
        throw boom.notFound('category not found');
      }
      this.categories.splice(index, 1);
      return {message:'deleted'}
    }
}

module.exports = CategoryService;
