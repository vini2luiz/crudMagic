import { ItemMagico, TipoItem } from '../type/ItemMagico';
import { criarItemMagico } from '../schema/ItemMagicoSchema';

export class ItemMagicoService {
    private itens: ItemMagico[] = [];

    criarItem(nome: string, tipo: TipoItem, forca: number, defesa: number): ItemMagico {
        const novoItem = criarItemMagico(nome, tipo, forca, defesa);
        this.itens.push(novoItem);
        return novoItem;
    }

    listarItens(): ItemMagico[] {
        return this.itens;
    }

    buscarItemPorId(id: number): ItemMagico | undefined {
        return this.itens.find(item => item.id === id);
    }
}
