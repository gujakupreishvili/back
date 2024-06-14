// function randomPromise() {
//   return new Promise((resolve, reject) => {
//     const randomValue = Math.random();
//     const floor = Math.floor(randomValue * 10);
//     console.log(floor);
//     if (floor < 5) {
//       resolve("Promise resolved!");
//     } else {
//       reject("Promise rejected!");
//     }
//   });
// }
// randomPromise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//task2:

// async function fetchUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// }
// fetchUsers();

//task 3 :

async function fetchUsersRace() {
  const first = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  const second = fetch("https://dummyjson.com/users").then((res) => res.json());
  return Promise.race([first, second])
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
}
fetchUsersRace();
