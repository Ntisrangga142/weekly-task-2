export function divideAndSort (data){
    let str = data.toString();
    let arrStr = str.split("0");
    for(let i = 0; i < arrStr.length; i++){
        arrStr[i] = arrStr[i].split("").sort((a, b) => a - b).join("")
    }

    arrStr = arrStr.join("")
    console.log(Number(arrStr))
}

