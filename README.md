# NODE - API REST - CHALLENGE
<br>
<p align="center">
  <img src="views/public/icons/159480669.jpg" width="100">
  <img src="views/public/icons/169946056.jpg" width="100">
  <img src="views/public/icons/138880659.jpg" width="100">
  <img src="views/public/icons/134431788.jpg" width="100">
</p>

<p align="center">S Y L K</p>


## Sobre

Este projeto é uma API RESTful desenvolvida em Node.js como parte do desafio da disciplina de Desenvolvimento Back-End.<br>

A aplicação permite o gerenciamento de **clientes**, **produtos** e **usuários**, utilizando banco de dados **MySQL**, autenticação com **JWT**, e **Node-Cache** de dados para otimização de requisições.
Além disso, o sistema conta com testes automatizados utilizando **Jest**, garantindo a confiabilidade das funcionalidades implementadas.


### Requisitos
---

    - node.js >= 12
    - npm
    - MySQL

    
### Instalação 
---
- **Clone o repositório:**
    ```bash
    git clone https://github.com/StenioSiq/rest-node
    ```
- **Crie o arquivo `.env`**
    ```
    DB_HOST=      localhost 
    DB_USER=      seu_usuario
    DB_PASSWORD=  sua_senha
    DB_NAME=      nome_do_banco
    JWT_SECRET=   sua_chave_secreta
    DB_PORT=      0000
    ```
- **Instale as dependências**
    ```
    npm install
    ```
- **Configure o banco de dados**
    ```
    Crie o banco no MySQL.
      Execute os scripts em /models para criar as tabelas.
    ```

### Rotas e Endpoints
---
#### Clientes (`/clientes`)
-  `GET /clientes` - Lista todos (protegido, usa cache)
- `POST /clientes` - Cria cliente (protegido, validação)
- `PUT /clientes/:id` - Atualiza cliente (protegido, validação)
- `DELETE /clientes/:id` - Remove cliente (protegido, invalida cache)

#### Produtos (`/produtos`)
- `GET /produtos` - Lista todos (cache)
- `POST /produtos` - Cria produto 
- `PUT /produtos/:id` - Atualiza produto (invalida cache)
- `DELETE /produtos/:id` - Remove produto (invalida cache)

#### Usuários (`/usuarios`)
- `GET /usuarios` - Lista todos (protegido)
- `POST /usuarios` - Cria usuário (validação)
- `DELETE /usuarios/:id` - Remove usuário (protegido)

#### Autenticação
- `POST /login` - Login, retorna JWT
- `POST /logout` - Logout, invalida JWT

### Cache
---
- Implementado com NodeCache.
- Respostas de listagem de clientes e produtos são armazenadas em cache para acelerar requisições.
- Cache é invalidado automaticamente em operações de criação, atualização ou exclusão.

### Autenticação JWT
---
- Usuário faz login e recebe um token JWT.
- Rotas protegidas exigem o header `Authorization: Bearer <token>`.
- O middleware `validarJWT` valida o token em cada requisição protegida.
- Logout remove o token do cache, invalidando o acesso.

### Testes
---
- Testes para rotas de clientes, produtos, usuários e autenticação.

- **Execute**

    ```
    npm test
    ```



---
### Projeto desenvolvido para o desafio de Backend da **UNILAVRAS**.
