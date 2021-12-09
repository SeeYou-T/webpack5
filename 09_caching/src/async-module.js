function getComment(params) {
  return import("lodash").then(({ default: _ }) => {
    const element = document.createElement("div");
    element.innerHTML = _.join(["哈哈", "webpack"], ">>");
    return element;
  });
}

getComment().then((element) => {
  document.body.appendChild(element);
});
