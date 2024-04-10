import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const users = [];

broker.createService({
  name: 'user',
  actions: {
    async createUser(ctx) {
      const { username, email } = ctx.params;
      const id = generateId();
      const newUser = { id, username, email };
      users.push(newUser);
      return users;
    },

    async getUsers() {
      return users;
    },
  },
});

export default broker;
