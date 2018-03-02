let a = [2, 3, 3, 1, 5, 2, 3, 3, 4, 4];

function findDuplicates(data) {

    let result = [];

    for (let index=0; index < a.length; index++) {

        let element = a[index];
        let count = 0;

        for (let value of a) {
            if (element === value) {
                count += 1;
            }
        }
        result.push(`${a[index]} occurs ${count} times.`);
    }
    
    for (let value of Array.from(new Set(result))) {
        console.log(value);
    }
}

findDuplicates(a);
