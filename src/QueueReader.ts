import { delay, ServiceBusClient, ServiceBusMessage } from "@azure/service-bus";
import {
  messagingConnectionString,
  topicSensorData,
  topicActuatorState,
  subscriptionName,
} from "./azure.config";

export const subToSensors = (
  messageHandler: (message: any) => Promise<any>
) => {
  const sbClient = new ServiceBusClient(messagingConnectionString);
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
