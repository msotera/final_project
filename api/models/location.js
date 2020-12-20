

const LocationSchema = new mongoose.Schema({
    accountID: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    region: {
        type: String,
        required: true
      },
    typeOfOpportunity: {
        type: String,
        required: true
      },
    date: {
      type: Date,
      default: new Date(),
      required: true
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Location', LocationSchema);