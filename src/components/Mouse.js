import React, {useState, useEffect} from 'react'

const Mouse = () => {
    const [mousePosition, setPosition] = useState({x : null, y : null})

    useEffect(() => {
        function handle(e) {
            setPosition({
                x: e.pageX,
                y: e.pageY
            });
        }
        document.addEventListener("mousemove", handle);
        return () => document.removeEventListener("mousemove", handle);
    })
    return mousePosition;
}

export default Mouse
