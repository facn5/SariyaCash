const fs = require("fs")
const path = require("path")
const querystring = require("querystring")

let exType = {
  html: {
    "Content-Type": "text/html"
  },
  jpg: {
    "Content-Type": "text/jpeg"
  },
  css: {
    "Content-Type": "text/css"
  },
  js: {
    "Content-Type": "application/javascript"
  }
}

const handleHome = (response) => {
  let filePath = path.join(__dirname, "..", "public", "index.html")

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500);
      response.end("There was a server error, please try again later.");
    } else {
      response.writeHead(200, exType.html);
      response.end(file);
    }
  });
}


module.exports = {
  handleHome
};
