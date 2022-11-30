const parseArgs = () => {
    const parseArgs = process.argv.slice(2);
      console.log(parseArgs.join(' is ').replace(/ is --/gi, ', ').replace(/--/gi, ''));
};

parseArgs();