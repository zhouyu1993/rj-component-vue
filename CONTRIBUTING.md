# contributing

## Fork online or clone

``` bash
git clone git@github.com:zhouyu1993/rj-component-vue.git

cd rj-component-vue

git branch [your name]

git checkout [your name]
```

## Install all dependencies

``` bash
npm install
# or
yarn
```

## Build Setup

``` bash
# serve with hot reload at localhost:8080
npm run dev

# lint code
npm run lint

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# deploy to the server
npm run deploy
```

## Creat new components

``` bash
# creat a new component
npm run contribute [component-name]

# build some components
npm run prod [component-name1] [component-name2]

# build all components
npm run prod
```

When you creat a new component, you need to add some codes in the file `/packages/index.js`. Like this:

``` js
import [component-name] from './[component-name]'

Vue.component([component-name].name, [component-name])

// etc.
```

# contributors

## RainJoy

## Seven

* checklist
* radio

## xxcant

* pagelist
