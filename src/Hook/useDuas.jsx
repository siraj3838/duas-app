
import { useEffect, useState } from "react";

const useDuas = () => {
    const [duas, setDuas] = useState({})
    useEffect(() => {
       fetch('/duasApi.json')
       .then(res => res.json())
       .then(data => setDuas(data))
    }, [])

    return [duas, setDuas]
};

export default useDuas;