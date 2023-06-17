import fs from "fs";
import basePath from "~/helpers/basePath";

export const uploadFile = (file, path, filename) => {
    const buffer = Buffer.from(file);

    fs.writeFile(basePath + path + filename, buffer,(err) => {
        console.log(err)
    });
}