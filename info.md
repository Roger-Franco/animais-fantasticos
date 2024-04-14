npm install eslint -g

npm init

eslint --init


Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON


=> Webpack // Possibilita a instalaÇão de códigos externos
npm install --save-dev webpack webpack-cli

npx webpack ./js/script.js -o ./main.js
npx webpack ./js/script.js -o ./main.js --watch   => Fica assistindo caso haja mudanças;
Depois de ter colocar o comando acima no scripts do package, posso rodar apenas o comando:
npm run build
npm run dev

npm install jquery lodash 


====== Babel ========

Instalar Babel
https://babeljs.io/docs/en/usage

npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader

Criar o arquivo webpack.config.js

=================== Projeto final ====================
git init
git add -A
git commit -m "Primeiro Commit"
git remote add origin git@github.com:Roger-Franco/animais-fantasticos.git
git push -u origin master 

npm install
npm run dev




11 Refatorar Projeto Final
00:00:00 1101 Repositório Git
00:04:10 1102 Refatorar Scroll Suave

00:21:28 1103 Refatorar Accordion
00:30:28 1104 Refatorar Tabnav
00:38:42 1105 Refatorar Modal
00:54:58 1106 Refatorar Tooltip
01:13:08 1107 Refatorar Anima Números
01:34:28 1108 Refatorar Fetch Animais
01:43:37 1109 Refatorar Fetch Bitcoin