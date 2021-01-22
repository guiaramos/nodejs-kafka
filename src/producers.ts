import { kafka } from './config';

const msg = process.argv[2];

export async function runProducers(): Promise<void> {
  try {
    const producer = kafka.producer();

    console.log('Connection.....');
    await producer.connect();
    console.log('Connected');

    const partition = msg[0] < 'N' ? 0 : 1;

    const result = await producer.send({
      topic: 'Users',
      messages: [{ value: msg, partition }],
    });

    console.log('Send Successfully ', JSON.stringify(result));
    await producer.disconnect();
  } catch (error) {
    console.error('error: ', error);
  } finally {
    process.exit(0);
  }
}

runProducers();
