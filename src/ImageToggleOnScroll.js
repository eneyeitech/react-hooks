import { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [inView, setInView] = useState(false);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    

    useEffect(()=>{
        /*setTimeout(()=>{
        setIsLoading(false);
        },3000);*/
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        };
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    }

    return ( 
        <img
        src={
            isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            : inView ? secondaryImg : primaryImg}
        alt=""
        width='200px'
        ref={imageRef}
        />
     );
}
 
export default ImageToggleOnScroll;