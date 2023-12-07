import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carouselAdds from '../Assets/carouselAdds';
import './Carousel.css'
import { Link } from 'react-router-dom'


let Carousel=()=>{

    const options = {
        item : 1,
        loop : true,
        autoplay : true, 
        autoplayTimeout : 4000 ,
        dots:true,
        nav :false,

        responsive:{
            1100:{
                items: 2,
            },
            724 : {
                items : 2,
            },
            500 : {
                items : 1,
            }
        }
    }


    return(
        <div className='carouselContainer'>
            <h5>Top Offers Right Now</h5>
        <OwlCarousel className='owl-theme owlContainer' {...options}>
            {
                carouselAdds.map((item,i) =>{
                    return <div key={i} className='item'>
                        <Link to={`/Offers/`}>  
                          <img src={item.img} alt="" />
                        </Link>
                </div>
                })
            }
    </OwlCarousel>
        </div>
        
    )
}

export default Carousel