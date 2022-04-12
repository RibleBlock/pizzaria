import path, { dirname } from "path";
import express from "express";
const server = express();
const port = 3333;
import routes from "./routes";

// Para as req utilizar JSON
server.use(express.urlencoded({ extended: true }));
// Arquivos que nao mudam
server.use(express.static(path.resolve(__dirname, '..', 'public')));
// paginas ejs
server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(routes);

server.listen(port, () => console.log(`http://localhost:${port} iniciado na porta ${port}`));