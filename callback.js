const add = (a, b, callback,cb,t1,t2) => {
    setTimeout(() => {
        cb()
        callback(a+b)
        t2(t1*3)
    }, 2000);
}

add(1,4,(sum)=> {
    console.log(sum)
},()=> console.log('test'),5,(c1) => console.log(c1))