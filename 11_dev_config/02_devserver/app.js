fetch("/api/test")
  .then((res) => res.text())
  .then((res) => {
    console.log(res);
  });
