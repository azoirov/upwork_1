import website from '../images/website-illustration.png'
import bot from '../images/bot-illustration.png'
import smm from '../images/smm-illustration.png'
import design from '../images/design-illustration.png'
import crm from '../images/crm-illustration.png'
import transaction from "../images/undraw_Stripe_payments_re_chlm.png"
import token from "../images/token.png"
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const Services = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="services" data-aos="zoom-in-up">
            <h2>Services</h2>
            <div className="servcies-content">
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={website} alt=""/>
                    <h3>Live Demo</h3>
                    <p>Share any token launch and we will demostrate "Fast Sniper Bot" for you</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={bot} alt=""/>
                    <h3>Secure</h3>
                    <p>Your private keys are kept on your machine, inaccessible by anyone else. The software is open source so you can verify this for yourself!</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={smm} alt=""/>
                    <h3>Local</h3>
                    <p>The sniper is fully within your control. Everything is local other than standard APIs and the Pancakeswap contract interactions.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={design} alt=""/>
                    <h3>Fast</h3>
                    <p>The bot uses a local node for unmatched, low latency transaction coverage allowing you to act fast.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={crm} alt=""/>
                    <h3>Blocknative Mempool Platform</h3>
                    <p>The bot subscribes and listens out for liquidity add transactions that match the token you have specified.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={transaction} alt=""/>
                    <h3>Transaction Copy</h3>
                    <p>The details of the liquidity add transaction are copied (gas fee, gas limit) so that your own transaction gets mined and confirmed as soon as possible.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={token} alt=""/>
                    <h3>Token Purchased</h3>
                    <p>The transaction is signed by your wallet and private key and a buy order is placed by interacting with the Binance smart chain directly using the Web3 library.
</p>
                </div>
            </div>
            <button className="btn btn-primary btn-service">Order</button>
            <a href="/">Go to services</a>
        </div>
    )
}

export default Services
