import { Kafka, KafkaConfig } from 'kafkajs';

function getKafkaConfig(): KafkaConfig {
  return {
    clientId: 'myapp',
    brokers: ['localhost:9092'],
  };
}

const config = getKafkaConfig();
export const kafka = new Kafka(config);
