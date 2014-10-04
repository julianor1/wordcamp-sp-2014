## Client AngularJS consumindo WP-API
### Experiência - Cardápio
---
### #comoFaz?
- Este projeto usa o [Ionic Framework](http://ionicframework.com)
- Sugiro rodar via cli:
`npm install - g ionic`

`ionic start NomeDoApp tabs`

então substituir a pasta /www gerada pela deste repo

Após isto, `cd NomeDoApp` e `ionic serve` para visualizar no Browser

> Atenção: O servidor precisa ter o CORS ativado. https://github.com/thenbrent/WP-API-CORS

---
### O que tem?
No `www/js/services.js` inserimos 2 services importantes: **Config** e **Pratos**


No `www/js/controllers.js` criamos a lógica
E alguns Views especificos também