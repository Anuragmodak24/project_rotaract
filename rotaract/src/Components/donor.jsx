import React, { useState } from "react";
import axios from "axios";

const year = ['1900','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023']
const donorData=(donor)=>{
  axios
  .post("http://127.0.0.1:8001/v1/api/donate",donor)
.then((res)=> alert(res.data))
.catch((err)=> alert(err.message))
}
export const Donate = () => {
    const [donor, setDonor] = useState({
        name: "",
        gender:"",
        birthyear:"",
        mobile:"",
        email: "",
        address: "",
      });

    const handleInput = (e) => {
      const {name,value}=e.target
      setDonor({...donor,[name]:value})

    }
    const handleSign = (e) => {
      e.preventDefault()
      donorData(donor)
      setDonor({
        name: "",
        gender:"",
        birthyear:"",
        mobile:"",
        email: "",
        address: "",
      })
    }

    return(
        <>
        <div style={{ width: '50%', margin: '0 auto' }}>
        <form onSubmit={handleSign}>

        <div className="mb-3">
          <label htmlFor="inputName4" className="form-label">
            Donor Name
          </label>
          <input
            placeholder="Donor Name"
            type="text"
            className="form-control"
            id="inputName4"
            onChange={handleInput}
            name="name"
            value={donor.name}
          />
        </div>
        <div   className="form-label">
        <label htmlFor="inputGender4">Gender</label>
        <select
         type="input"
         onChange={handleInput}
         name="gender"
         value={donor.gender}
         className="form-control"
         aria-label=".form-select-sm example"
        >
        <option selected>Choose....</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
        </select>
        </div>

        <div className="mb-3">
        <label htmlFor="inputBirth4">Birth Year</label>
        <select
         type="input"
         onChange={handleInput}
         name="birthyear"
         value={donor.birthyear}
         className="form-control"
         aria-label=".form-select-sm example"
        >
        <option selected>Choose....</option>
        {year.map((el)=>(
        <option value={el}>{el}</option>
       ))}
        </select>
        </div>

        <div className="mb-3">
          <label htmlFor="inputMobile4" className="form-label">
            Mobile No.
          </label>
          <input
            placeholder="Enter Your Mobile No."
            type="number"
            className="form-control"
            id="inputMobile4"
            onChange={handleInput}
            name="mobile"
            value={donor.mobile}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail4" className="mb-3">
           Email Id
          </label>
          <input
            placeholder="Enter Your Email Id"
            type="email"
            className="form-control"
            onChange={handleInput}
            name="email"
            value={donor.email}
            id="inputEmail4"
          />
        </div>

        <div className="mb-3">
        <label htmlFor="inputEmail4" className="mb-3">
            Address
          </label>
                <textarea
                  className="form-control"
                  placeholder="Address"
                  onChange={handleInput}
                  name="address"
                  value={donor.address}
                />
              </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-danger"
          onClick={handleSign}
          style={{ backgroundColor: '#cf3683', margin: '5px' }}>
           SUBMIT
          </button>
        </div>
      </form>
      </div>
        </>
    );
}