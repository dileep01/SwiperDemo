export const BASE_URL = 'https://picsum.photos';

export async function get() {
  return await fetch(`${BASE_URL}/list`, {});
}
