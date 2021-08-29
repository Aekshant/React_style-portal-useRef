import classes from './Card.module.css';

const Card = props => {//using `` or $ sign becoz we want to use adduser.css
    //inside card componet declaration inside adduser.js file component
    return (<div className={`${classes.card} ${props.className}`}>{props.children}</div>);
};

export default Card;