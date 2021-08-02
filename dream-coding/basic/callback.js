'use strict';

// javascript is synchronous. by ordger => in order
// hoisting : var , function 선언을 상위로 올림


//class object 생성
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

    // Homework Answer 🚀
    async getUserWithRole(user, password) {
        const id = await this.loginUser(user, password);
        const role = await this.getRoles(id);
        return role;
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your pwd');
userStorage.loginUser(
    id,pw,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                )
            },
            error=>{
                console.log(error);
            }
        );
    },
    error=>{console.log(error)}
)
