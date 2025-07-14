import {mainTask1} from './task/task1.js'
import {mainTask2}  from './task/task2.js'
import {getData}  from './task/task3.js'
import {divideAndSort}  from './task/task4.js'
import {menu} from './fileManagement.js'



(async () => {
    console.log("========== Task 1 ==========")
    await mainTask1(true);
    await mainTask1(false);
    console.log()

    console.log("========== Task 2 ==========")
    await mainTask2(true);
    await mainTask2(false)
    console.log()

    console.log("========== Task 3 ==========")
    const URL = "https://jsonplaceholder.typicode.com/users"
    await getData(URL)
    console.log()

    console.log("========== Task 4 ==========")
    divideAndSort(59565601594466056)
    console.log()

    console.log("========== Task 5 ==========")
    await menu()
    console.log()


})();





