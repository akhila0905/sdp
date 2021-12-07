import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';

import img1 from './op2.jpg_1088Wx1632H';
import img2 from './op1.jpg';
import img3 from './op3.jpg';
const Home=()=>
{
    useEffect(()=>{
Aos.init(); 
    },[])

    return(
       <section className="py-4 py-lg-5 container">
           <div className="row">
           <Card aos="zoom-in" aos_offset="100" img={img1} title="Sketchers" link="https://www.shoppersstop.com/skechers-synthetic-on-the-go-600-glistening-womens-slippers/p-FWSK-16259-NV"/>
           <Card aos="zoom-in" aos_offset="100" img={img2} title="Lakme" link="https://poutprettty.blogspot.com/2013/06/lakme-launches-1st-ever-sculpting.html"/>
           <Card aos="zoom-in" aos_offset="100" img={img3} title="Sweater" link="https://www.indiamart.com/proddetail/men-high-neck-woolen-sweater-19325327848.html" />
           </div>
       </section>
    )
}
export default Home;
