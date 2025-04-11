import { Personagem } from '../type/Personagem';
import { criarPersonagem } from '../schema/Personagem.Schema';
import { ItemMagico } from '../type/ItemMagico';

export class PersonagemService {
  private personagens: Personagem[] = [];

  // CRUD de Personagem
  criarPersonagem(
    nome: string,
    nomeAventureiro: string,
    classe: Personagem['classe'],
    level: number,
    forcaBase: number,
    defesaBase: number
  ): Personagem {
    const novoPersonagem = criarPersonagem(nome, nomeAventureiro, classe, level, forcaBase, defesaBase);
    this.personagens.push(novoPersonagem);
    return novoPersonagem;
  }

  listarPersonagens(): Personagem[] {
    return this.personagens;
  }

  buscarPersonagemPorId(id: number): Personagem | undefined {
    return this.personagens.find(p => p.id === id);
  }

  atualizarNomeAventureiro(id: number, novoNomeAventureiro: string): Personagem | undefined {
    const personagem = this.buscarPersonagemPorId(id);
    if (personagem) {
      personagem.nomeAventureiro = novoNomeAventureiro;
    }
    return personagem;
  }

  removerPersonagem(id: number): boolean {
    const indice = this.personagens.findIndex(p => p.id === id);
    if (indice !== -1) {
      this.personagens.splice(indice, 1);
      return true;
    }
    return false;
  }

  // Métodos para manipulação de itens no Personagem

  adicionarItemAoPersonagem(personagemId: number, item: ItemMagico): Personagem | undefined {
    const personagem = this.buscarPersonagemPorId(personagemId);
    if (!personagem) {
      throw new Error('Personagem não encontrado');
    }
    // Se o item for do tipo Amuleto, verifica se já existe um associado
    if (item.tipo === 'Amuleto' && personagem.itens.find(i => i.tipo === 'Amuleto')) {
      throw new Error('Este personagem já possui um Amuleto.');
    }
    personagem.itens.push(item);
    return personagem;
  }

  listarItensDoPersonagem(personagemId: number): ItemMagico[] | undefined {
    const personagem = this.buscarPersonagemPorId(personagemId);
    return personagem?.itens;
  }

  removerItemDoPersonagem(personagemId: number, itemId: number): Personagem | undefined {
    const personagem = this.buscarPersonagemPorId(personagemId);
    if (!personagem) {
      throw new Error('Personagem não encontrado');
    }
    personagem.itens = personagem.itens.filter(i => i.id !== itemId);
    return personagem;
  }

  buscarAmuletoDoPersonagem(personagemId: number): ItemMagico | undefined {
    const personagem = this.buscarPersonagemPorId(personagemId);
    if (!personagem) {
      throw new Error('Personagem não encontrado');
    }
    return personagem.itens.find(i => i.tipo === 'Amuleto');
  }
}
