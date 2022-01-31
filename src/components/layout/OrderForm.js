import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const OrderForm = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="order-form">
            <div className="container o-f" data-aos="fade-down">
            <h2>Request Demo</h2>
            <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br/> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            <form>
                <input type="text" className="name" placeholder="Full Name" required/>
                <input type="tel" className="name" placeholder="Phone Number" required/>
                <input type="submit" value="Request Demo" className="btn btn-primary btn-form"/>
            </form>
            </div>
        </div>
    )
}

export default OrderForm;
