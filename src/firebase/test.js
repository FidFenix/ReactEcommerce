import { firestore } from "firebase";

firestore.collection('users').doc('ndasvsidvnisIDIDID').collection('carditems').doc('annfjaIDIDID');

//other way

firestore.doc('users/ndasvsidvnisIDIDID/carditems/annfjaIDIDID');
firestore.collection('users/ndasvsidvnisIDIDID/carditems/');

//callback-hell
getUser('facebook/', (user, error)=> {
    if(error) {
        throw(error)
    }
    const userid = user.id;
    getpssword()
})


const myPromise = new Promise((resolve, reject) => {
    //it will be stop until it is fault or success
    setTimeout(()=> {
        resolve('I have succeded');
    }, 1000); //after 1000ms i want to call this function
});

myPromise.then(value=> console.log(value));

//reject will work in the same way
const myPromise = new Promise((resolve, reject) => {
    //it will be stop until it is fault or success
    if(false) { 
        setTimeout(()=> {
            resolve('I have succeded');
        }, 1000);
    }else {
        reject('They have failed');
    }
});

myPromise
    .then(value => console.log(value)) //successes in the then
    .catch(rejectValue => console.log(rejectValue)); //only if i want to take the reject call.


//or
myPromise
    .then(value => value + '!!!') //returning a string + exclamation mark, so we chain on a resolve promise
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));


    //very similar to fetch

    fetch('https://apirequest')
        .then(response => response.json()) //if it is success, then we json
        .then(json => console.log(json))
        .catch(error => console.log(error))

    with ES7, we have asyn await, better handle async calls 

    fetch('httpp')
    .then(response => response.json())
    .then(users => {
        const firstUser = user[0];
        console.log(firstUser);
        return fetch(
            'htttp:?userId' + = firstUser+ 'post='+ post
        );

    })
    .then(response => response.json())
    .then(posts => console.log(posts)) //waiting always

const myAsyncFunction = async () => { //it runs until  await will wait
    const usersResponse = await fetch('https://');
    const users = await usersResponse.json();
    const secondUser = users[1];

    console.log(secondUser);
    const postResponse = await fetch('?userid=' + secondUser);

    const posts = await postResponse.json();
    console.log(posts);
}
//but how to handle errors in await

//then we use try-catch block

try {

}catch(error) {
    //any of the top fails
    console.log('there was an error');
}

//Query Reference foor more details does not have the actual data, it instead have the properties that tells
//us about it