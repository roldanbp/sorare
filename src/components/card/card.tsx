import './styles/index.scss';
import { CardProps }  from "../../types/Cards"

const namespace = "card";

const Card = (card : CardProps) => {
    
    return <div className={namespace}>
        <div className={`${namespace}__club`}>
          <div className={`${namespace}__season`}>
            <h3 className={`${namespace}__season-name`}>{card.season.name}</h3>
            <h3 className={`${namespace}__season-serial`}><span className='stand-out'>{card.serialNumber}</span> / 100</h3>
          </div>
          <div className={`${namespace}__detail`}>
            <img className={`${namespace}__detail-img`}src={card.team.pictureUrl} alt="club" />
            <h3 className={`${namespace}__detail-number`}>{card.shirtNumber}</h3>
          </div>
        </div>
        <img className={`${namespace}__img`} src={card.player.pictureUrl} alt={`${card.player.firstName} ${card.player.lastName}`} />
        <div className={`${namespace}__player`}>
          <div className={`${namespace}__player-info`}>
            <h3 className={`${namespace}__player-info-title`}>Age</h3>
            <h3 className={`${namespace}__player-info-content`}>{card.age}</h3>
          </div>
          <div className={`${namespace}__player-info`}>
            <h3 className={`${namespace}__player-info-title`}>Position</h3>
            <h3 className={`${namespace}__player-info-content`}>{card.position}</h3>
          </div>
          <div className={`${namespace}__player-info`}>
            <h3 className={`${namespace}__player-info-title`}>Country</h3>
            <img className={`${namespace}__player-info-img`} src={card.player.country.flagUrl} alt="country" />
          </div>
        </div>
    </div>
}

export default Card;