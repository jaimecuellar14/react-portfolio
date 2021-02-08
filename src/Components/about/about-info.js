const { Button } = require("@material-ui/core")

const AboutInfo = () => {

    const showCV = () => {
        window.open("https://drive.google.com/file/d/1swTK1rzVOVlz3Yzn3lSpe6RBJLjpmCL4/view?usp=sharing");
    }
    return(
        <div className="about-info">
            <p className="about-introduction">
                I'm Jaime a hard-working young man.

                I consider myself as a person who gives his 100% to everything he is pasionate about.
                <br/>
                Luckily I found the IT world and i fell in love with it.<br/><br/>
                My journey starts 4 years ago when I decided to study informatic engineering and flew
                from El Salvador to Spain with the objective of obtaining a good education and a better
                future. <br/><br/>

                After my first of university year I decided to apply for a scholarship. I got a 50% scholarship
                and few months later I got hired to do an intership at Netkia, that covered the other 50%.
                I was so happy and proud to be the selected one to join Netkia.

                <br/><br/>
                With basic skills I joined the mobile app development team, where I grew up so much in terms of web
                development skills mainly because the applications were developed with AngularJS and PHP as the backend.

                <br/><br/>

                But you can check my CV and get more information.
            </p>
            <div className="downloadCV-button">
                <Button variant="contained" color="primary" onClick={showCV}>
                    Check CV out
                </Button>
            </div>
        </div>
    )
}

export default AboutInfo;