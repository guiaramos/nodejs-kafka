import { ITopicConfig } from 'kafkajs';
import { kafka } from './config';

function getTopics(): ITopicConfig[] {
  return [
    {
      topic: 'Users',
      numPartitions: 2,
    },
  ];
}

async function runTopic(): Promise<void> {
  try {
    const admin = kafka.admin();

    console.log('Connection.....');
    await admin.connect();
    console.log('Connected');

    const topics = getTopics();
    await admin.createTopics({
      topics,
    });

    console.log('Created Successfully');
    await admin.disconnect();
  } catch (error) {
    console.error('error: ', error);
  } finally {
    process.exit(0);
  }
}

runTopic();
