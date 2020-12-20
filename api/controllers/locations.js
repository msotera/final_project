const Location = require('../models/location');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const location = await Location.findById(req.params.id);

    res.status(200).json(location);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { location, date } = req.body;

    const user = await User.findById(req.user._id);

    const qt = await Location.create({
      accountID: user.name,
      location,
      region,
      typeOfOpportunity,
      date: new Date(date)
    });

    res.status(200).json({ message: "Location for Photo Opportunity has been created successfully", location: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, location, region, typeOfOpportunity, date } = req.body;
    console.log(req.body);
    const qt = await Location.findOneAndUpdate({ _id: _id }, {
        accountID,
        location,
        region,
        typeOfOpportunity,
        date: new Date(date)
    });

    res.status(200).json({ message: "Location has been updated successfully", location: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Location.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Location has been destroy..err deleted successfully" });
  } catch (error) {
    next(error);
  }
};