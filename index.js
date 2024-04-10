import { ServiceBroker } from 'moleculer';

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

startApp();
