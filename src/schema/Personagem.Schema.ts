import { Personagem, Classe } from '../type/Personagem';

let idCounter = 1;

export function criarPersonagem(
  nome: string,
  nomeAventureiro: string,
  classe: Classe,
  level: number,
  forcaBase: number,
  defesaBase: number
): Personagem {
  if (forcaBase + defesaBase !== 10) {
    throw new Error('Soma de força e defesa precisa ser 10');
  }

  return {
    id: idCounter++,
    nome,
    nomeAventureiro,
    classe,
    level,
    forcaBase,
    defesaBase,
    itens: [],
  };
}
