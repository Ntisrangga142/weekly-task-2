import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import  fs from 'fs';
import path from 'node:path';

const rl = readline.createInterface({ input, output });

export async function menu (){
    while(true){

        console.log("===== Menu =====");
        console.log(`1. Menambah  File`);
        console.log(`2. Menghapus File`);
        console.log(`3. Mengubah  File`);
        console.log(`4. Melihat   File`);
        console.log(`5. Exit`);
        console.log()

        let answer = await rl.question('> ');

        switch (Number(answer)){
            case 1:
                await addFile ();
                break;
            case 2:
                await deleteFile ();
                break;
            case 3:
                await editFile ();
                break;
            case 4:
                await readFile ();
                break;
            case 5:
                rl.close();
                break;
            default:
                console.log("Input Anda Salah;");
                console.log()
                break;
        }

        if(Number(answer) == 5) break;

    }
}

async function addPath() {
    let answerPath = await rl.question('Nama File :');
    answerPath += '.txt';

    const pathfile = path.join(import.meta.dirname, 'src', answerPath)
    
    return pathfile;
}

async function addContent() {
    let content = await rl.question('Content :');
    
    return content;
}

async function addFile (){

    const pathfile = await addPath (); 
    
    if(fs.existsSync(pathfile)){
        console.log("File already exist ");
        return menu();
    }

    const content = await addContent();

    fs.writeFile(pathfile, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
    console.log()
    });
}

async function deleteFile (){
    const pathfile = await addPath (); 
    
    if(!fs.existsSync(pathfile)){
        console.log("File not found !");
        return menu();
    }

    fs.unlink(pathfile, (err) => {
    if (err) {
        console.error('Error delete file:', err);
        return;
    }
    console.log('File delete successfully!');
    console.log()
    });


}

async function editFile (){
    const pathfile = await addPath (); 
    
    if(!fs.existsSync(pathfile)){
        console.log("File not found !");
        return menu();
    }

    const content = await addContent (); 

    fs.writeFile(pathfile, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
    console.log()
    });


}

async function readFile (){
    const pathfile = await addPath (); 
    
    if(!fs.existsSync(pathfile)){
        console.log("File not found ");
        return menu();
    }

    fs.readFile(pathfile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}



