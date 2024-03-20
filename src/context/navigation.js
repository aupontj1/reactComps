import { createContext, useState, useEffect } from "react";

// Context to create children prop
const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // UseState to determine currentPath, param = current pathname
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    /* UseEffect Func to determine current pathname 
    (whether clicking forward or backward)*/
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler)
        }

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }


    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}
    


export {NavigationProvider};
export default NavigationContext;