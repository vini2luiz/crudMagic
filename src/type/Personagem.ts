import { ItemMagico } from './ItemMagico';

export type Classe = 'Guerreiro' | 'Mago' | 'Arqueiro' | 'Ladino' | 'Bardo';

export interface Personagem {
  id: number;
  nome: string;
  nomeAventureiro: string;
  classe: Classe;
  level: number;
  forcaBase: number;
  defesaBase: number;
  itens: ItemMagico[];
}
