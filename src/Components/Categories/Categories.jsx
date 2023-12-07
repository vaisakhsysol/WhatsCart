import categories from '../Assets/categories';
import './Categories.css'
import { IoMdLaptop } from "react-icons/io";
import { IoTimerOutline,IoNewspaperOutline,IoGiftOutline } from "react-icons/io5";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { TbWorldPlus } from "react-icons/tb";



const iconComponents = {
    IoMdLaptop,
    IoTimerOutline ,
    IoGiftOutline,
    PiDesktopTowerDuotone ,
    TbWorldPlus,
    IoNewspaperOutline

  };

let Categories=()=>{
    return(
        <div className='categoriesContainerMain'>
            <ul className="categoriesContainer">
                {
                    categories.map((cats,i)=>{
                        const IconComponent = iconComponents[cats.icon];
                        return <li key={i} className='CategoryListItems'>
                        <div className='categoryLogo'>
                            {IconComponent && <IconComponent />}
                        </div>
                        <div>
                            <p> {cats.label} </p>
                        </div>
                    </li>
                        
                    })
                }
                
            </ul>
        </div>
    )
}

export default Categories