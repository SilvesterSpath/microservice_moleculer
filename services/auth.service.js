import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

broker.createService({
  name: 'auth',
  actions: {
    async authUser(ctx) {
      const { username, password } = ctx.params;

      if (username === 'Moleculer' && password === '<PASSWORD>') {
        return {
          success: 'true',
          message: 'Welcome Moleculer',
        };
      } else {
        return {
          success: 'false',
          message: 'Wrong username or password',
        };
      }
    },
  },
});

export default broker;
