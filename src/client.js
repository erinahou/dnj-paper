import { createClient } from "@sanity/client"

const client = createClient({
  projectId: 'r03s0o4y',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-05-17',
});

export default client
