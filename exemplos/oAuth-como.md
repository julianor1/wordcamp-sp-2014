##Como autenticar com o oAuth
---

É necessário ter um consumer_key e consumerSecret. Eles podem ser gerador pelo oAuth Key Generator Plugin (eu fiz, falta link) ou pelo WP-CLI usando comandos do WP-API
Com elas, você fará serialização do verbo + url destino + parâmetros + timestamp + nonce aleatório e encriptará usando a `consumerSecret` como chave criptográfica

Aì, com esses dados, você poderá, nessa ordem:

1. Solicitar o token e o token secret. Peça para a rota `suaUrl.com.br/oauth1/request`
2. Os dados devolvidos servem para que envie uma request à `suaUrl.com.br/oauth1/authorize` que, então, fornecerá um token e token secret.

3. Com o token e token secret recebidos, fazer a autenticação via Satellizer

> Agora  questão é se vale a pena fazer o request pelo aplicativo, ou devemos deixar Token e Token secret já autorizados e pré-configurados?