import { delay, ServiceBusClient, ServiceBusMessage } from "@azure/service-bus";
import {
  connectionString,
  topicSensorData,
  topicActuatorState,
  subscriptionName,
} from "./messaging.config";

export const subToSensors = (
  messageHandler: (message: any) => Promise<any>
) => {
  const sbClient = new ServiceBusClient(connectionString);
  const sensorReciever = sbClient.createReceiver(
    topicSensorData,
    subscriptionName
  );
  const actuatorReciever = sbClient.createReceiver(
    topicActuatorState,
    subscriptionName
  );

  const myMessageHandler = async (message: any) => {
    console.log(message)
  }

  const myErrorHandler = async (error: any) => {
    console.log(error);
  };

  sensorReciever.subscribe({
    processMessage: messageHandler,
    processError: myErrorHandler,
  });

  actuatorReciever.subscribe({
    processMessage: messageHandler,
    processError: myErrorHandler,
  })
};
