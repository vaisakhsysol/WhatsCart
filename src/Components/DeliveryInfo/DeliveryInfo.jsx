import React from "react"
import CartBill from "../CartBill/CartBill";
import './DeliveryInfo.css'
import { MdMyLocation } from "react-icons/md";



const DeliveryInfo = () => {
  return (
    <div>
      <h3>DELIVER TO YOUR DOORSTEP </h3>
      <h5>DELIVERY INFORMATION </h5>
      <div className="deliveryInfoContainer">
        <div className="deliveryInputsContainer">
            <div className="delveryNameContainer">
                <div className="deliveryName">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div className="deliveryPhone">
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                </div>
            </div>

            <div className="delveryAddressContainer">
                <label htmlFor="">Addres</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="delveryLandmarkContainer">
                <div className="deliveryLadmarkName">
                    <label htmlFor="">Landmark</label>
                    <input type="text" />
                </div>
                <div className="deliveryStreetName">
                    <label htmlFor="">Streetname</label>
                    <input type="text" />
                </div>
            </div>

            <div className="delverypincodeAndLocationContainer">
                <div className="deliveryPincode">
                    <label htmlFor="">Pincode</label>
                    <input type="text" />
                </div>
                <div className="deliveryGPS">
                    <button className="gpsLocationForDelivery">
                        <MdMyLocation className="locationIcon"/>
                        Get Current Location
                    </button>
                </div>
            </div>

            <button className="addAnAddressBtn">Add this Address </button>

            
        </div>

        <div className="alreadySavedAddressesContainer">
            <h4>Choose from Old Addresses</h4>
            
            <div className="radioAndSelectedAdderss">
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true} />
                            <div>
                               <p>Pukkattupady - Perumbavoor Rd</p>
                               <p>Thadiyittaparambu</p>
                               <p>Kerala, 626605</p>
                               <p>0484 268 2260</p>
                            </div>
                            
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2" checked={false}/>
                            <div>
                            <p>Pukkattupady - Perumbavoor Rd</p>
                               <p>Thadiyittaparambu</p>
                               <p>Kerala, 626605</p>
                               <p>0484 268 2260</p>
                            </div>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3" checked={false}/>
                            <div>
                            <p>Pukkattupady - Perumbavoor Rd</p>
                               <p>Thadiyittaparambu</p>
                               <p>Kerala, 626605</p>
                               <p>0484 268 2260</p>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
      </div>
      <div>
        <CartBill/>
      </div>

      {/* <div className="continurToPayButton">
        <button >Continue to Pay</button>
      </div> */}
    </div>
  )
};

export default DeliveryInfo ;
