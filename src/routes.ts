import { Router } from 'express';
import { PersonagemController } from './controller/PersonagemController';
import { ItemMagicoController } from './controller/ItemMagicoController';

const router = Router();

// Rotas de Personagens
router.post('/personagens', PersonagemController.criarPersonagem);
router.get('/personagens', PersonagemController.listarPersonagens);
router.get('/personagens/:id', PersonagemController.buscarPersonagemPorId);
router.patch('/personagens/:id/aventureiro', PersonagemController.atualizarNomeAventureiro);
router.delete('/personagens/:id', PersonagemController.removerPersonagem);

// Rotas para manipular Itens em Personagem
router.post('/personagens/:id/itens', PersonagemController.adicionarItemAoPersonagem);
router.get('/personagens/:id/itens', PersonagemController.listarItensDoPersonagem);
router.delete('/personagens/:id/itens/:itemId', PersonagemController.removerItemDoPersonagem);
router.get('/personagens/:id/itens/amulet', PersonagemController.buscarAmuletoDoPersonagem);

// Rotas de Itens Mágicos
router.post('/itens', ItemMagicoController.criarItem);
router.get('/itens', ItemMagicoController.listarItens);
router.get('/itens/:id', ItemMagicoController.buscarItemPorId);

export default router;
