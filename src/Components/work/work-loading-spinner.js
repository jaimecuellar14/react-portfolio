import { CircularProgress } from '@material-ui/core';
import "../../styles/work.css";
const WorkLoadingSpinner = () =>{
    return(
        <div className="loading-spinner">
            <CircularProgress color="secondary"/>
            <p style={{color:"white"}}>Getting Github repositories</p>
        </div>
    )
}

export default WorkLoadingSpinner;