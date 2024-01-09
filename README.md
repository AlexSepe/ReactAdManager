
## TcReactAdManager
TrueChange React Ad Manager wrapper

Este widget implementa um wrapper do component React-Ad-Manager, permitindo que possamos incluir AdUnits dinamicamente em Apps Mendix.
Testado e funcional para Apps Web!

Referencias:

react-ad-manager: https://socket.dev/npm/package/react-ad-manager

Google Publisher Tags: https://developers.google.com/publisher-tag/guides/get-started?hl=en

Supported ad sizes
Maximize ad performance by choosing top-performing ad sizes: https://support.google.com/admanager/answer/1100453?hl=en

## Features

* Inclusão de varios AdUnit Slots na mesma página
* Configurações por Expressão permitindo uso estático ou atribitos
* Configuração dinamica de tamanhos do AdUnit utilizando JSON.parse (desta forma podemos utilizar parte do JS preconfigurado nos sites GPT ou outros)


## Usage
1) Incluir o Google Publisher Tags script na pagina index.html do projeto Mendix. (ou equivalente index3.html etc) 
Este ponto é requerido pois o gpt deve estar com o DOM inicializado antes do React injetar os componentes.
o
<head>
  <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>
</head>

2) Incluir o widget TcReactAdManager na página mendix a ser exibido
Atributos do widget :
* **Ad unit** -> Deve conter a unit path previamente criada no Google AdManager
* **Slot Name** -> Opcional, identifica o div do slot na api do gpt. Caso não informado é gerado automaticamente pelo widget
* **Refresh Timer** -> Opcional, Indica em milesegundos o intervalo para que o Ad seja atualizado (indicado minimo de 60000 = 1 minuto)
* **Size Array** -> Deve conter uma string com conteudo json de arrays válidos para o GPT
  
Sample:[ [[1024, 768], [[970, 90], [728, 90]]], [[640, 480], [[300, 50]]], [[0,0],[]] ]

3)  Concluído! 

**NOTAS** 

Google só exibirá os Ads no site real configurado no AdManager!
Localhost não funciona nem para o AdUnit "emulado"! 
Requer uma freeapp, ngrok ou deploy para ambientes para visualizar os Divs demo!

## Demo project
React Add Manager Test sandbox -> https://reactaddmanagertest-sandbox.mxapps.io/

Gpt Demo -> https://googleads.github.io/google-publisher-tag-samples/ad-sizes/js/demo.html

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]

## Screenshots
![image](https://github.com/AlexSepe/ReactAdManager/assets/7504214/623f3c07-3572-4ab5-b827-033b324072bd)

