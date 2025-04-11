import { ItemMagico, TipoItem } from '../type/ItemMagico';

let idCounter = 1;

export function criarItemMagico(
  nome: string,
  tipo: TipoItem,
  forca: number,
  defesa: number
): ItemMagico {
  if (forca === 0 && defesa === 0) throw new Error("Item não pode ter força e defesa igual a 0");
  if (forca > 10 || defesa > 10) throw new Error("Força ou defesa acima do permitido");
  if (tipo === 'Arma' && defesa !== 0) throw new Error("Armas devem ter defesa igual a 0");
  if (tipo === 'Armadura' && forca !== 0) throw new Error("Armaduras devem ter força igual a 0");

  return {
    id: idCounter++,
    nome,
    tipo,
    forca,
    defesa
  };
}
