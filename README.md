# Code210503
This is the Technical Challenge.<br>
Includes React-Native and Native iOS projects.

## Screens preview:<br>
<br>
![image](https://user-images.githubusercontent.com/83605914/117225213-6cced400-add7-11eb-8fdf-ddaf18eb0eb6.gif)

<br>

## Folder structure:<br>

```
Code210503
├─ README.md
├─ DishAppRN           -------- React Native Project Folder (Redux + Saga + Reselect)
│  ├─ index.js
│  ├─ src                       --- source code
│  │  ├─ components             --- All universal components
│  │  ├─ crud                   --- Modules of actions, selector, data, redux
│  │  │  ├─ modules             --- Specific modules, example: Restaurant
│  │  │  │  └─ Restaurant       --- selectors actions data redux for Restaurant
│  │  │  └─ utils               --- tools for crud
│  │  ├─ screens                --- All screens
│  │  │  └─ Restaurant          --- Specific module screens
│  │  └─ store                  --- Configure store
│  └─ test                      --- test folder: setups and mocked state
│
│
└─ DishApp           -------- iOS Project Folder ( MVC )
   └─ DishApp
      ├─ DataManager             --- CRUD for models
      ├─ Models                  --- Data models
      ├─ Screen                  --- All screens
      └─ BoorstraManager.swift   --- init
```

## Environment:
Node v12
Xcode 12.5

## Run & Test:
### React-Native:
```
cd DishAppRN
npm i
npm start

cd ios
pod install
npm run ios
npm test
```
### iOS:
```
cd iOS
pod install
open DishApp.xcworkspace
Xcode Run
```
