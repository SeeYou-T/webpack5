import method from "./method";
import download from "./assets/download.png";
import svg from "./assets/webpack-logo.svg";
import text from "./assets/test.txt";
import panda from "./assets/panda.jpg";
import "./styles.css";
import "./styles.less";
import Data from "./assets/data.xml";
import Notes from "./assets/data.csv";
import yaml from "./assets/data.yaml";
import toml from "./assets/data.toml";
import json5 from "./assets/data.json5";

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
block.classList.add("block");
block.textContent = text;

document.body.appendChild(block);

// jpg
const img3 = document.createElement("img");
img3.style.cssText = "width:600px;height:200px;display:block";

img3.src = panda;

document.body.appendChild(img3);

document.body.classList.add("container");

// 字体
const span = document.createElement("span");
span.classList.add("icon");
span.innerHTML = "&#xe668";
document.body.appendChild(span);

// xml

console.log(Data);
console.log(Notes);

console.log(yaml);
console.log(toml);
console.log(json5);
