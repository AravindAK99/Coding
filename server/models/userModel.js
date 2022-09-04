var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    password: String,
    email: String,
    role: String, //student, batchmanager, admin
    enabled: Boolean,
    deleted: Boolean,
    deletedAt: Date,
  },
  { timestamps: true }
);

userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("user", userSchema);
