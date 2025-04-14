
# Sistema de Gerenciamento para Jogo de RPG

Este é um sistema CRUD desenvolvido em TypeScript para gerenciamento de um jogo de RPG.

## 🚀 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- Node.js (versão 14 ou superior)
- npm (geralmente vem junto com o Node.js)
- Insomnia (para testar as APIs)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd rpg-crud
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto (se ainda não existir)
   - Configure as variáveis necessárias no arquivo `.env`

## 🏃‍♂️ Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```

Para iniciar o servidor em modo de produção:
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000` por padrão.

## 📡 Testando com o Insomnia

1. Abra o Insomnia
2. Crie um novo projeto
3. Configure as seguintes rotas:

### Criar Personagem
- Método: POST
- URL: `http://localhost:3000/api/personagens`
- Body (JSON):
```json
{
  "nome": "Nome do Jogador",
  "nomeAventureiro": "Nome do Personagem",
  "classe": "GUERREIRO", // Pode ser: GUERREIRO, MAGO, ARQUEIRO
  "level": 1,
  "forcaBase": 6,
  "defesaBase": 4
}
```
Observação: A soma de `forcaBase` e `defesaBase` deve ser igual a 10.

### Listar Personagens
- Método: GET
- URL: `http://localhost:3000/api/personagens`

### Buscar Personagem por ID
- Método: GET
- URL: `http://localhost:3000/api/personagens/:id`

### Atualizar Nome do Aventureiro
- Método: PATCH
- URL: `http://localhost:3000/api/personagens/:id/aventureiro`
- Body (JSON):
```json
{
  "nomeAventureiro": "Novo Nome do Personagem"
}
```

### Deletar Personagem
- Método: DELETE
- URL: `http://localhost:3000/api/personagens/:id`

### Adicionar Item a um Personagem
- Método: POST
- URL: `http://localhost:3000/api/personagens/:id/itens`
- Body (JSON):
```json
{
  "itemId": 1
}
```

### Listar Itens de um Personagem
- Método: GET
- URL: `http://localhost:3000/api/personagens/:id/itens`

### Remover Item de um Personagem
- Método: DELETE
- URL: `http://localhost:3000/api/personagens/:id/itens/:itemId`

### Buscar Amuleto de um Personagem
- Método: GET
- URL: `http://localhost:3000/api/personagens/:id/itens/amulet`

### Criar Item Mágico
- Método: POST
- URL: `http://localhost:3000/api/itens`
- Body (JSON):
```json
{
  "nome": "Espada Flamejante",
  "tipo": "Arma", // Pode ser: Arma, Armadura, Amuleto
  "forca": 5,
  "defesa": 0
}
```

### Listar Itens Mágicos
- Método: GET
- URL: `http://localhost:3000/api/itens`

### Buscar Item Mágico por ID
- Método: GET
- URL: `http://localhost:3000/api/itens/:id`

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- dotenv

## 📝 Licença

Este projeto está sob a licença MIT.
