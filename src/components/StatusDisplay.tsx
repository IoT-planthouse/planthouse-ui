import React, { useEffect, useState } from "react";
import { SensorCard } from "./SensorCard";
import { ActuatorCard } from "./ActuatorCard";
import { CARD_TYPE, STATUS_DISPLAY } from "../styles";
import { subToSensors } from "../QueueReader";
import { ServiceBusMessage } from "@azure/service-bus";
import { TypeID, MessageBody } from "../MessageTypes";
import { ConnectionCard } from "./ConnectionCard";

const defaultData: MessageBody = {
  typeID: TypeID.nothingReceivedYet,
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
  const [connected, setConnected] = useState({
    connected: false,
    heartBeatReceived: false,
  });

  const messageHandler = async (message: ServiceBusMessage) => {
    setConnected({ connected: true, heartBeatReceived: true });
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

  /**
   * during the runtime of the application proof if you are receiving messages every 30 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (connected.heartBeatReceived === false) {
        setConnected({ connected: false, heartBeatReceived: false });
      } else {
        setConnected({ connected: true, heartBeatReceived: false });
      }
    }, 30000);
    return clearInterval(interval);
  }, []);

  return (
    <>
      <ConnectionCard connected={connected.connected} />
      <STATUS_DISPLAY>
        <CARD_TYPE>Sensors</CARD_TYPE>
        <SensorCard sensorData={light} />
        <SensorCard sensorData={temperature} />
        <SensorCard sensorData={humidity} />
        {/* <SensorCard name={"isWindowOpen"} value={state.isWindowOpen} /> */}
      </STATUS_DISPLAY>
      <STATUS_DISPLAY>
        <CARD_TYPE>Actuators</CARD_TYPE>
        <SensorCard sensorData={lamp} />
        <SensorCard sensorData={heater} />
        <SensorCard sensorData={humidifier} />
        {/* <SensorCard /> */}
      </STATUS_DISPLAY>
    </>
  );
};
