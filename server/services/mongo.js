const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true
    });
};

module.exports = {
  connect
};


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('open', () => {
//   const lesson = new models.Lesson({
//     name: 'Intro',
//     description: 'desc',
//     videoUrl: 'kdjsdfjlf3',
//     textContent: 'text cont',
//     courseId: '1'
//   });
//   console.log(lesson);
// });
//
