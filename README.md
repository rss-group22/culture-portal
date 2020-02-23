# culture-portal
Project name is a `culture-portal` that allows get information about photographers of Belarus.
It is possible to turn on three languages - ru, by, en.
There is a choice to get a photographer by a search a city or a name.
There is possible to get more information about a chosen photographer.

****
## How to run project
* Make `git clone`
* Install dependencies `npm ci`
* Run webpack-dev-server `npm run start`
* Open url `localhost:8080` in your browser

## How to build project
* Make `git clone`
* Install dependencies `npm ci`
* Run webpack-dev-server `npm run build`
* Install http-server package `npm ci -g http-server`
* Run http-server `http-server dist`
* Open url `localhost:8080` in your browser

## How to run test
* Command `npm test`


## Files structure:
```
/src
├── components
│   ├── Component             # for component and it's styles
|       ├── Component.js
|       ├── Component.scss
│   ├── pages                 # for pages (also can contain styles)
|       ├── page1.js
|       ├── page2.js
|       ├── page3.js
├── services                  # for all XHR and Promises
│   ├── getPhotographers.js
│   ├── getDeveloperInfo.js
├── styles                  # for variables and global styles
│   ├── _variables.scss
├── App.js                   # main entry point.
├── App.scss
```
