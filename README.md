# Desafio Backend: API Express + MySQL

API RESTful para gerenciamento de **clientes** e **produtos**, desenvolvida como parte do desafio de Backend da UNILAVRAS.

## Funcionalidades

### Clientes
- CRUD completo
- Validação: nome, email, idade
- Cache no endpoint GET `/clientes` (30s)
- Cache é invalidado após POST, PUT ou DELETE
- Logs com origem da resposta: `[CACHE]` ou `[DB]`
- Exibe tempo restante do cache nos logs

### Produtos
- CRUD completo
- Validação: nome, descrição, preço
- Data de atualização automática
- Cache no endpoint GET `/produtos` (30s)
- Cache é invalidado após POST, PUT ou DELETE
- Logs com origem da resposta: `[CACHE]` ou `[DB]`
- Exibe tempo restante do cache nos logs

## Tecnologias

- Node.js + Express
- MySQL + mysql2
- node-cache
- chalk (logs coloridos)
- ESLint

---

Projeto desenvolvido para o desafio de Backend da **UNILAVRAS**.
