import jaime from "../Assets/jaime2.jpg";
import "../styles/home.css"
const { Container } = require("@material-ui/core")
const Home = () =>{
    return(
        <div className="home-container">
            <Container maxWidth="sm" className="home-info">
                <div className="item">
                    <a href="/about">
                        <h1 className="label hi new-label">
                            <span>
                                Hi, I am
                            </span>
                        </h1>
                    </a>
                </div>
                <div className="item">
                    <a href="/contact">
                        <h2 className="label jaime new-label">
                            <span>
                                Jaime
                            </span>
                        </h2>
                    </a>
                </div>
                <div className="item">
                    <a href="/work">
                        <h3 className="label cuellar new-label">
                            <span>
                                Cuellar
                            </span>
                        </h3>
                    </a>
                </div>
            </Container>
            <Container maxWidth="sm" className="home-picture">
            </Container>
        </div>
    )
}

export default Home;