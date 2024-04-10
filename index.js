import { ServiceBroker } from 'moleculer';

console.log(ServiceBroker);

const broker = new ServiceBroker();
console.log(broker);

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
