import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="title">{props.name}</h4>
        <button className="button">Click</button>
      </div>
      <div className="card-text">
        <p className="cardInfo">
          <span className="cardInfo-bold">Вселенная: </span>
          {props.universe}
        </p>
        <p className="cardInfo">
          <span className="cardInfo-bold">Альтер эго: </span>
          {props.alterego}
          Уилсон
        </p>
        <p className="cardInfo">
          <span className="cardInfo-bold">Род деятельности: </span>
          {props.occupation}
        </p>
        <p className="cardInfo">
          <span className="cardInfo-bold">Друзья: </span>
          {props.friends}
        </p>
        <p className="cardInfo">
          <span className="cardInfo-bold">Суперсилы: </span>
          {props.superpowers}
        </p>
      </div>
      <div className="card-image">
        <img className="image" src={props.url} alt={props.name} />
      </div>
    </div>
  );
}

export default Card;
