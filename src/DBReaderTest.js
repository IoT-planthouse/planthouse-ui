import { CosmosClient } from "@azure/cosmos";
// import {
//   dbConnectionString,
//   dbId,
//   dbSensorContainerId,
//   dbActuatorContainerId,
// } from "./azure.config";

const dbConnectionString =
  "AccountEndpoint=https://smart-greenhouse-db.documents.azure.com:443/;AccountKey=oKq9BcX41G9I9I1kSmFhhhNvcLKHBqDpuSvcJfEbWgV9Fpvfn6iykiBg3K8eY2gJeoh6XcLF2iyIP9yiryrdBA==;";
const dbId = "GreenhouseDB";
const dbSensorContainerId = "SensorData";
const dbActuatorContainerId = "SystemState";

export async function readData() {
  const client = new CosmosClient(dbConnectionString);
  const database = client.database(dbId);
  const sensorContainer = database.container(dbSensorContainerId);
  const actuatorContainer = database.container(dbActuatorContainerId);
  await sensorContainer.items.query("SELECT top 1 c.typeID, c.instanceID, c.location, c.timestapmp, c.data FROM c WHERE c.typeID = 'Light Sensor' ORDER BY c._ts DESC").fetchAll();
  console.log(content);
}

readData();