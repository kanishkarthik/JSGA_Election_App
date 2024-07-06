const config = {
    serviceApiUrl : import.meta.env.VITE_SCHOOL_SELECTION_SERVICE_API_URL,
    uiAppUrl : import.meta.env.VITE_SCHOOL_SELECTION_UI_URL
}

console.log('API URL:', import.meta.env.VITE_SCHOOL_SELECTION_SERVICE_API_URL); 
console.log('UI URL:', import.meta.env.VITE_SCHOOL_SELECTION_UI_URL); 
console.log('NODE_ENV:', import.meta.env.VITE_NODE_ENV); 

export default config;