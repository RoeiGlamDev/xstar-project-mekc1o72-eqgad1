import { useEffect, useState } from 'react';

const useParallax = (scrollSpeed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        const newOffset = window.scrollY * scrollSpeed; // Calculate new offset based on scroll position
        setOffset(newOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener on unmount
        };
    }, []);

    return offset; // Return the calculated parallax offset
};

export default useParallax;