import { client, parseData } from './client';

export async function getRequests() {
  const response = await client
    .from('requests').select('*');
  return parseData(response);
}

export async function insertRequest(request) {
  const response = await client
    .from('requests')
    .insert(request);
  return parseData(response);
}

export async function deleteRequest(id) {
  const response = await client
    .from('requests')
    .delete()
    .match({ id });
  return parseData(response);
}