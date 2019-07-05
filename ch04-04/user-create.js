const postUser = (params, callback) => {
  setTimeout(() => {
    params.id = userData.length + 1;
    userData.push(params)
    callback(null, params);
  }, 1000);
};
