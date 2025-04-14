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
- URL: `http://localhost:3000/characters`
- Body (JSON):
```json
{
  "name": "Nome do Personagem",
  "class": "Classe do Personagem",
  "level": 1
}
```

### Listar Personagens
- Método: GET
- URL: `http://localhost:3000/characters`

### Buscar Personagem por ID
- Método: GET
- URL: `http://localhost:3000/characters/:id`

### Atualizar Personagem
- Método: PUT
- URL: `http://localhost:3000/characters/:id`
- Body (JSON):
```json
{
  "name": "Novo Nome",
  "class": "Nova Classe",
  "level": 2
}
```

### Deletar Personagem
- Método: DELETE
- URL: `http://localhost:3000/characters/:id`

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- dotenv

## 📝 Licença

Este projeto está sob a licença MIT. 