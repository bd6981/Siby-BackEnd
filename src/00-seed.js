const mongoose = require("./connections");
const Date = require("../model/user");



const dateData = seedDay.map((data) => ({
  day: data.day,
}));

user.deleteMany({}).then(() => {
  dateData.forEach((date) => {
    Date.insertMany({
      day: date.day,
    })
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  });
});

user.deleteMany({}).then(() => {
  for (let i = 0; i < seedUser.length; i++) {
    User.create(
      {
        title: seedUser[i].title,
        isCompleted: seedUser[i].isCompleted,
        dayIndex: seedUser[i].dayIndex,
      },
      async function (err, res) {
        console.log(res);
        Date.findOne({ day: res.dayIndex }, async function (err, ress) {
          res.day = ress._id;
          await res.save();
        });
      }
    );
  }
});
