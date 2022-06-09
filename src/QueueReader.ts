import { delay, ServiceBusClient, ServiceBusMessage } from "@azure/service-bus";
import {
  connectionString,
  topicSensorData,
  subscriptionName,
} from "./messaging.config";

export const subToSensors = (
  messageHandler: (message: any) => Promise<any>
) => {
  const sbClient = new ServiceBusClient(connectionString);
  const receiver = sbClient.createReceiver(topicSensorData, subscriptionName);

  const myErrorHandler = async (error: any) => {
    console.log(error);
  };

  receiver.subscribe({
    processMessage: messageHandler,
    processError: myErrorHandler,
  });
};
