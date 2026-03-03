import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Disable on mobile devices where a cursor doesn't make sense
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configuration for smooth follow effect
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isMobile) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor on clickable elements
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* Outer glow aura */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] border border-primary/40 bg-primary/10 backdrop-blur-[1px]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.2 }}
            />
            {/* Exact dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] shadow-[0_0_8px_rgba(234,88,12,0.8)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1, // small dot vanishes while outer aura expands
                }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};
