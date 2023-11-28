import { useState, useEffect } from "react";

const useFetch = (url) => { 
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null); 
    
    useEffect(() => { 
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error)); 
    }, [url]); 
        
    return { data, error };
}

export default useFetch;