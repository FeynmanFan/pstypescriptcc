const path = require("path");

module.exports = {
    entry: './updatechart.js', // Adjust the entry file path
    output: {
        filename: './bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    }
};
