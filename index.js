// Import the built-in fs and readline modules to interact with the file system and to handle user input via command line
import fs from "fs";
import readline from "readline";

// Create a readline interface to read from standard input and write to standard output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to create a text file with user-defined name and content
const fileCreation = () => {
  rl.question("Enter file name: ", (filename) => {
    rl.question("Enter file content: ", (content) => {
      // Write the content to a new .txt file using fs.writeFile
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.error("Error writing the file: ", err.message);
        } else {
          console.log(`File ${filename}.txt created successfully!`);
        }
      });
      // Close the readline interface after operation
      rl.close();
    });
  });
};

// Start the file creation process
fileCreation();
