import React, { useEffect, useState } from "react";
import { SensorCard } from "./SensorCard";
import { ActuatorCard } from "./ActuatorCard";
import { STATUS_DISPLAY } from "../styles";
import { subToSensors } from "../QueueReader";
import { ServiceBusMessage } from "@azure/service-bus";
import { TypeID, MessageBody } from "../MessageTypes";

const defaultData: MessageBody = {
  typeID: TypeID.light,
  instanceID: "",
  location: "",
  timestamp: "",
  data: {
    value: 0,
    unit: "",
  },
};

export const StatusDisplay = () => {
  const [light, setLight] = useState<MessageBody>(defaultData);
  const [temperature, setTemperature] = useState<MessageBody>(defaultData);
  const [humidity, setHumidity] = useState<MessageBody>(defaultData);
  const [lamp, setLamp] = useState<MessageBody>(defaultData);
  const [heater, setHeater] = useState<MessageBody>(defaultData);
  const [humidifier, setHumidifier] = useState<MessageBody>(defaultData);

  const messageHandler = async (message: ServiceBusMessage) => {
    switch (message.body.typeID) {
      case TypeID.light:
        setLight(message.body);
        break;
      case TypeID.temperature:
        setTemperature(message.body);
        break;
      case TypeID.humidity:
        setHumidity(message.body);
        break;
      case TypeID.lamp:
        setLamp(message.body);
        break;
      case TypeID.heater:
        setHeater(message.body);
        break;
      case TypeID.humidifier:
        setHumidifier(message.body);
        break;
    }
  };

  useEffect(() => subToSensors(messageHandler), []);

  return (
    <>
      <STATUS_DISPLAY>
        <SensorCard sensorData={light} />
        <SensorCard sensorData={temperature} />
        <SensorCard sensorData={humidity} />
        {/* <SensorCard name={"isWindowOpen"} value={state.isWindowOpen} /> */}
      </STATUS_DISPLAY>
      <STATUS_DISPLAY>
        <SensorCard sensorData={lamp}/>
        <SensorCard sensorData={heater}/>
        <SensorCard sensorData={humidifier}/>
        {/* <SensorCard /> */}
      </STATUS_DISPLAY>
    </>
  );
};
