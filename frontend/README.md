This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

Due to limitation of time for code challenge. I used `react-create-app` to init project.
### Setup 
 
- Install node package `yarn install`
- Start dev `yarn start`

### Things that I would like to improve if I have more time

- [ ] Normally, I prefer using `rxjs`. So, If I have more time, I will convert `redux-thunk` to `redux-observable`
- [ ] Handle expired token
- [ ] Handle errors message when logging in has been failed.
- [ ] Add loading more for front-end
- [ ] Add [workbox](https://developers.google.com/web/tools/workbox) for caching
- [ ] Write more test for front-end.
- [ ] `CurrentChatWindow` should be refactored. It better to not let it depends on __messages feature__
