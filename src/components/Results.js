import React , {useEffect , useContext} from 'react'
import {useLocation} from  'react-router-dom';
import ReactPlayer from 'react-player';

import ResultContext from '../context/ResultContext'
import Loading from './Loading'

const Results = () => {
    const context = useContext(ResultContext);
    console.log(context);
    const { getResults, results, searchTerm, setSearchTerm, loading } = context;
    const location = useLocation();

    useEffect(() => {
        getResults();
    }, [])

    if(!loading) return  <Loading/>   
    
    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">

                </div>

            )
        case '/images':
            return (
                " "
            )
        case '/videos':
            return (
                " "
            )
        case '/videos':
            return (
                " "
            )
    
        default:
            break;
    }
}

export default Results
