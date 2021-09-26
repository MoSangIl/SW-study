'use strict';

// javascript is synchronous.
// Execute the code block by orger after hoisting
// hoisting: var, function declaration -> 자동적으로 제일 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell Example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSucces, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSucces({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();

const id = 'ellie';
const password = 'dread';

userStorage.loginUser(
  id,
  password,
  (id) => {
    userStorage.getRoles(
      id,
      (roles) => {
        console.log(roles.name, roles.role);
      },
      (error) => {
        console.error(error.message);
      },
    );
  },
  (error) => {
    console.error(error.message);
  },
);

// 문제점
// 1. 가독성이 너무 떨어진다.
// 2. 비즈니스 로직을 이해하기가 어려움
// 3. 디버깅 및 유지보수가 어렵다.
