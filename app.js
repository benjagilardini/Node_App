const fs = require('fs');

//4 Tareas 
//1-Create a method to get all the files inside given path.
let rootDir = fs.readdirSync('/home/benjag/Documentos/1asd/');

//2-create a method to print all the files.
fs.readdir('/home/benjag/Documentos/1asd/', (err, files) => {
    (err) ? console.log(err) : console.log('Files: ', files);
});

// //3-create a method to sort and  print the files.
fs.readdir('/home/benjag/Documentos/1asd/', (err, files) => {
    (err) ? console.log(err) : console.log('Sorted_Files:', files.reverse());
});

// 4-create a method to get the amount of files starting with one letter.
fs.readdir('/home/benjag/Documentos/1asd/', (err, files) => {
    let count = 0;
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    files.forEach(file => {
        letter.forEach(letra => {
            if (file.startsWith(letra)) {
                count++;
            }
        })
    });
    (err) ? console.log(err) : console.log('Files_start_with_letter:', count);
});
