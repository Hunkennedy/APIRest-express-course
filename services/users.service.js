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
                name: faker.name.findName(),
                lastname: faker.name.lastName()
            });
        }
    }

    async find() {
        return this.users;
    }

    async findUser(id) {
        return this.users.find(item => item.id === id);
    }

    async create(data) {
      const newUser = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.users.push(newUser);
      return newUser;
    }

    async update(id, changes) {
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('user not found');
      }

      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...changes
      }
      return this.users[index];
    }

    async delete(id) {
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('user not found');
      }
      this.users.splice(index,1);
      return {message:'user deleted'}
    }

}

module.exports = UsersService;
