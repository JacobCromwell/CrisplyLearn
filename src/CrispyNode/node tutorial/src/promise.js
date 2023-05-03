
const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    // ...
    if (operationSuccessful) {
      resolve(result);
    } else {
      reject(reason);
    }
  });
    