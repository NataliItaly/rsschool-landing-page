export default async function fetchData(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('There are no available products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a fetch data error :', error);
  }
}
