import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import Cyndaquil from "../assets/img/28.svg";
import TrackVisibility from "react-on-screen";



export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Machine Learning Engineer", "Software Engineer", "Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticka = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticka) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Matthew, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Aspiring", "Aspiring ML Engineer" ]'><span className="wrap">{text}</span></span></h1>
                      <p>I'm a Computer Science student at California State University, Long Beach, with a strong passion for software development and machine learning.  
  I enjoy building innovative solutions, whether it's developing intelligent systems, optimizing algorithms, or working on interactive applications.  
  Currently, I'm expanding my knowledge in AI, web development, and system design.</p>
                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={Cyndaquil} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}