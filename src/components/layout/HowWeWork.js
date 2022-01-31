import step from '../images/step-illustration.svg'
import problem from '../images/problem-illustration.svg'
import project from '../images/project-illustration.svg'
import success from '../images/success-illustration.svg'
import support from '../images/support-illustration.svg'
import programmingLang from "../images/programming_lang.png"
import updates from "../images/updates.png"
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const HowWeWork = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="h-w-k" data-aos="fade-up">
            <h2>FAQ</h2>
            {/* <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br/> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p> */}
            <div className="h-w-k-container">
            <div className="how-we-work">
            <div className="media">   
            <div className="image"><img src={step} alt=""className="left-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>How does the token sniper work?</span><br/>When a new token gets listed on a new exchange (Pancakeswap) liquidity must be added before people are able to buy and sell the token. The bot scans for this liquidity add transaction in the pending transaction pool (mempool) and places a buy order as soon as it sees it. This means you will be the first / one of the first people to successfully buy the token. <br /><br />The earlier you can purchase a new token the more profit you can make. It's very common to see the price of new tokens rise very fast within the first few seconds / minutes of their launch.
</p>
            </div>
            </div>
            <div className="media flipped"> 
            <div className="image"><img src={problem} alt="" className="right-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>How do I use the bot?</span><br/>Once you've purchased the bot you'll be given a link to download it. It comes with a PDF installation guide that is easy to follow and leads you through the set up process.</p>
            </div>
            </div>
            <div className="media">
            <div className="image"><img src={project} alt="" className="left-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>What coins can the bot snipe?</span><br/>Any new coin listing on Pancakeswap can be sniped.</p>
            </div>
            </div>
            <div className="media flipped"> 
            <div className="image"><img src={success} alt="" className="right-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>What wallet do I use?</span><br/>You'll need a Metamask wallet from which you can retrieve a wallet address and a private key to connect to the bot in the configuration file. Instructions on how to do this are included in the installation PDF provided with the bot.</p>
            </div>
            </div>
            <div className="media">
            <div className="image"><img src={support} alt="" className="left-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>Does the bot sell tokens?</span><br/>The bot only buys the token for the amount that you specify. In order to sell the token you'll need to sell it manually through Pancakeswap.</p>
            </div>
            </div>
            <div className="media flipped"> 
            <div className="image"><img src={programmingLang} alt="" className="right-img pr-lang"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>What programming language is the bot coded in?</span><br/>The bot is coded using the Python programming language. </p>
            </div>
            </div>
            <div className="media">
            <div className="image"><img src={updates} alt="" className="left-img updates-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>Will I receive updates?</span><br/>Any new features added to the bot will become available free of charge to existing customers. </p>
            </div>
            </div>
            </div>
            </div>
            <button className="btn btn-primary" style={{margin: '2rem 0 0.4rem 0',fontWeight: 'bold'}}>Buyurtma Berish</button>
        </div>
    )
}

export default HowWeWork
