const fs = require('fs');
const path = require('path');

const bigJson = require('big-json');
// const bfj = require('bfj');

const filePath = path.join(__dirname, 'bigFile.json');

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const parsedData = JSON.parse(data);
    console.log(`Number of chars loaded from the JSON file: ${data.length}`);

    const start = Date.now();
    const bigJsonStringifiedData = await bigJson.stringify({ body: parsedData });
    console.log(`Big JSON stringified data number of chars: ${bigJsonStringifiedData.length}`);
    const duration = Date.now() - start;
    console.log(`Big JSON stringify took time: ${duration}ms (or ${duration / 1000}s)`);

    // const bfjStart = Date.now();
    // const bfjStringifiedData = await bfj.stringify(parsedData);
    // console.log(`BFJ stringified data number of chars: ${bfjStringifiedData.length}`);
    // const bfjDuration = Date.now() - bfjStart;
    // console.log(`BFJ stringify took time: ${bfjDuration}ms (or ${bfjDuration / 1000}s)`);

    // The following is expected to fail with a RangeError: "Invalid string length"
    const stringifiedData = JSON.stringify(parsedData, null, 2);
    console.log(`Stringified data number of chars: ${stringifiedData.length}`);
});
