import { PineconeClient } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  // Pinecone setup
  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: 'us-east1-gcp',
  })

  return client
}
