import { client, parseData } from './client';

export async function getRequests() {
  const response = await client.from('requests').select('*');

  return parseData(response);
}

export async function insertRequest(request) {
  const response = await client.from('requests').insert(request).single();
  return parseData(response);
}