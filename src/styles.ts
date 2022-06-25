import styled from "styled-components";

export const APP = styled.div`
  padding: 40px;
`;

export const LOGO = styled.img`
  margin-right: 30px;
  margin-left: 20px;
`;

export const APPLICATION_NAME = styled.h1`
  display: inline;
  color: ${(p) => p.theme.primary};
`;

export const STATUS_DISPLAY = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-flow: row wrap;
  padding-left: 40px;
  padding-right: 40px;
`;

export const CARD = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  padding: 20px;
  padding-bottom: 40px;
  border: 3px solid ${(p) => p.theme.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 230px;
  font-size: 20px;
`;

export const SENSOR_VALUE = styled.p`
  color: ${(p) => p.theme.primary};
  font-size: 40px;
`;

export const CONNECTION_CARD = styled.div`
  /* display: inline-block; */
  border: 3px solid ${(p) => p.theme.secondary};
  border-radius: 3px;
  float: right;
  /* margin: 10px; */
  padding: 10px;
`;

type Props = { connected: boolean };
export const CONNECTION_ICON = styled.div`
  border-radius: 50%;
  background-color: red;
  background-color: ${(p: Props) => (p.connected ? "green" : "red")};
  height: 15px;
  width: 15px;
  display: inline-block;
  margin-right: 10px
`;

export const CARD_TYPE = styled.h1`
  color: ${(p) => p.theme.secondary};
  width: 100%;
  margin-bottom: 20px;
`