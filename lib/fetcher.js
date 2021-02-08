export default async function Fetcher(...args) {
  {'comment '}
  const response = await fetch(...args);
 {'comment '}
  return response.json();
}
