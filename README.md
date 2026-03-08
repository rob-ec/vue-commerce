# E-commerce com Vue.js & Options API

Projeto criado para a tarefa da Aula 03 do Projeto TIC-HUB 12 Full Stack.

## Requisitos

### Modelagem

- [x] Classe Product Deve ter `id`, `name`, `price` e `category`.
    - *(Obs.: Foi utilizado o termo* `title` *em detrimento de* `name`*)*
- [x] Casse Category Deve ter `id` e `title`

### UI
- [x] Crie um componente para exibir as informações de cada produto individualmente.
  - [x] Use a propriedade props para receber um objeto do tipo Product.
  - [x] **Template**: Renderize o nome, o preço e a categoria de forma organizada.
  - [x] **Evento**: Adicione um botão "Adicionar" que, ao ser clicado, avise o componente pai sobre a ação.

🏗️ Etapa 3: Integração no Componente Pai (Options API)
- [x] No seu arquivo principal (ex: App.vue), utilize a estrutura de Options API:data(): 
- [x] Crie uma lista de produtos (products) com dados fictícios.
- [x] Inicialize uma lista para o carrinho (cartItems: []).
methods:
- [x] Crie o método addToCart(product).
  - [x] Lógica: Verifique se o produto já está no carrinho. Se sim, aumente a quantidade; se não, adicione o novo item ao array.
- [x] No template, utilize a diretiva v-for para percorrer sua lista de produtos e renderizar um ProductCard para cada um.

### Carrinho
- [x] Exiba na tela as informações dinâmicas do carrinho:
  - [x] Total de itens: Quantidade total de unidades selecionadas.
  - [x] Preço Final: A soma total do valor dos produtos no carrinho.
  
### 🔥 Desafio

- [x] Implemente a função de remover uma unidade de um item no carrinho.
- [x] Adicione um botão para excluir o item (remover todas as unidades de uma vez).
- [x] Em vez de fazer a lógica de adicionar/remover dentro do methods do Vue, utilize a sua classe Cart.ts.
- [x] Instancie o carrinho no data(): cart: new Cart().
- [x] Faça com que o Vue apenas chame os métodos da classe (ex: this.cart.addItem(product)), deixando o componente visual "limpo" de regras de negócio.
- [x] Listagem Detalhada:
  - [x] Use outro `v-for` para mostrar uma pequena lista/tabela com os itens que já estão no carrinho, exibindo "Nome x Quantidade".

### ✅ Critérios para a Entrega Mínima
- [x] Uso de Options API: Estrutura correta de data, methods e props.
- [x] Tipagem: Código em TypeScript, sem o uso de any.
- [x] Funcionalidade: O botão de adicionar deve atualizar os totais na tela corretamente.
[x] Componentização: O produto deve ser obrigatoriamente um componente separado.

## Project Setup

```sh
npm install
```

### Modo Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
