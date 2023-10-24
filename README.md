# Aulaguanabarahtmlcss
Repositório para guardar exercícios e anotações feitos na aula
## MÓDULO 2

### AULA 1 
**Teoria das cores** 🖌️

Empresas de tecnologias: geralmente azul

azul: confiança,integridade, cor com menor taxa de rejeição 🔵

vermelho: amor, raiva, perigo energia, amor, perigo, geralmente em restaurantes e hospitais 🔴

marrom: também tem ligação com vermelho, robustez, estabilidade 🟤

laranja: divertimento 🟠

verde:saúde, natureza, inveja 🟢

rosa: amor, sentimental 🐽

*Monocromático: vários tons da mesma cor*

cuidado com fundo preto e letra branca

geralmente: fundo branco letra preta

--------------------------------------------------------------------------

### AULA 2 - CAP 13 - ex016 pasta do capítulo 2
**Representando cores com CSS**

style="background-color" -> exemplo simples de como modificar valores pontuais em lugares do seu código/ 

color -> muda a cor da letra

#0000ff -> representa a cor azul em hexadecimal

Decimal -> 0 1 2 3 4 5 6 7 8 9 🔟

Hexadecimal -> 0 1 2 3 4 5 6 7 8 9 A B C D E F 1️⃣6️⃣

rgb (quantidade de vermelho, quantidade de verde, quantidade de azul) exemplo: rgb(255,255,255)= branco

hsl -> hsl(matiz,saturação,luminosidade) hue saturation luminosity

tem como modificar pelo peóprio vscode com o mouse em cima do nome da cor

--------------------------------------------------------------------------

### AULA 3 - CAP 13 -
**Harmonia de cores**

Círculo cromático - explica sobre harmonia

exemplo 12 cores principais - cores primárias amarelo, vermelho, azul formam um triângulo e são simétricas. 🔵 🔴 🟡

cores secundárias laranja violeta verde - bem grosseiros 🟢 🟠 🟣

cores terciárias mistura de cor primária e secundária - ex: Amarelo alaranjado - Amarelo cor primária e laranja cor secundária

cores frias e cores quentes são importantes

geralmente de 3 a 5 cores na sua paleta de cores no máximo - desconsiderando branco e preto

cores complementares cor que mais contrasta entre si - cor oposta no círculo cromático

cores análogas - não tem muito contraste mas são perceptíveis - cores próximas no círculo cromático

pode formar uma paleta com duas análogas e uma complementar

cores análogas relacionadas pega duas cores, então pula uma cor do lado e pega a cor a duas distâncias

cores intercaladas pula uma cor da paleta em ambos os lados

cores triádicas pula três cores e pega uma cor, faça isso em ambos os lados

cores em quadrado, a mesma coisa mas você pega 4 cores pulando duas cores por vez 🔳

cores tetrádicas pega duas cores e pega suas opostas

monocromia - uma cor apenas - altera a saturação e o brilho - cria um efeito de degradê

--------------------------------------------------------------------------

### AULA 4 - CAP 13 -
**Paleta de cores**

Color.adobe.com -> site de paleta de cores 🤌

criar paleta a partir de imagens -> no própio adobe color clica em *Extrair tema*

Criar degradê - > Adobe color clica em extrair gradiente

Também tem como copiar palheta de outras pessoas 👀

Outra ferramenta palleton.com -> Ao clicar em exemplos ele já monta um site de exemplo 🙂

Outra ferramenta -> Colors -> clicando em espaço você ganha uma palheta aleatória 🦧

--------------------------------------------------------------------------

### AULA 5 - CAP 13 - 
**Como capturar cores da tela?** 👮

Modo errado que as pessoas usam -> Captura de tela -> Abrir com no gimp -> Abrir cor 🚫

Modo certo -> Google crhome store -> Colorzilla -> Usar no Chrome -> Entra no site que você que e clica na ferramenta de pincel que fica ao lado do link do site.
Ele vai copiar a cor rgb aí é só colar ☑️

Para criar uma palheta basta pegar as cores e ir montando em algum dos aplicativos ou pegar apenas uma cor e colocar no adobe color 🆒

Como desativar o Colorzilla -> Clica nos três pontinhos perto da própria ferramenta do Colorzilla -> Clica em "Mais ferramentas" -> Você pode desativar ou desinstalar

--------------------------------------------------------------------------

### AULA 6 - CAP 13 - ex016 página cor02
**Como criar degradê com CSS?** 😥

Código usado

    <style>
        body {
            background-image: -moz-linear-gradient(to right, white, blue);
        }
    </style>
   Esse código background image é o que cria o gradiente, to right indica o lado que a cor inicial vai se deslocar
   
   Porém eu quero que o meu tamanho seja 100%, então usaremos esse código
   
           * { /*Essa é a configuração global para CSS*/
            height: 100%;
              }
              
Agora vamos aplicar a harmonia de cores ao degradê

        body {
            background-image: linear-gradient(to bottom, #6DEADE, #56B8AE, #326B65);
            background-attachment: fixed;
        }
        
   Agora vamos fazer um degradê como o do instagram?
   Baixar imagem do logo
   e depois substituir os gradientes
   Você também pode colocar os graus em vez de to bottom to up etc
   
   aqui está o exemplo final
   
           body {
            background-image: linear-gradient(180deg, #4A61C9, #9535B3, #D46E9D, #F34956, #FCB752);
            background-attachment: fixed;
        }
        
--------------------------------------------------------------------------

### AULA 7 - CAP 13 - ex016 página cor03
**Criando um exemplo real** 🤩

Código inicial 

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de exemplo</title>
    <link rel="stylesheet" href="style.css">

Note que agora estamos referenciand uma página de CSS ao invés de fazer na mesma página

Na página de css coloque charset utf-8 para evitar problemas de compatibilidade
Resultado final


body{
    background-image: linear-gradient(to right, #285EDE, #2DA0FA);
}
main{
    border-radius: 10px;
    box-shadow: 5px 5px 15px #2e167ebd;
    background-color: white;
    width: 600px;
    padding: 10px;
    margin: auto;
}
h1{
    color: #5328DE;
    text-align: center;
    text-shadow: 1px 1px 1px #2d167abd;
}
h2{
    color: #962DFA;
}
p{
    text-align: justify;
}

--------------------------------------------------------------------------

### AULA 1 - CAP 14 - 
**Primeiros passos em tipografia** 📠

Conceitos fundamentais de tipografia: termo surgiu no século 15

Como os livros eram feitos antes da máquina? -> Monges copistas ou amanuense -> Copiava livros a mão ✍️

Em 1450 johannes gutenberg -> Prensa mecânica de tipos móveis -> era como um carimbo -> Pai da impressora, os chineses no entanto já haviam inventado antes. (Tipos móveis eram as letras que eram organizadas)

Começaram a estudar letras mais fáceis de ler -> Nasce a tipografia

Tipos -> Impressão
Grafia -> Escrita
Tipografia -> Estudo de como escrever coisas no papel

Os tipos de palavra interferem no sentimento de quem lê

--------------------------------------------------------------------------

### AULA 2 - CAP 14 - 
**Anatomia do tipo** 📠

O tipo -> tipo = letra

Toda fonte ao ser criada se deve pensar nos tamanhos

Letra X é o ponto de partida -> Altura X é a altura do x minúsculo => Ela é a base para todas as letras minúsculas 

Quando alguma letra vaza da altura do X como a letra b por exemplo, o espaço do vazamento é chamado Ascendente -> Se vazar para baixo se chama descendente

Corpo -> Soma de todas as alturas

Pézinho da fonte normalmente presente no A maiúsculo se chama Serifa -> Pequeno traço no final de algumas letras -> Ela cria uma linha imaginária que mostra a ordem para se ler e  facilita a leitura

Haste -> Uma coluna presente em uma letra, lembra um traço para cima ex: I -> Filete linha horizontal que junta duas hastes -> Arco é um filete circular

Salto nas letras que dá a impressão de que não vai cair chama de Esporão

Vértice -> Pontinha afiada em algumas letras 🔺

Terminal -> Elemento que não está preso em nenhum lugar

Componentes anatômicos geométricos 

Elemento que sai de uma haste e vai para cima -> Braço ↗️

Sai de uma haste e vai para baixo -> Perna 🦵

Pé -> Base que "Segura" as letras -> Geralmente onde ficam as serifas 🦶

Espinha -> Meio da letra S que segura as duas curvas 

Barriga -> Junção de dois arcos 🤰

Área vazia dentro de uma letra Olho 👀

Parte de baixo da letra que geralmente é embaixo da linha como na letra g CAUDA 🔌

Glifo -> Uma letra -> Cada uma das letras de um alfabeto são glifos 

Conjunto de todos os glifos em ordem FONTE 👪

Família tipográfica -> Conjuntos de grifos para diferentes famílias

Categorias de fontes -> Serifada: Tem serifa -> Sans-serif: Não tem serifa 😧

Mono espaçada (Com ou sem serifa) (Todas as leras ocupam um mesmo espaço) 😙

Handwiriting ou script ou scriptada -> Simula a caligrafia humana ✍️

Fonte display ou fontes comemorativas -> Não tem nenhuma das características das de cima

--------------------------------------------------------------------------

### AULA 3 - CAP 14 - ex017
**Famílias de fontes com CSS** 👨‍👧‍👦

 font-family: 'Courier New', Courier, monospace; -> primeiro tenta achar a fonte courier new, se não achar tenta encontrara a courier e por aí vai -> Safe combinations 🍤
 
 CSS web safe font combinations ❗ ❗ ❗

Você também pode escrever fontfamily: monoespace -> ele escolhe uma fonte monoespaçada qualquer 😖

Sempre termine as safe combinations com uma genérica

--------------------------------------------------------------------------

### AULA 4 - CAP 14 - ex017
**Tamanho de fonte e suas medidas** 🧮

Fonte size pode ser -> Medidas absolutas : cm (centimetro), mm(milimetro), in(Polegada), px(Pixel) , pt(Ponto), pc(Paica) -> Ponto e paica não são recomendadas para telas

Medidas relativas : em(medida relativa ao tamanho atual da fonte), ex(relativo ao tamanho X de uma fonte), rem(Relativo ao root configurado no vody), vw(Viewport porcentagem da altura)

Usaremos o em e o px que são os recomendados

 font-size: 16px; -> Tamanho normal da fonte

 geralmente 16px = 1em

 É recomendável utilizar o em

 --------------------------------------------------------------------------

 ### AULA 5 - CAP 14 - ex017
**Peso, estilo e shorthand font** ➗

work sans -> fonte que se usa -> depois importa url

peso da fonte font weight -> pesos: ligther, normal, bold, bolder

variação de pesos numéricas -> dá uma nuance maior de 100 até 900 -> tem que pesquisar se as opções estão disponíveis

font style

text decoration -> underline significa sublinhado

combina tudo na shorthand ✋ -> primeiro font style depois font weigth depois font size e depois font family

shorthand -> facilita seu trabalho

 --------------------------------------------------------------------------

 ### AULA 6 - CAP 14 - ex018
**Usando Google fonts** 8️⃣

Abrir o site fonts.google.com 

no site você vai encontrar várias famílias tipográficas -> selecione o tamanho e o que você quer e clique nos tres quadrados -> embet -> import -> copia apenas o @ em diante

copia o @ na tag style desse jeito

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    </style>

    e se a font não estiver no google fonts? -> próxima aula

--------------------------------------------------------------------------

 ### AULA 7 - CAP 14 - ex018 -> font02
**Usando Fontes Externas Baixadas** ⏬

dafont.com

baixe o arquivo zipado ou não -> o arquivo pode ser .otf ou .ttf

como usar a fonte depois de baixar ela? -> Primeiro crie um arquivo para todas as suas fontes

use o @fontface

depois de colocar a url você pode escolher o tipo de formato que são: opentype(otf), truetype(ttf), embedd-opentype, truetype-aap, svg

exemplo do código que fez funcionar

    <style>
        @font-face {
            font-family: 'Love vrau'; /* Nome da sua fonte*/
            src: url('fonts/love larry ttf.ttf') format(truetype); /* Daqui você indica onde está o arquivo da sua fonte*/
            font-weight: normal;
            font-style: normal;
        }
        body{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 3em;
        }
        h1{
            font-family: 'Love vrau', Times, serif;


            font-size: 3em;
            font-weight: normal;
        }
    </style>

--------------------------------------------------------------------------

 ### AULA 8 - CAP 14 - 
**Usando Fontes Externas Baixadas** ⏬

Google -> crome web store -> procure a extensão fonts ninja -> usar no crome -> entra em alguma página e clica no ninja verde 🥷

depois de descobrir a fonte é só entrar no google fonts e procura a fonte

E pronto 😲

--------------------------------------------------------------------------

 ### AULA 9 - CAP 14 - 
**Detecdando fontes dentro de imagens** 📻

E se a fonte estiver dentro de uma imagem?

PRIMEIRO SITE -> whatfontis.com -> Só arrastar a imagem -> edita a imagem para garantir um forte contraste ->  uma das melhores soluções

SEGUNDO -> fontsquirrel.com -> É de arrastar o mouse

TERCEIRO -> myfonts.com

--------------------------------------------------------------------------

 ### AULA 10 - CAP 14 - ex017 -> font02
**Alinhamento de texto com CSS** 🔄
#### Última aula do capítulo 14

**Antigamente** se usava a tag center

Hoje em dia se usa o text allign dentro de uma tag style

Também existe o text indent que coloca indentação

--------------------------------------------------------------------------


 ### AULA 1 - CAP 15 - ex019
**Usando o id com CSS** 🔄

Dentro do head crie o link que leve até a sua tag style externa

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seletores Personalizados</title>
    <link rel="stylesheet" href="style.css">
</head>

sempre se lembre de importar o charset utf 8 na sua tag style externa

dentro da sua tag você pode colocar um id que vai diferenciar sua tag de outras iguais

EX:
 <h1 id="principal">Criando Sites em HTML e CSS</h1>

 Aí na tag style você personaliza o id

 EX:
 h1#principal{
    text-align: center;
}

/*
    Tudo que é id em HTML em CSS vira #
    Tudo que é class em HTML em CSS vira .
*/

--------------------------------------------------------------------------

 ### AULA 2 - CAP 15 - ex019
**As diferenças entre o id e class** 💾

Regra do W3C se eu já usei o id uma vez não pode usar de novo

Quando se quer aplicar a mesma configuração em dois elementos não se usa id e sim **class** não classifique suas classes por formas e sim por função!

ctrl + shift + p -> emmet with abreviation -> spam / aí no spam você coloca a classe que quiser, isso pode ser utilizado em qualquer texto

Para colocar duas classes não precisa separar por vírgula

Você também pode misturar id e class, porém o id sobrepõe a class

--------------------------------------------------------------------------
