import 



clienteRoute.get("/" , async (req, res) => {
const clientes = await clienteService.getAll();
return res.json(clientes);
});
clienteRoute.post("/", async (req, res) => {
const cliente = await clienteService.create(req. body);
return res.satatus(201).json(cliente);
})
