export default function handler(req, res) {
  const response = {
    web_info: {
      _client: "𝐅𝐑𝐄𝐄 𝐏𝐀𝐍𝐄𝑳",
      license: "Qp5KSGTquetnUkjX6UVBAURH8hTkZuLM",
      version: "1.0.0"
    },
    web__dev: {
      author: "@only_possible"
    }
  };

  res.status(200).json(response);
}
