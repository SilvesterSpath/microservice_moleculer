import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';

async function startApp() {
  // Start services
  await UserService.start();
  await EmailService.start();
  await AuthService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call('user.createUser', {
      username: 'Moleculer',
      email: '<EMAIL>',
    });
    console.log('New user created:', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All users', users);
    // Simulate sending email
    const emailResult = await EmailService.call('email.sendEmail', {
      recipient: newUser.email,
      subject: 'Hello from Moleculer',
      content: 'This is a test email',
    });
    console.log(emailResult);
    // Simulate authentication
    const authResult = await AuthService.call('auth.authUser', {
      username: 'Moleculer',
      password: '<PASSWORD>',
    });
    console.log('Auth result', authResult);
  } catch (error) {
    console.log('Error', error);
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
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
