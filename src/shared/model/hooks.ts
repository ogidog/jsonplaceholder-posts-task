import {useEffect, useState} from "react";

export const useLoadNotifier = () => {
    const [skip, setSkip] = useState(true)

    useEffect(() => {
        setTimeout(() => setSkip(false), 1000)
    }, [])

    return skip;
}
