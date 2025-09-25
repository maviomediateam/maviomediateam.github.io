{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as PIXI from 'https://cdn.skypack.dev/pixi.js';\
\
// N\'e1jdi kontajner pod\uc0\u318 a ID, ktor\'e9 si nastavil vo Frameri\
const containerElement = document.getElementById('liquidGlassContainer');\
\
if (containerElement) \{\
  // 1. Nastavenie Pixi.js aplik\'e1cie\
  const app = new PIXI.Application(\{\
    resizeTo: containerElement,\
    backgroundColor: 0x000000,\
    alpha: 0,\
    antialias: true,\
  \});\
  containerElement.appendChild(app.view);\
\
  // 2. Vytvorenie kontajnera na umiestnenie objektov\
  const mainContainer = new PIXI.Container();\
  app.stage.addChild(mainContainer);\
\
  // 3. Na\uc0\u269 \'edtanie obr\'e1zka\
  const texture = PIXI.Texture.from('https://picsum.photos/1920/1080');\
  const bg = new PIXI.Sprite(texture);\
  bg.width = app.screen.width;\
  bg.height = app.screen.height;\
  bg.x = app.screen.width / 2;\
  bg.y = app.screen.height / 2;\
  bg.anchor.set(0.5);\
  mainContainer.addChild(bg);\
\
  // 4. Nastavenie a aplik\'e1cia filtrov\
  const displacementFilter = new PIXI.DisplacementFilter(bg);\
  displacementFilter.scale.x = 0;\
  displacementFilter.scale.y = 0;\
  mainContainer.filters = [displacementFilter];\
\
  // 5. Interakcia s my\'9aou\
  let mouse = \{ x: 0, y: 0 \};\
  containerElement.addEventListener('mousemove', (e) => \{\
    mouse.x = e.clientX - containerElement.getBoundingClientRect().left;\
    mouse.y = e.clientY - containerElement.getBoundingClientRect().top;\
  \});\
\
  // 6. Anim\'e1cia v re\'e1lnom \uc0\u269 ase\
  app.ticker.add(() => \{\
    // Anim\'e1cia pozadia\
    displacementFilter.scale.x = mouse.x / 50;\
    displacementFilter.scale.y = mouse.y / 50;\
    bg.x = app.screen.width / 2 + (mouse.x - app.screen.width / 2) * 0.1;\
    bg.y = app.screen.height / 2 + (mouse.y - app.screen.height / 2) * 0.1;\
  \});\
\}}