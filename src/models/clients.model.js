const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientsSchema = Schema(
  {
    identification: { 
      type: String,
      required: true,
    },
    name: { 
      type: String,
      required: true,
    },
    lastName: { 
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: { 
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("clients", clientsSchema);