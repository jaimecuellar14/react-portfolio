import jaime_jedi from "../../Assets/jaime1.jpg"

const AboutHeader = () =>{
    return(
        <div>
            <div className="about-header-info">
                <h1>Informatic engineer</h1>
                <img src={jaime_jedi} alt="jaime_jedi" style={{height:"50%", width:"50%"}}></img>
            </div>
        </div>
    )
}
export default AboutHeader;