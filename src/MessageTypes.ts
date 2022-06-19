export enum TypeID {
  light = "Light Sensor",
  humidity = "Humidity Sensor",
  temperature = "Temperature Sensor",
  lamp = "Lamp",
  heater = "Heater",
  humidifier = "Humidifier",
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
