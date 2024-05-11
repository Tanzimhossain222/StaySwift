const fs = require('fs');
const path = require('path');

const directoryPath = './components'; // Change this to your directory path

function renameFiles(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    renameFiles(filePath); // Recursively rename files in subdirectories
                } else if (file.endsWith('.jsx')) {
                    const newFileName = file.replace('.jsx', '.tsx');
                    const newFilePath = path.join(directoryPath, newFileName);

                    fs.rename(filePath, newFilePath, err => {
                        if (err) {
                            console.error('Error renaming file:', err);
                            return;
                        }
                        console.log(`Renamed ${file} to ${newFileName}`);
                    });
                }
            });
        });
    });
}

renameFiles(directoryPath);
