import React, { createContext, useContext, useEffect } from "react";
import categoryService from "../services/categoryService";
// import { Box, CircularProgress } from "@mui/material";


type Category = {
    id: number;
    name: string;
};

type AppContextType = {
    categories: Category[],
    fetchCategories: () => void,
    loading: boolean
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("AppContext must be used within a AppProvider");
    }
    return context;
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    // const [error, setError] = React.useState<string | null>(null);

    const fetchCategories = () => {
        categoryService.getCategories()
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error fetching categories:', error);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            fetchCategories();
        }, 0);
    }, []);

    // if (loading) {
    //     return (
    //         <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //             <CircularProgress />
    //         </Box>
    //     );
    // }

    return (
        <AppContext.Provider value={{ categories, fetchCategories, loading }}>
            {children}
        </AppContext.Provider>
    );
}