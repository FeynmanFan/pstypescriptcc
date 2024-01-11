const path = require("path");

module.exports = {
    entry: './temp.js', // Adjust the entry file path
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
    output: {
        filename: './bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    }
};
