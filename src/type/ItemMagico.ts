export type TipoItem = 'Arma' | 'Armadura' | 'Amuleto';

export interface ItemMagico {
  id: number;
  nome: string;
  tipo: TipoItem;
  forca: number;
  defesa: number;
}
