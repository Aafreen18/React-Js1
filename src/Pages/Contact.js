import React, { useState } from "react";


const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    msg:''
  });

  const inputEvent = (event) =>{
    const {name,value} = event.target;
    setData((preVal) => {
        return{
          ...preVal,
          [name]:value
        }
      }
    );
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, I am ${data.fullName}. My phone number is ${data.phone} and my gmail is ${data.email}. I want to say "${data.msg}" to all of you for listening me.😊😊`)
  }

  return (
    <>
      <div className="my-5">
        <h3 className="text-center">Contact Us</h3>
      </div>

      <div className="container contact_div">
        <div className="row">
            <div className="col-10 col-lg-6 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                    <input type="text"  className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={inputEvent} placeholder="fullname" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="phone number" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;