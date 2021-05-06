# Code210503
This is the Technical Challenge.<br>
Includes React-Native and Native iOS projects.

## Screens preview:<br>
<br>

<br>

## Folder structure:<br>

### React Native:<br>

```
Code210503
├─ README.md
└─ restaurantRN                 --- React Native Project Folder
   ├─ index.js
   ├─ src                       --- source code
   │  ├─ components             --- All universal components
   │  ├─ crud                   --- Modules of actions, selector, data, redux
   │  │  ├─ modules             --- Specific modules, example: Restaurant
   │  │  │  └─ Restaurant       --- selectors actions data redux for Restaurant
   │  │  └─ utils               --- tools for crud
   │  ├─ screens                --- All screens
   │  │  └─ Restaurant          --- Specific module screens
   │  └─ store                  --- Configure store
   └─ test                      --- test folder: setup and mocked state
```

### iOS:


## Environment:
Node v12
Xcode 12.5

## Run & Test:
### React-Native:
```
cd restaurantRN
npm i
npm start
npm run ios
npm test
```
### iOS:
```
cd iOS
Xcode Run
```
