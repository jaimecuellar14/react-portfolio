import React, { useState, useEffect } from 'react';
import WorkLoadingSpinner from '../Components/work/work-loading-spinner';

const Work = () => {

    const [ repos , setRepos] = useState();
    const [ loadingRepos, setLoadingRepos ] = useState(false);

    const getRepositories = () =>{
        setLoadingRepos(true);
        console.log(process.env.REACT_APP_GITHUB_TOKEN);
        fetch("https://api.github.com/users/jaimecuellar14/repos?per_page=50",{
            method:"GET",
            headers:{
                Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
            .then(response => response.json())
            .then(data=>{
                setLoadingRepos(false)
                setRepos();
                console.log(data);
            })
            .catch(error=>console.log(error));
    }
    useEffect(()=>{
        getRepositories();
    },[]);

    if (loadingRepos){
        return(<WorkLoadingSpinner/>);
    }
    return(
        <div>
            Work component
        </div>
    )
}

export default Work;