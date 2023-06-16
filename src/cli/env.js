const parseEnv = () => {

//     const variable = Object.entries(process.env).reduce((acc, [key, val]) => {
//     if(key.includes('RSS_')) {
//        acc.push(`${key} = ${val}`);
//     }
//     return acc;}, []);  
// console.log(variable.join('; '));

    // second method
    let arr =[]
    const variable = process.env;
    for (let key in variable) {
        if (key.startsWith('RSS_')){
            arr.push(`${key} = ${variable[key]}`);
        }
    }
    console.log(arr.join('; '));
};

parseEnv();
