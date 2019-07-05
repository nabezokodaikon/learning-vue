const userData = [
  {
    id: 1,
    name: "Takuya Tejima",
    description: "東南アジアで働くエンジニアです。"
  },
  {
    id: 2,
    name: "Yohei Noda",
    description: "アウトドア・フットサルが趣味のエンジニアです。"
  }
];

const getUser = (userId, callback) => {
  setTimeout(() => {
    const filteredUsers = userData.filter(user => {
      return user.id === parseInt(userId, 10);
    })
    callback(null, filteredUsers && filteredUsers[0]);
  }, 1000)
};
