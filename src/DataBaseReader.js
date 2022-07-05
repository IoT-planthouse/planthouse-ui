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
  const content = await sensorContainer.items.query("SELECT c._ts FROM c LIMIT 1").fetchAll();
  // const content = await sensorContainer.items.query("SELECT _ts FROM c WHERE _ts = (SELECT MAX(_ts) FROM c)").fetchAll();
  // const content = await sensorContainer.items.query("SELECT * FROM c ORDER BY c._ts DESC LIMIT 1").fetchAll();
  console.log(content);
}

readData();
