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
`;

export const CARD = styled.div`
  margin: 40px;
  padding: 20px;
  padding-bottom: 40px;
  border: 3px solid ${(p) => p.theme.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 200px;
  font-size: 20px;
`;

export const SENSOR_VALUE = styled.p`
  color: ${(p) => p.theme.primary};
  font-size: 40px;
`;
