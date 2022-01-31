import pdf from "../images/pdf.svg";
import support from "../images/support.svg";

export default function () {
    return <div className="installation">
        <h1 className="installation__title"><span>Bot</span> <span className="installation__title__sub">Installation</span></h1>
        <div className="installation_section">
            <img src={pdf} />
            <h2>PDF Install Instructions</h2>
            <p>An easy to follow installation guide is supplied upon purchase of the bot. This includes how to retrieve API keys for the token sniper as well as details on how to change bot parameters such as purchase amount, etc.</p>
        </div>
        <div className="installation_section">
            <img src={support} />
            <h2>Support</h2>
            <p>If you're still having trouble getting everything set up we offer free setup over TeamViewer to help you get it up and running. Just send us a message and we're happy to help you out!</p>
        </div>
    </div>
}