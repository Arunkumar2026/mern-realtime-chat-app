import Message from "../models/Message.js";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({
            _id: { $ne: req.user._id },
        }).select("-password");

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};