## Client AngularJS consumindo WP-API
### Experiência - Cardápio
---
Exemplo de como consumir a API REST do Wordpress. Neste exemplo, utilizamos o **ngResource** para consumir e gerenciar routes.

---
### #comoFaz?
- Este projeto usa o [Ionic Framework](http://ionicframework.com), o melhor jeito de rodar é assim:
1. Com o [NodeJS](http://nodejs.org/) instalado e funcionando, rode: 
`npm install - g ionic`
`ionic start NomeDoApp tabs`

2. Depois, substitua a /www gerada pelos comandos acima, pela www deste repo

3. Após isto, `cd NomeDoApp` e `ionic serve` para visualizar no Browser

> Atenção: Caso o servidor da API não seja localhost, pode precisar ter o CORS ativado. Basta baixar [AQUI](https://github.com/thenbrent/WP-API-CORS) e extrair para `wp-content/plugins`

---
### O que tem? No `www/js/services.js`: **Config** e **Pratos**

#### Config
O service `Config` é uma `.factory()` que retorna a variável com a nossa URL base. Usamos `Config.baseUrl` quando queremos puxar nossa URL base da API. 
**Você deve configurar sua aURL base no arquivo `/www/js/services.js`**
``` Javascript
.factory('Config', function(){ //FACTORY DE CONFIGURAÇÃO. baseURL é a URL da sua API. postType é o slug do seu post Type
  var Config = {
    baseUrl: "http://crepedeliciabrasil.com.br/site/wp-json",
    postType: "crepe"
  }
  return Config;
})
```

#### Pratos
O service `Pratos` é uma `.factory()` que retorna o `$resource()` com base na nossa `baseUrl`. Usando este service, fazemos as requisições para listar todos e para puxar o single item, também. Estas requisições são realizadasa no `www/js/controller.js`

No `www/js/controllers.js` criamos a lógica
E alguns Views especificos também