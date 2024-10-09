import "./Card.css";
import "../index.css";

/*
This line defines a functional component named Card using an arrow function.
The component takes props as its argument, which are destructured directly in the parentheses. 
This means image, title, date, and description are extracted from the props object, allowing you to use them directly in the component without needing to reference props.image, props.title, etc.
*/
const Card = ({ image, title, date, description }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="oswald-header card-title">{title}</h2>
          <p className="oswald card-description">{date}</p>
          <p className="oswald card-description">{description}</p>
          <button className="card-button">Continue Reading</button>
        </div>
      </div>
    );
  };
  
  export default Card;