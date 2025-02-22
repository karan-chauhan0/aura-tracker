import React from 'react'
import { BiNotification, BiSearch } from "react-icons/bi";
import "./Content.css";

export const ContentHeader = () => {
  return (
    <div className='content--header'>
        <h1 className="header--title">Dashboard</h1>
        <select >
            <option value="">MCA 1st year</option>
            <option value="">MCA 2nd year</option>
        </select>
        <div className="header--activity">
            <div className="search-box">
                <input type="text" placeholder='Search anything here'/>
                <BiSearch className='icon'/>
            </div>
            <div className="notify">
                <BiNotification className='icon'/>
            </div>
        </div>
    </div>
  )
}
