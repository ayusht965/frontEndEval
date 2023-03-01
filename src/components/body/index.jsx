/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './body.css'
import Card from '../card';
// import { useNavigate } from 'react-router-dom';
export default function Body({ allEvents }) {
    // const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(true);
    const [all, setAll] = useState(true);
    let filteredData = allEvents;
    const handleAll = () => {
        if (!all) {
            setAll(true)
            setBookmark(false)
            setRegistered(false)
            setSeats(false)
        }

    }
    const [bookmark, setBookmark] = useState();
    const handleBookMark = () => {
        if (!bookmark) {
            setBookmark(true)
            setAll(false)
            setRegistered(false)
            setSeats(false)
        }
        filteredData = allEvents.filter((data) =>
            data.isBookmarked == true
        )
    }
    const [registered, setRegistered] = useState();
    const handleRegister = () => {
        if (!registered) {
            setRegistered(true)
            setSeats(false)
            setAll(false)
            setBookmark(false)
        }
        filteredData = allEvents.filter((data) =>
            data.isRegistered == true
        )
    }
    const [seats, setSeats] = useState();
    const handleSeats = () => {
        if (!seats) {
            setSeats(true)
            setAll(false)
            setBookmark(false)
            setRegistered(false)
        }
        filteredData = allEvents.filter((data) =>
            data.areSeatsAvailable == true
        )
    }
    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    console.log(filteredData)
    return (
        <div>
            <div className='body-container'>
                <div className='body-header'>
                    <div className='filter-container'>
                        <i className="fa-solid fa-filter"></i>
                        <span>FILTER</span>
                        <i onClick={handleShowOptions} className={showOptions ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'} />
                    </div>
                    <div className='search-container'>
                        <form onSubmit={handleSubmit}>
                            <input className='input' type='text' onChange={handleChange} placeholder='EVENT NAME' />
                            <i type='submit' className='fa-solid fa-magnifying-glass' />
                        </form>
                    </div>
                </div>
                {showOptions && <>
                    <div className='filter-options'>
                        <div>
                            <div className='option'>
                                <i onClick={handleAll} className={all ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'} />
                                <span>ALL</span>
                            </div>
                            <div className='option'>
                                <i onClick={handleRegister} className={registered ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'} />
                                <span>REGISTERED</span>
                            </div>
                        </div>
                        <div>
                            <div className='option'>
                                <i onClick={handleBookMark} className={bookmark ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'} />
                                <span>BOOKMARKED</span>
                            </div>
                            <div className='option'>
                                <i onClick={handleSeats} className={seats ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'} />
                                <span>SEATS AVAILABLE</span>
                            </div>
                        </div>
                    </div>
                </>}
                <div className='cards'>
                    {filteredData.map((eachEvent) => {
                        return <Card key={eachEvent.id} data={eachEvent} />
                    })}
                </div>


            </div>
        </div>
    );

}