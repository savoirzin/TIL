//js 비동기를 간편하게 도와주는 오브젝트
// promise is a javascript for asynchronous operation.
// 2 points
// 1. state --> 상태
// 2. producer (정보 제공자) / consumer(정보 소비자)

//state : pending -> full filled or rejected
//Producer vs Consumer

// 1. producer part -> Promise 만들기
// when new Promise is created, the excutor runs automatically.(!)
const promise = new Promise((resolve,reject) => {
    //doing some heavy work() 시간이 많이 걸리는 일은 프로미스를 이용해서 비동기적으로 만드는것이 좋다.
    // network / read files
    console.log('doing something');
    //promise를 만든 순 바로 함수가 실행된다 즉슨, 프로미스 안에 네트워크통신을 작성했다면 프로미스 만들어진 그 순간 네트워크 통신을 바로 수행한다.
    setTimeout(() =>{
        resolve('ellie')
    },2000)
});

// 2. consumers : then, catch, finally 를 이용해서 값을 받아올 수 있음
promise
    .then((value) => {//똑같은 프로미스를 리턴하므로 그 리턴괸 프로미스를가지고 호출 - 이것을 체이닝이라고 함
    console.log(value);
})
.catch(error =>{
    console.log(error);
})
.finally(()=>{//어떤기능을 마지막으로 실행하고자 할때
    console.log('finally')
});


//3.promise chaining
