import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter no"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Adress
                </label>
                <input
                  type="text"
                  placeholder="Enter Adress"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Zip-Code
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
      </div>
    </div>
  );
};

export default Checkout;