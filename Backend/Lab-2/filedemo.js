import fs from "node:fs/promises";
//WE USE FS MODULE IN THIS

const filePath = "user_data.txt";

//1. CREATE (Write a new file or overwrite an existing one)
async function createFile(content) {
    try{
        await fs.writeFile(filePath,content,"utf8");
        console.log("File created successfully!");
    }catch (err){
        console.error("Error creating file:",err);
    }
    
}

//2. READ (Fetch content from the file)
async function readFile() {
    try{
        const data = await fs.readFile(filePath,"utf8");
        console.log("File Content:\n",data);
        return data;
    } catch (err){
        console.error("Error read file:",err);
    }
    
}

//3. UPDATE (Append new content to the existing file)
async function updateFile(content) {
    try{
        const data= await fs.appendFile(filePath,content,"utf8");
        console.log("File updated successfully!");
        return data;
    } catch (err){
        console.error("Error updating file:",err);
    }
}

//4. DELETE
async function deleteFile(){
    try{
        const data= await fs.unlink(filePath,"utf8");
        console.log("File deleted sucessfully!");
        return data;
    } catch (err){
        console.error("Error updating file:",err);
    }
}

//Execution Flow Example

// async function runDemo() {
//     await createFile("Hello world! This is the first line.");
//     await readFile();
//     await updateFile("THis line was appended later.")
//     await readFile();
// }
// runDemo();
createFile("Hello world!");
updateFile("This is updated text")
deleteFile();