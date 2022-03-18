import React, { useState } from "react";

const Clock = () => {
    const getDate = () => new Date().toLocaleTimeString();

    const [time, setTime] = useState(getDate());

    setInterval(() => setTime(getDate()), 1000);

    return <p>Agora são: {time}</p>
}

export default Clock;