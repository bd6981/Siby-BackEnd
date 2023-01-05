const mongoose = require("./connections");
const Date = require("../model/user");



const dateData = seedDay.map((data) => ({
  day: data.day,
}));

Date.deleteMany({}).then(() => {
  dateData.forEach((date) => {
    Date.insertMany({
      day: date.day,
    })
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  });
});

Task.deleteMany({}).then(() => {
  for (let i = 0; i < seedTask.length; i++) {
    Task.create(
      {
        title: seedTask[i].title,
        isCompleted: seedTask[i].isCompleted,
        dayIndex: seedTask[i].dayIndex,
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
