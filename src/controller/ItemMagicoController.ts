import { Request, Response } from 'express';
import { ItemMagicoService } from '../services/ItemMagicoService';

const itemMagicoService = new ItemMagicoService();

export class ItemMagicoController {
  static criarItem(req: Request, res: Response) {
    try {
        const dados = req.body;

        if (Array.isArray(dados)) {
            const itens = dados.map(({ nome, tipo, forca, defesa }) =>
                itemMagicoService.criarItem(nome, tipo, forca, defesa)
            );
            return res.status(201).json(itens);
        } else {
            const { nome, tipo, forca, defesa } = dados;
            const item = itemMagicoService.criarItem(nome, tipo, forca, defesa);
            return res.status(201).json(item);
        }
    } catch (err: any) {
        return res.status(400).json({ error: err.message });
    }
}


  static listarItens(req: Request, res: Response) {
    return res.json(itemMagicoService.listarItens());
  }

  static buscarItemPorId(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const item = itemMagicoService.buscarItemPorId(id);
    if (!item) {
      return res.status(404).json({ error: "Item não encontrado" });
    }
    return res.json(item);
  }
}
