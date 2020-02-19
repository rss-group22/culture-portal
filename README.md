## culture-portal

To install dependencies:
`npm i` 

To start dev-server on http://localhost:8080 (auto-open enabled):
`npm start` 

To build project:
`npm run build`

Files structure:
```src
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
├── App.js                   # main entry point.
├── App.scss 
```
