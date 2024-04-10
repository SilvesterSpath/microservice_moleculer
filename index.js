import UserService from './services/user.service.js';

async function startApp() {
  // Start services
  await UserService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call('user.createUser', {
      username: 'Moleculer',
      email: '<EMAIL>',
    });
    console.log('New user created:', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All users', users);
  } catch (error) {
    console.log('Error', error);
  } finally {
    await UserService.stop();
  }
}

startApp();

/* import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

// Greeter Service
broker.createService({
  name: 'greeter',
  actions: {
    hello(ctx) {
      return `Hello ${ctx.params.name}`;
    },
  },
});

async function startApp() {
  await broker.start();
  const res = await broker.call('greeter.hello', { name: 'Moleculer' });
  console.log(res);
  broker.stop();
}

startApp(); */
