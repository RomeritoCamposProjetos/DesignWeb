
let library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

function sort (array, key) {

    for (let i = 0; i < array.length; i++) {
        let minimo = array[i];
        let pos = i;
        for (let j = i+1; j < array.length; j++) {
            const element = array[j];
            if (element[key] < minimo[key]) {
                minimo = element;
                pos = j;
            }
        }
        array[pos] = array[i];
        array[i] = minimo;
    }

}


// sort(library, 'libraryID')
// console.log(library)

library.sort ((a, b) => {
    return a.libraryID - b.libraryID;
});

