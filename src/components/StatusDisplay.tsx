import React, { useEffect, useState } from "react";
import { SensorCard } from "./SensorCard";
import { ActuatorCard } from "./ActuatorCard";
import { CARD_TYPE, STATUS_DISPLAY } from "../styles";
import { subToSensors } from "../QueueReader";
import { ServiceBusMessage } from "@azure/service-bus";
import { TypeID, MessageBody } from "../MessageTypes";
import { ConnectionCard } from "./ConnectionCard";
import { CosmosClient } from "@azure/cosmos";

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

const heartBeatObject = {
  connected: false,
  heartBeatReceived: false,
};

export const StatusDisplay = () => {
  const [light, setLight] = useState<MessageBody>(defaultData);
  const [lightReceived, setLightReceived] = useState(heartBeatObject);
  const [temperature, setTemperature] = useState<MessageBody>(defaultData);
  const [temperatureReceived, setTemperatureReceived] = useState(
    heartBeatObject
  );
  const [humidity, setHumidity] = useState<MessageBody>(defaultData);
  const [humidityReceived, setHumidityReceived] = useState(heartBeatObject);
  const [co2, setCo2] = useState<MessageBody>(defaultData);
  const [co2Received, setCo2Received] = useState(heartBeatObject);
  const [lamp, setLamp] = useState<MessageBody>(defaultData);
  const [heater, setHeater] = useState<MessageBody>(defaultData);
  const [humidifier, setHumidifier] = useState<MessageBody>(defaultData);
  const [fan, setFan] = useState<MessageBody>(defaultData);
  const [connected, setConnected] = useState({
    connected: false,
    heartBeatReceived: false,
  });

  const messageHandler = async (message: ServiceBusMessage) => {
    console.log(message.body);
    setConnected({ connected: true, heartBeatReceived: true });
    switch (message.body.typeID) {
      case TypeID.light:
      case TypeID.lightSimulator:
        setLight(message.body);
        setLightReceived({ connected: true, heartBeatReceived: true });
        break;
      case TypeID.temperature:
      case TypeID.temperatureSimulator:
        setTemperature(message.body);
        setTemperatureReceived({ connected: true, heartBeatReceived: true });
        break;
      case TypeID.humidity:
      case TypeID.humiditySimulator:
        setHumidity(message.body);
        setHumidityReceived({ connected: true, heartBeatReceived: true });
        break;
      case TypeID.co2Simulator:
        setCo2(message.body);
        setCo2Received({ connected: true, heartBeatReceived: true });
        break;
      case TypeID.lamp:
      case TypeID.lampSimulator:
        setLamp(message.body);
        break;
      case TypeID.heater:
      case TypeID.heaterSimulator:
        setHeater(message.body);
        break;
      case TypeID.humidifier:
      case TypeID.humidifierSimulator:
        setHumidifier(message.body);
        break;
      case TypeID.fan:
      case TypeID.fanSimulator:
        setFan(message.body);
    }
  };

  useEffect(() => subToSensors(messageHandler), []);
  useEffect(() => {
    fetch(
      "https://smart-greenhouse-cloud-services.azurewebsites.net/api/read-from-database?code=W7qOp0zom2o0i_zDJNtURXSuvkyHVNS-ojTNqAwYnEh8AzFuiYfUAQ=="
    )
      .then((response) => response.json())
      .then((json) => {
        json.light && setLight(json.light);
        json.humidity && setHumidity(json.humidity);
        json.temperature && setTemperature(json.temperature);
        json.co2 && setCo2(json.co2);
        json.lamp && setLamp(json.lamp);
        json.humidifier && setHumidifier(json.humidifier);
        json.heater && setHeater(json.heater);
        json.fan && setFan(json.fan);
      });
  }, []);

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
      if (lightReceived.heartBeatReceived === false) {
        setLightReceived({ connected: false, heartBeatReceived: false });
      } else {
        setLightReceived({ connected: true, heartBeatReceived: false });
      }
      if (temperatureReceived.heartBeatReceived === false) {
        setTemperatureReceived({ connected: false, heartBeatReceived: false });
      } else {
        setTemperatureReceived({ connected: true, heartBeatReceived: false });
      }
      if (humidityReceived.heartBeatReceived === false) {
        setHumidityReceived({ connected: false, heartBeatReceived: false });
      } else {
        setHumidityReceived({ connected: true, heartBeatReceived: false });
      }
      if (co2Received.heartBeatReceived === false) {
        setCo2Received({ connected: false, heartBeatReceived: false });
      } else {
        setCo2Received({ connected: true, heartBeatReceived: false });
      }
    }, 30000);
    // return clearInterval(interval);
  }, []);

  return (
    <>
      <ConnectionCard connected={connected.connected} />
      <STATUS_DISPLAY>
        <CARD_TYPE>Sensors</CARD_TYPE>
        <SensorCard
          sensorData={light}
          connectionStatus={lightReceived.connected}
        />
        <SensorCard
          sensorData={temperature}
          connectionStatus={temperatureReceived.connected}
        />
        <SensorCard
          sensorData={humidity}
          connectionStatus={humidityReceived.connected}
        />
        <SensorCard sensorData={co2} connectionStatus={co2Received.connected} />
        {/* <SensorCard name={"isWindowOpen"} value={state.isWindowOpen} /> */}
      </STATUS_DISPLAY>
      <STATUS_DISPLAY>
        <CARD_TYPE>Actuators</CARD_TYPE>
        <SensorCard sensorData={lamp} />
        <SensorCard sensorData={heater} />
        <SensorCard sensorData={humidifier} />
        <SensorCard sensorData={fan} />
      </STATUS_DISPLAY>
    </>
  );
};
