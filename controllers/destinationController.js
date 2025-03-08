import Destination from "../models/DestinationModel.js";

// Get all destinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get a random destination
export const getRandomDestination = async (req, res) => {
  try {
    const count = await Destination.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomDestination = await Destination.findOne().skip(randomIndex);
    
    if (!randomDestination) {
      return res.status(404).json({ message: "No destinations found" });
    }

    res.status(200).json(randomDestination);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
