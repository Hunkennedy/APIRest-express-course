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

    get() {
        return this.categories;
    }
    getCategory(id) {
        return this.categories.find(item => item.id === id);
    }

    create() {

    }

    update() {

    }

    delete() {

    }
}

module.exports = CategoryService;