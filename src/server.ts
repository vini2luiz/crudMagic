import dotenv from 'dotenv';
import app from './app';

// Configura as variáveis de ambiente
dotenv.config();

const PORT = process.env.PORT || 3000;

// Inicia o servidor diretamente (sem banco de dados)
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
