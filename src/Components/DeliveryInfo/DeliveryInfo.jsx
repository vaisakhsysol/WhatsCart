import {React} from "react"
import CartBill from "../CartBill/CartBill";
import './DeliveryInfo.css'
import { MdMyLocation } from "react-icons/md";
import { useState } from "react";



const DeliveryInfo = () => {

    const [addresses, setAddresses] = useState([
        {
          id: 1,
          address: {
            line1: "Pukkattupady - Perumbavoor Rd",
            line2: "Thadiyittaparambu",
            city: "Kerala",
            pincode: "626605",
            phone: "0484 268 2260",
          },
        },
        {
            id: 2,
            address: {
              line1: "Pukkattupady - Perumbavoor Rd",
              line2: "Thadiyittaparambu",
              city: "Kerala",
              pincode: "626605",
              phone: "0484 268 2260",
            },
          },
          {
            id: 3,
            address: {
              line1: "Pukkattupady - Perumbavoor Rd",
              line2: "Thadiyittaparambu",
              city: "Kerala",
              pincode: "626605",
              phone: "0484 268 2260",
            },
          },
       
      ]);

      const removeAddress = (id) => {
        const updatedAddresses = addresses.filter((addr) => addr.id !== id);
        setAddresses(updatedAddresses);
      };



  return (
    <div>
      {/* <h3>DELIVER TO YOUR DOORSTEP </h3> */}
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
                    {addresses.map((addr) => (
              <div className="radio" key={addr.id}>
                <label>
                  <input
                    type="radio"
                    value={`option${addr.id}`}
                    
                  />
                  <div>
                    <p>{addr.address.line1}</p>
                    <p>{addr.address.line2}</p>
                    <p>{addr.address.city}, {addr.address.pincode}</p>
                    <p>{addr.address.phone}</p>
                    <button
                      className="removeBtn"
                      onClick={() => removeAddress(addr.id)}
                    >
                      Remove
                    </button>
                  </div>
                </label>
              </div>
            ))}
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
