export enum TypeID {
  light = "Light Sensor",
  lightSimulator = "light-virtual",
  humidity = "Humidity Sensor",
  humiditySimulator = "humidity-virtual",
  temperature = "Temperature Sensor",
  temperatureSimulator = "temperature-virtual",
  co2Simulator = "co2-virtual",
  lamp = "Lamp",
  lampSimulator = "lamp-virtual",
  heater = "Heater",
  heaterSimulator = "heater-virtual",
  humidifier = "Humidifier",
  humidifierSimulator = "humidifier-virtual",
  nothingReceivedYet = "No Data",
}

export type MessageBody = {
  typeID: TypeID;
  instanceID: string;
  location: string;
  timestamp: string;
  data: {
    value: number;
    unit?: string;
  };
};
