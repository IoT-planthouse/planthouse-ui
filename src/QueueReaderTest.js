const {
  delay,
  ServiceBusClient,
  ServiceBusMessage,
} = require("@azure/service-bus");


const connectionString =
  "Endpoint=sb://greenhouse-iot.servicebus.windows.net/;SharedAccessKeyName=smart-greenhouse;SharedAccessKey=wq9l2WnId9+TQIiNsoH81x4Gn9k4sRsjCtC/H4AqyhA=";
const topicName = "sensor-data";
const subscriptionName = "UISubscription";

const sbClient = new ServiceBusClient(connectionString);
const receiver = sbClient.createReceiver(topicName, subscriptionName);

const myMessageHandler = async (messageReceived) => {
  console.log(messageReceived.body);
};

const myErrorHandler = async (error) => {
  console.log(error);
};

receiver.subscribe({
  processMessage: myMessageHandler,
  processError: myErrorHandler,
});
