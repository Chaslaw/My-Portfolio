import { Fragment } from 'react';
import './portfolio.css';
import PortfolioCards from './PortfolioCards';

const Portfolio = () => {
    return (
        < Fragment>
            <section id='portfolio'>
                <div className="heading">
                    <h5>Check some projects of mine</h5>
                    <h2>React and Vanila JS apps</h2>
                </div>

                <div className="card-row">
                    <PortfolioCards />
                    <PortfolioCards />
                    <PortfolioCards />
                </div>
                <div className="card-row middle">
                    <PortfolioCards />
                    <PortfolioCards />
                    <PortfolioCards />
                </div>
                <div className="card-row">
                    <PortfolioCards />
                    <PortfolioCards />
                    <PortfolioCards />
                </div>
            </section>


        </Fragment>
    );
}

export default Portfolio;