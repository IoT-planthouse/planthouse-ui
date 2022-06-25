import React from "react";
import { CONNECTION_CARD, CONNECTION_ICON } from "../styles";

type Props = { connected: boolean };
export const ConnectionCard: React.FC<Props> = ({ connected }) => {
  return (
    <CONNECTION_CARD>
      <CONNECTION_ICON connected={connected} />
      Device {connected || <>not</>} connected
    </CONNECTION_CARD>
  );
};
