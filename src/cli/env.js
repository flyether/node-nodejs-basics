const parseEnv = () => {
    const variable = process.env;
    let arr = []
    for (let key in variable) {
        if (key.includes("RSS_")){
            console.log(key, '=', variable[key] );
        }
    }
};

parseEnv();