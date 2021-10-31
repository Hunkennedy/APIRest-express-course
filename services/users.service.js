const faker = require('faker');

class UsersService {

    constructor() {
        this.users = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                lastname: faker.name.lastName()
            });
        }
    }

    find() {
        return this.users;
    }

    findUser(id) {
        return this.users.find(item => item.id === id);
    }

    create() {

    }

    update() {

    }

    delete() {

    }

}

module.exports = UsersService;