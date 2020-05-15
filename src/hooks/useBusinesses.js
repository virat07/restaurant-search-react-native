import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, seterrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('in serach api')
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch (e) {
            seterrorMessage('Something Went Wrong')
        }
    };
    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [searchApi, results, errorMessage];
};
