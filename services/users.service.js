const faker = require('faker');
const boom = require('@hapi/boom');

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
                lastname: faker.name.lastName(),
                isBlock: faker.datatype.boolean()
            });
        }
    }

    async find() {
        return this.users;
    }

    async findUser(id) {
        const user = this.users.find(item => item.id === id);
        if (!user) {
            throw boom.notFound('user not found');
        }
        if(!user.isBlock) {
            throw boom.conflict('not allowed');
        }
        return user;
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
        throw boom.notFound('user not found');
      }

      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...changes
      }
      return user;
    }

    async delete(id) {
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1) {
        throw boom.notFound('user not found');
      }
      this.users.splice(index,1);
      return {message:'user deleted'}
    }

}

module.exports = UsersService;
