import api from "../api/axios";

const getToken = () => 
    localStorage.getItem("token");

export const getMessages = async (
    userId 
) => {
    const res = await api.get(
            `/messages/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );

        return res.data;
    };

export const sendMessage = async (
        userId,
        text 
    ) => {
        const res = await api.post(
            `/messages/send/${userId}`,
            { text },
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        return res.data;
    }
