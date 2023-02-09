import colors from "@/styles/colors";

/**
 * the main section in the layout 
 * 
 */
const Main = ({children}: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default Main;