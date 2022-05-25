import React, { useEffect, useState } from "react";
import styled from "https://esm.sh/styled-components@5.3.0";
import { css } from "https://esm.sh/@emotion/css@11.1.3"
import URLs from "../api-config.ts";
import { TITLE } from "./dashboard.styles.tsx";

type SensorData = {
  lightlevel: number;
  temperature: number;
  humidity: string;
  isWindowOpen: boolean;
};

const P = styled.p`
    font-size: 1.5em;
    color: blue;
    background-color: #da6c6c;
`;

const textStyle = css`
  font-size: 12px;
  color: #050;
`;

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
      <TITLE>Planthouse IoT</TITLE>
      <p style={{ color: "blue" }}>lightlevel: {state.lightlevel}</p>
      <P>temperature: {state.temperature}</P>
      <p className={textStyle}>humidity: {state.humidity}</p>
      <p>isWindowOpen: {state.isWindowOpen.toString()}</p>
    </>
  );
};
