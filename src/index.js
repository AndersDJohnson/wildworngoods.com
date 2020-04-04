const fs = require("fs");
const { makeKeyframes } = require("./slides");

const publicDir = __dirname + "/../public";

const slides = fs
  .readdirSync(publicDir + "/img/slides/opt")
    .filter(f => f.endsWith('.jpg'));

const keyframes = makeKeyframes(slides.length);

const html = `
<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">

  <title>Wild Worn Goods</title>
  <meta name="description" content="Wild Worn: Jewelry hand-crafted with intention & love.">


  <link rel="canonical" href="https://wildworngoods.com">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="shortcut icon" type="image/png" href="/img/favicon.ico"/>

  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">

  <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/img/card.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/img/card.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/img/card.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/img/card.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/img/card.png">

  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/img/card.png">

  <meta name="msapplication-TileColor" content="#b06c10">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#b06c10">

  <link rel="manifest" href="/manifest.json">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Wild Worn Goods">
  <meta name="twitter:description" content="Wild Worn: Jewelry hand-crafted with intention & love.">
  <meta name="twitter:image" content="https://wildworngoods.com/img/card.jpg">

  <meta property="og:title" content="Wild Worn Goods">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://wildworngoods.com">
  <meta property="og:image" content="https://wildworngoods.com/img/card.jpg">
  <meta property="og:description" content="Wild Worn: Jewelry hand-crafted with intention & love.">

  <link rel="stylesheet" href="/css/normalize.css">
  <link rel="stylesheet" href="/css/main.css">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

  <style>
    html {
      background: black;
    }

    ${keyframes}
    ${slides.map(
      (slide, i) => `
      .slide-${i} {
        animation: slide-${i} ${slides.length * 3}s ease-in-out infinite;
        
        content: "OK ${i}";
      
        background-image: url('/img/slides/optmob/${slide}');
      }

      @media (min-width: 768px) {
        .slide-${i} {
          background-image: url('/img/slides/opt/${slide}');
        }
      }
    `
    ).join('\n')}
  </style>
</head>

<body>
  <div id="bg">
    ${slides.map((slide, i) => `<div class="slide slide-${i}"></div>`).join("")}
  </div>

  <div id="fg">
    <header>
      <h1 class="sr-only">Wild Worn Goods</h1>
      <img id="logo" alt="Wild Worn" src="/img/logo-white.png">

      <h2 class="fancy">Jewelry hand-crafted with intention & love</h2>
    </header>

    <div class="body">
        <a class="social fancy" href="https://www.etsy.com/shop/wildwornjewelry">
          <span class="text">Shop Etsy</span>
        </a>

        <a class="social fancy" href="https://www.instagram.com/wildwornjewelry/">
          <span class="text"><i class="fab fa-instagram"></i> Instagram</span>
        </a>

        <a class="social fancy" href="https://www.facebook.com/wildwornjewelry/">
          <span class="text"><i class="fab fa-facebook-square"></i> Facebook</span>
        </a>

      <div class="eml">
       <a class="fancy" href="mailto:annalesa@wildworngoods.com">
        a<i></i>n<i></i>n<i></i>a<i></i>l<i></i>e<i></i>s<i></i>a<i></i>@<i></i>w<i></i>i<i></i>l<i></i>d<i></i>w<i></i>o<i></i>r<i></i>n<i></i>g<i></i>o<i></i>o<i></i>d<i></i>s<i></i>.<i></i>c<i></i>o<i></i>m
      </a>
      </div>

    </div>
  </div>
</body>

</html>
`;

fs.writeFileSync(publicDir + "/index.html", html);
