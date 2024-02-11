import http from "node:http";
import fs from "node:fs";

const hostname = "127.0.0.1";
const port = 3000

const server = http.createServer((req, res) => {
  const path = getPath(req);

  let data = "request failed!";
  if (path.endsWith(".js")) {
    data = readFile("." + path);
  } else {
    data = readIndexHtml(path);
    res.setHeader("Content-Type", "text/html");
  }

  if (!data) {
    res.statusCode = 404;
    res.end();
    return;
  }
  
  res.statusCode = 200;
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function getPath(req) {
  return req.url;
}

function readFile(path) {
  console.log(path);
  const file_path = new URL(path, import.meta.url).pathname;
  console.log(file_path);

  try {
    return fs.readFileSync(file_path, "utf8");
  } catch (err) {
    console.error(err);
  }
}

function readIndexHtml(requestPath) {
  let data = readFile("./index.html");

  data = data.replace('{path}', requestPath);
  
  return data;
}