import { Client } from "@elastic/elasticsearch";

export default function createElasticClient(options) {
  return new Client(options)
}
