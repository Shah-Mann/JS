const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 100);
  });

const processData = async () => {
  let data = await getDataPromise("1c");
  data = await getDataPromise(data);
  return data;

  //console.log(data);
  // getDataPromise(2).then((data) => {
  //   console.log(data);
  // });
};

processData()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
