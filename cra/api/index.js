export default function index(req, res) {
  return res.status(200).json({ foo: 'bar', api: process.env.API_URL });
}
