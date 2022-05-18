import { client } from './client';

export async function getRequests() {
  const request = await client.from('requests').select('*');
  return request;
}