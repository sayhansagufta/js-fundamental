// Materi Looping

for (let index = 1; index <= 5; index++) {
  let stars = "";
  for (let j = 1; j <= index; j++) {
    stars += "*";
  }
  console.log(stars);
}

// Materi async

// Asynchronous

function asyncSatu() {
  setTimeout(() => {
    console.log("async satu ");
  }, 3000);
}

function asyncDua() {
  setTimeout(() => {
    console.log("async dua ");
  }, 1000);
}

function asyncTiga() {
  setTimeout(() => {
    console.log("async tiga");
  }, 2000);
}

function printHello() {
  console.log("Hello");
}

asyncSatu();
printHello();
asyncDua();
asyncTiga();

// Materi callback function

let data = "";

function getData(callback) {
  setTimeout(() => {
    data = "data terisi";
    callback();
  }, 3000);
}

function menampilkanCallback() {
  if (data) {
    console.log(data);
  } else {
    console.log("Error Data tidak Terisi");
  }
}

getData(menampilkanCallback);
