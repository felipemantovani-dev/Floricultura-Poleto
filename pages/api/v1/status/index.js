function status(request, response) {
  response.status(200).json({ chave: "Im learning" });
}

export default status;
