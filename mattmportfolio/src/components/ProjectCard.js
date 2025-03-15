import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4 color="white">{title}</h4>
            <span color="white">{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
