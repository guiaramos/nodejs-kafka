import { kafka } from './config';

export async function runProducers(): Promise<void> {
  try {
    const consumer = kafka.consumer({ groupId: 'test' });

    console.log('Connection.....');
    await consumer.connect();
    console.log('Connected');

    await consumer.subscribe({
      topic: 'Users',
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ message, partition, topic }) => {
        console.log(`received message: ${message.value} on partition: ${partition} and from topic ${topic}`);
      },
    });
  } catch (error) {
    console.error('error: ', error);
  }
}

runProducers();
