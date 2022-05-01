import portfolioCards from './portfolioCards.css'
import ONE from '../../assets/react-one.png'

const PortfolioCards = () => {
    return (

     <div className="card">
            <div className='content-card'>
                <img src={ONE} alt="react-one" className='card-image' />
                <p>Deatils: Lorem lorem lorem</p>
            </div>
            <div className="buttons-demo">
                <button className='btn'>GitHub</button>
                <button className='btn btn-primary'>Demo</button>
            </div>
        </div>
      
   
    );
}

export default PortfolioCards;