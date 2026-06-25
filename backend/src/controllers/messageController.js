import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
    try {
        const {text} = req.body;

        const receiverId = req.params.id;

        const senderId = req.user._id;

        const message = await Message.create({
            senderId,
            receiverId,
            text,
        });

        res.status(201).json(message);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const userToChatId = req.params.id;

        const myId = req.user._id;

        const message = await Message.find({
            $or: [
                {
                    senderId: myId,
                    receiverId: userToChatId,
                },
                {
                    senderId: userToChatId,
                    receiverId: myId,
                },
            ],
        }).sort({ createdAt: 1 });

        res.status(200).json(message);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};