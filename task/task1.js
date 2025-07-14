const fetchData = (status) => { // fetchData adalah sebuah sebuah fungsi yang mengembalikan nilai sebuah Promise
    return new Promise ((resolve, reject) => {  // promise adalah sebuah objek yang mengembalikan nilai akhir dari sebuah operasi asinkronus
        if(status){
            setTimeout(() => {
                resolve("Data berhasil disimpan")
            }, 3000)
        } else {
            reject("Gagal mengambil Data!")
        }
    },)
}

function fechThen (status){
    fetchData(status) 
    .then ((status) => 
        console.log(status)
    ) 
    .catch ((err) => 
        console.log(err)
    )
}

// fetchData dijalankan dengan parameter true
// then adalah suatu handling untuk menangani sebuah operasi asinkronus. 
// Jika fetchData mengembalikan resolve maka akan dijalankan di then dan value resolve akan dimasukan dalam parameter seperti "status"
// Jika fetchData mengembalikan reject maka akan dilempar ke catch dan value reject akan dimasukan dalam parameter seperti "err"

async function fechAscyn (status) { // 
    try { 
        const result = await fetchData(status) 
        console.log(result) 
    } catch (err){
        console.log(err)
    }
}

// asycn untuk menandakan bahwa fungsi ini akan dijalankan secara asinkronus karena fetchData adalah sebuah promise dan di jalankan secara asinkronus, 
// maka await adalah sebagai tanda berhenti sementara hingga operasi asinkronus diselesaikan. 
// Jika promise fetchData menghasilkan resolve maka program akan melanjutkan operasi dibawahnya.
// Jika promise fetchData menghasilkan reject maka program akan dilempar ke catch.

export async function mainTask1 (status){
     fechThen(status);
     await fechAscyn(status);
}