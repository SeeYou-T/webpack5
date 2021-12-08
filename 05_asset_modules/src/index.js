import method from "./method";
import download from "./assets/download.png";
import svg from "./assets/webpack-logo.svg";
import text from "./assets/test.txt";
import panda from "./assets/panda.jpg";

method();

const img = document.createElement("img");
img.src = download;

document.body.appendChild(img);

// svg
const img2 = document.createElement("img");
img2.style.cssText = "width:600px;height:200px";
img2.src = svg;

document.body.appendChild(img2);

// txt
const block = document.createElement("div");
block.style.cssText = "width:200px;height:200px;background:pink";

block.textContent = text;

document.body.appendChild(block);

// jpg
const img3 = document.createElement("img");
img3.style.cssText = "width:600px;height:200px;display:block";

img3.src = panda;

document.body.appendChild(img3);
