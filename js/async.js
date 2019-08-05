const myPromise = new Promise((resolve, reject) => {

    if (true) {
        setTimeout(() => {
            resolve('Succeeded');
        }, 1000);
    } else {
        reject('Failed');
    }
})

myPromise
    .then(value => console.log(value))
    .catch(err => console.log(err));