const getUsers = callback => {
  setTimeout(() => {
    callback(null, [
      {
        id: 1,
        name: "Takuya Tejima"
      },
      {
        id: 2,
        name: "Yohei Noda"
      }
    ]);
  }, 1000);
};

