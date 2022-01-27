// Adapted from https://usehooks.com/useEventListener/
import { useRef, useEffect, SyntheticEvent } from "react";

const isBrowser = typeof window !== "undefined";
export function useEventListener(eventName: keyof WindowEventMap, handler: (arg0: SyntheticEvent) => Boolean, element = (isBrowser && window)) {
    // Create a ref that stores handler
    const savedHandler = useRef<(arg0: SyntheticEvent) => Boolean>();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        // Make sure element supports addEventListener
        const isSupported = element && element.addEventListener;
        if (!(isSupported && savedHandler && savedHandler.current)) {
            return;
        }

        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => {
            if (!(savedHandler && savedHandler.current)) {
                return;
            }
            savedHandler.current(event);
        }

        // Add event listener
        element.addEventListener(eventName, eventListener);

        // Remove event listener on cleanup
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element] // Re-run if eventName or element changes
    );
}
