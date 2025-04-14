import { Request, Response } from 'express';
import { PersonagemService } from '../services/PersonagemService';
import { ItemMagico } from '../type/ItemMagico';

const personagemService = new PersonagemService();

export class PersonagemController {
    static criarPersonagem(req: Request, res: Response) {
        try {
            const dados = req.body;
    
            if (Array.isArray(dados)) {
                const personagens = dados.map(({ nome, nomeAventureiro, classe, level, forcaBase, defesaBase }) =>
                    personagemService.criarPersonagem(nome, nomeAventureiro, classe, level, forcaBase, defesaBase)
                );
                return res.status(201).json(personagens);
            } else {
                const { nome, nomeAventureiro, classe, level, forcaBase, defesaBase } = dados;
                const personagem = personagemService.criarPersonagem(nome, nomeAventureiro, classe, level, forcaBase, defesaBase);
                return res.status(201).json(personagem);
            }
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
    

    static listarPersonagens(req: Request, res: Response) {
        return res.json(personagemService.listarPersonagens());
    }

    static buscarPersonagemPorId(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const personagem = personagemService.buscarPersonagemPorId(id);
        if (!personagem) {
            return res.status(404).json({ error: "Personagem não encontrado" });
        }
        return res.json(personagem);
    }

    static atualizarNomeAventureiro(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { nomeAventureiro } = req.body;
            const personagem = personagemService.atualizarNomeAventureiro(id, nomeAventureiro);
            if (!personagem) {
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            return res.json(personagem);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    static removerPersonagem(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const sucesso = personagemService.removerPersonagem(id);
        if (!sucesso) {
            return res.status(404).json({ error: "Personagem não encontrado" });
        }
        return res.json({ message: "Personagem removido com sucesso" });
    }

    // Endpoints para manipulação de Itens do Personagem
    static adicionarItemAoPersonagem(req: Request, res: Response) {
        try {
            const personagemId = parseInt(req.params.id);
            const item: ItemMagico = req.body;
            const personagem = personagemService.adicionarItemAoPersonagem(personagemId, item);
            return res.json(personagem);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    static listarItensDoPersonagem(req: Request, res: Response) {
        try {
            const personagemId = parseInt(req.params.id);
            const itens = personagemService.listarItensDoPersonagem(personagemId);
            if (!itens) {
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            return res.json(itens);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    static removerItemDoPersonagem(req: Request, res: Response) {
        try {
            const personagemId = parseInt(req.params.id);
            const itemId = parseInt(req.params.itemId);
            const personagem = personagemService.removerItemDoPersonagem(personagemId, itemId);
            return res.json(personagem);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }

    static buscarAmuletoDoPersonagem(req: Request, res: Response) {
        try {
            const personagemId = parseInt(req.params.id);
            const amuleto = personagemService.buscarAmuletoDoPersonagem(personagemId);
            if (!amuleto) {
                return res.status(404).json({ error: "Amuleto não encontrado" });
            }
            return res.json(amuleto);
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}
