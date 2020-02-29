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


## Files structure:
```
/src
├── components
│   ├── Component                   # for component and it's styles
|       ├── Component.js
|       ├── Component.scss
|       ├── index.js
├── data
|     ├── image                      # for all XHR and Promises
│     ├── getPhotographers.js
│     ├── getDeveloperInfo.js
├── scss                             # for variables and global styles
│     ├── _variables.scss
├── index.js                         # main entry point.
├── index.scss
```

## Evaluation

Total of points - **220**

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
- [ ] **20** Design (typography, icons, colors, links + buttons + input are styled)
- [ ] **20** Material-ui / bootstrap is used
- [ ] **10** Portal has third language;

### Extra scope - **30**
- [ ] **10** Confidence of the project presentation;
- [ ] **20** Outstanding design;
