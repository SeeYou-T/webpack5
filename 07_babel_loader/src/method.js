function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("哈哈");
    }, 2000);
  });
}

async function method() {
  let string = await getString();
  console.log(string);
}

export default method;
