import React from "react"
import './UserPayments.css'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa6";
import { AiOutlineBank } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";



const UserPayments = () => {
  return (
    <div>
      <div>
      <form>
        <h3>Payment Method</h3>
        <p> in this section you are choosing the default payment Method</p>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
              UPI Transaction

          </label>
          <MdOutlineQrCodeScanner />
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            GPAY Transaction
          </label>
          <FaGooglePay />

        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Net Banking
          </label>
          <AiOutlineBank />

        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Cash On Delivery
          </label>
          <TbTruckDelivery />

        </div>


      </form>
      </div>
    </div>
  )
};

export default UserPayments;
