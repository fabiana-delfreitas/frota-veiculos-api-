import {route }from  veiculoRoute

import { veiculoService } from "../services/veiculo.service.js";


const veiculoRoute = Router();

veiculoRoute.get("/" , async (req, res) => {
const veiculos = await veiculoService.getAll();
return res.json(veiculos);
});

veiculoRoute.post("/", async (req, res) => {
const veiculo = await veiculoService.create(req.body);
return res.status(201).json(veiculo);
});
