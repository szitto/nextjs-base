export default async function handler(req, res) {
  try {
    const response = await fetch("http://localhost:3000/files/test.json");

    if (response.status === 200) {
      const jsonResponse = await response.json();
      return res.status(200).json(jsonResponse);
    }

    return res.status(response.status).send(response.statusText);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
