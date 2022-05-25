import React, { useEffect, useState } from "react";
import { urls } from "./api-config";
import { SensorCard } from "./SensorCard";
import { ActuatorCard } from "./ActuatorCard";
import { STATUS_DISPLAY } from "./styles";

export const StatusDisplay = () => {
  const fetchSensorData = async () => {
    const res = await fetch(`${urls.server}${urls.sensorData}`);
    const j = await res.json();
    setState({
      lightlevel: j.userId,
      temperature: j.id,
      humidity: j.title,
      isWindowOpen: j.completed,
    });
  };

  const [state, setState] = useState({
    lightlevel: 0,
    temperature: 0,
    humidity: "0",
    isWindowOpen: true,
  });

  useEffect(() => {
    fetchSensorData();
    setInterval(async () => {
      fetchSensorData();
    }, 3000);
  }, []);

  return (
    <>
      <STATUS_DISPLAY>
        <SensorCard name={"lightlevel"} value={state.lightlevel} />
        <SensorCard name={"temperature"} value={state.temperature} />
        <SensorCard name={"humidity"} value={state.humidity} />
        <SensorCard name={"isWindowOpen"} value={state.isWindowOpen} />
      </STATUS_DISPLAY>
      <STATUS_DISPLAY>
        <ActuatorCard />
        <ActuatorCard />
        <ActuatorCard />
        <ActuatorCard />
      </STATUS_DISPLAY>
    </>
  );
};
