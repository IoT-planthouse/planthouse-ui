import { MessagingError } from "@azure/service-bus";
import React from "react";
import { MessageBody } from "../MessageTypes";
import { CARD, SENSOR_VALUE } from "../styles";

type Props = {
  sensorData: MessageBody;
};

export const SensorCard: React.FC<Props> = ({ sensorData }) => {
  const { typeID, data } = sensorData;
  return (
    <CARD>
      <p>{typeID}</p>
      {/* <img src={`${name}.svg`} alt={name} width="75" height="75" /> */}
      <SENSOR_VALUE>
        {data.value} {data.unit}
      </SENSOR_VALUE>
    </CARD>
  );
};
