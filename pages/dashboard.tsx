import React, { useEffect, useState } from "react";
import URLs from "../api-config.ts";

type SensorData = {
  lightlevel: number;
  temperature: number;
  humidity: string;
  isWindowOpen: boolean;
};

export const Dashboard = () => {
  const fetchSensorData = async () => {
    const res = await fetch(`${URLs.server}${URLs.sensorData}`);
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
      <h1>Planthouse IoT</h1>
      <p>lightlevel: {state.lightlevel}</p>
      <p>temperature: {state.temperature}</p>
      <p>humidity: {state.humidity}</p>
      <p>isWindowOpen: {state.isWindowOpen.toString()}</p>
    </>
  );
};
