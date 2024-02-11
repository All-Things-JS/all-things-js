const fs = require('fs');

// Updated list of files
const files = [
    "gitWorkshop_1.jpg", "gitWorkshop_2.jpg", "gitWorkshop_3.jpg",
    "gitWorkshop_4.jpg", "gitWorkshop_5.jpg", "gitWorkshop_6.jpg",
    "gitWorkshop_7.jpg", "gitWorkshop_8.jpg", "gitWorkshop_9.jpg",
    "gitWorkshop_10.jpg"
];

// Function to rename files with "022024" and leading '0' for single digits
const renameFilesWithInsertion = () => {
    files.forEach((file, index) => {
        const paddedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`; // Add leading '0' for single digits
        const newFileName = file.replace(/gitWorkshop_(\d+)\.jpg$/, `gitWorkshop_022024_${paddedIndex}.jpg`);
        fs.rename(file, newFileName, (err) => {
            if (err) throw err;
            console.log(`${file} => ${newFileName}`);
        });
    });
};

// Execute the rename function
renameFilesWithInsertion();
