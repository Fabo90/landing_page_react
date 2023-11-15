import React from "react";
import PropTypes from "prop-types"

const Card = (props) => {
    return (
        <div className="bd-example">
            <div className="card" >
            <img src={props.imgUrl} class="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title fw-bolder">Card title</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    text: PropTypes.string,
    imgUrl: PropTypes.string
}
export default Card;
