import { MessagingError } from "@azure/service-bus";
import React from "react";
import { MessageBody, TypeID } from "../MessageTypes";
import { CARD, SENSOR_VALUE, OUTDATED } from "../styles";

type Props = {
  sensorData: MessageBody;
  connectionStatus?: boolean;
};

export const SensorCard: React.FC<Props> = ({
  sensorData,
  connectionStatus,
}) => {
  const { typeID, data } = sensorData;
  return (
    <CARD>
      {typeID !== TypeID.nothingReceivedYet && connectionStatus === false ? <OUTDATED /> : <p>{typeID}</p>}
      <img src={`${typeID}.svg`} alt={typeID} width="75" height="75" />
      <SENSOR_VALUE>
        {data.value} {data.unit}
      </SENSOR_VALUE>
    </CARD>
  );
};
