# Projeto Marvel Heroes
 Desafio feito em 24 horas

## Tecnologias usadas

- Next.JS
- ReactJS
- Typescript
- SCSS
- [brainhubeu/react-carousel](https://github.com/brainhubeu/react-carousel)
- [Marvel API](https://developer.marvel.com/)

## Como usar

Faça um clone desse repositório e rode o comando yarn ou npm para obter as dependências do projeto.
```bash
yarn
```
Execute o seguinte comando no terminal para iniciar o servidor local do projeto.
```bash
yarn dev
```

Crie um arquivo .env.local na raiz do projeto. Crie as seguinte variavies locais usando sua chave
```
MARVEL_PUBLIC_KEY="Sua chave publica"
MARVEL_PRIVATE_KEY="Sua chave privada"
```

O Projeto será executado na porta 3000 e será acessível através da URL http://localhost:3000


## Demonstração

![alt text](https://github.com/DrZanuff/marvel-ui/blob/main/docs/main.gif?raw=true)

#### Responsividade Mobile

![alt text](https://raw.githubusercontent.com/DrZanuff/marvel-ui/main/docs/mobile.gif)

### Figma

[Link do Figma](https://www.figma.com/file/Hqjz57foqijCHtuEOk8LKx/MarvelUI?node-id=0%3A1)


## O porquê das tecnologias

#### Next.js
Faz pouco tempo que comecei a usar o Next.js mas já posso ver as enormes vantagens que ele traz out-of-box, isso tirando as funcionalidades de Server Side Rendering e Static Site Generator, imprescindíveis para o SEO do Google.

#### Typescript
O Typescript traz uma carga um pouco maior para o desenvolvimento, mas compensa ao longo prazo, para projetos maiores e trabalhando com equipes. A tipagem dele faz muita diferença e depois que você se acostuma é difícil ficar sem. Qaundo voce está iniciando com Typescript, pode ser um pouco trabalhoso acertar os formatos dos objetos, mas vale cada esforço dominar essa linguagem.

#### SCSS
Outra tecnologia que melhora a vida do desenvolvedor. Trabalhar com CSS em cascata e funcionalidades de escopo de estilo junto com Next.js acelera e simplica a estilição dos componentes. 
