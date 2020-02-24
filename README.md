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

## Evaluation

Total of points - **-**

### Min scope - **50**
- [ ] **10** Main page + page with a list of authors + author's page (only pages with content without widgets);
- [ ] **10** Page with team members + page with worklog
- [ ] **10** Page with list of authors contains search widget;
- [ ] **20** Portal has two languages;


### Normal scope - **140**
- [ ] **20** Portal has page with styleguide;
- [ ] **10** Mobile version is okey
- [ ] **10** Ipad/tablet version is okey
- [ ] **10** Author's page contains timeline;
- [ ] **10** Author's page contains video overlay;
- [ ] **20** Author's page contains photo gallery;
- [ ] **10** Author's page contains map (geowidget);
- [ ] **from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)
- [ ] **20** Material-ui / bootstrap is used
- [ ] **10** Portal has third language;

### Extra scope - **70**
- [ ] **10** Confidence of the project presentation;
- [ ] **10** Project is made using gatsbyjs;
- [ ] **10** Contentful / netlify cms is used for content management
- [ ] **20** Animations / special effects like paralax
- [ ] **up to 20** Outstanding design;
- [ ] **20** Storybook/styleguidist/other react styleguide tool usage for the page with styles
