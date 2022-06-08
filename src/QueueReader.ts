import { delay, ServiceBusClient, ServiceBusMessage } from "@azure/service-bus";

export const subToSensors = (
  messageHandler: (message: any) => Promise<any>
) => {
  const connectionString =
    "Endpoint=sb://greenhouse-iot.servicebus.windows.net/;SharedAccessKeyName=smart-greenhouse;SharedAccessKey=wq9l2WnId9+TQIiNsoH81x4Gn9k4sRsjCtC/H4AqyhA=";
  const topicName = "sensor-data";
  const subscriptionName = "UISubscription";

  const sbClient = new ServiceBusClient(connectionString);
  const receiver = sbClient.createReceiver(topicName, subscriptionName);

  const myErrorHandler = async (error: any) => {
    console.log(error);
  };

  receiver.subscribe({
    processMessage: messageHandler,
    processError: myErrorHandler,
  });
};
