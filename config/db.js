var mongoose = require('mongoose');

function dbConnect() {
  main().catch((err) => console.log(err));
  async function main() {
    await mongoose.connect("mongodb://localhost:27017/prieds");
    console.log('database connectedd');
  }
}

module.exports = dbConnect;