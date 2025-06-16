# Node.js File Creator CLI

This is a simple command-line tool built with Node.js that allows you to create `.txt` files by entering a filename and its content through the terminal.

## 📌 Features

- Takes input for the file name
- Takes input for the file content
- Creates a `.txt` file with the given content
- Uses Node.js built-in modules only (`readline` and `fs`)

## 🛠 Technologies Used

- Node.js
- `readline` for command-line interaction
- `fs` for writing files to the filesystem

## 🚀 How to Run

1. **Clone the repository**

```bash
git clone https://github.com/dadhichvansh/cli-file-creation-app-nodejs.git
cd cli-file-creation-app-nodejs
```

2. Run the app using Node.js

```bash
   node index.js
```

4. Follow the prompts

```bash
Enter file name: myfile
Enter file content: Hello from Node.js!
File myfile.txt created successfully!

```

You’ll now see myfile.txt created in your current directory with your input content.

## 📁 Project Structure

```bash
file-creator-cli/
│
├── index.js # Main script to run
├── README.md # Project documentation
```

## 📌 Notes

The file is created in the same directory where the script is executed.

Only .txt files are created for simplicity.

## 🙌 Contributing

Want to add support for other file types, file reading, or appending content? Feel free to fork the project and enhance it!

## 📄 License

This project is open source and free to use under the MIT License.
