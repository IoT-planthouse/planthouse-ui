import { CARD, SENSOR_VALUE } from "./styles";

type Props = {
  name: string;
  value: number | boolean | string;
};

export const ActuatorCard: React.FC = () => {
  return (
    <CARD>
      <p>{"name"}</p>
        {/* <img src={`${name}.svg`} alt={name} width="75" height="75" /> */}
      <SENSOR_VALUE>{"value.toString()"}</SENSOR_VALUE>
    </CARD>
  );
};
