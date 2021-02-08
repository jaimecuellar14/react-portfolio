import React, { useState, useEffect } from 'react';
import Repo from '../Components/work/repo';
import DeployedProjects from '../Components/work/deployed-projects';
import WorkLoadingSpinner from '../Components/work/work-loading-spinner';
import "../styles/work.css";
import WorkSummary from '../Components/work/work-summary';
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
                setRepos(data);
                setLoadingRepos(false)
                console.log(data);
            })
            .catch(error=>console.log(error));
    }
    useEffect(()=>{
        getRepositories();
    },[]);

    if (loadingRepos){
        return(<div className="loading-spinner">
            <WorkLoadingSpinner/>
            </div>);
    }
    if(repos){
        return(
            <div className="work-container">
                <div className="work-summary">
                    <WorkSummary/>
                </div>
                <div className="deployed-projects">
                    <h1>Deployed projects</h1>
                    <DeployedProjects/>
                </div>
                <h1 className="github-title">Github repositories</h1>
                <div className="repos-container">
                    <Repo repos={repos}/>
                </div>
            </div>
        )
    }
    return(
        <div></div>
    )
}

export default Work;