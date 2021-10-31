const faker = require('faker');


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
                name: faker.commerce.productAdjective()
            });
        }
    }

    async get() {
        return this.categories;
    }
    async getCategory(id) {
        return this.categories.find(item => item.id === id);
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
        throw new Error('Product not found');
      }
      const category = this.categories[index];
      this.categories[index] = {
        ...category,
        ...changes
      };
      return this.categories[index];
    }

    async delete(id) {
      const index = this.products.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('Product not found');
      }
      this.categories.splice(index, 1);
      return {message:'deleted'}
    }
}

module.exports = CategoryService;
