# Projeto de conclusão do curso de React.js - Campinas Tech Talents

## Páginas
- DESLOGADO
  - login
- LOGADO
  - Home
    - número de produtos cadastrados
    - número de usuários cadastrados
  - Usuários (apenas administradores acessam)
    - Página para listar todos os usuários (nome e role) com botão para excluir (apenas o administrador pode ver o botão excluir)
    - Página para cadastrar com os campos:
      - name
      - email
      - password
      - role (admin ou editor)
  - Produtos
    - Página para listar todos (nome e preço) com botão para excluir (apenas o administrador pode ver o botão excluir)
    - Página para cadastrar com os campos:
      - title
      - price
      - description
      - image (link da imagem)

  
- Crud usuários
  - Com 2 níveis: administrador e editor
- Crud produtos

# Nível administrador
- Pode cadastrar e excluir qualquer usuário
- Pode cadastrar e excluir os produtos

# Nível editor
- Pode cadastrar um produto
- **Não** pode excluir um produto
- **Não** pode ver a página usuários 
- **Não** pode fazer nada com outros usuários


### Login administrador
- email: helen@facebook.com | senha: 123123

### Login editor
- email: mauricio@google.com | senha: 123123

## Tecnologias utilizadas:

- React.js

- Typescript

- Redux

- Redux saga

- Axios

- Sass


## Link do backend:
https://github.com/jenicarvalho/fake-api-emporio

#### Para instalar use
```bash
npm install
```

#### Para rodar use
```bash
json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```


