/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './body.css'
import Card from '../card';

export default function Body({ allEvents }) {
    const [data, setData] = useState(allEvents)
    const [showOptions, setShowOptions] = useState(true);
    const [all, setAll] = useState(true);
    let filteredData = allEvents;
    const handleAll = () => {

        setAll(true)
        setBookmark(false)
        setRegistered(false)
        setSeats(false)
        setData(allEvents)

    }
    const [bookmark, setBookmark] = useState();
    const handleBookMark = () => {
        setBookmark(true)
        setAll(false)
        setRegistered(false)
        setSeats(false)
        filteredData = allEvents.filter((data) => data.isBookmarked)
        setData(filteredData)
    }
    const [registered, setRegistered] = useState();
    const handleRegister = () => {

        setRegistered(true)
        setSeats(false)
        setAll(false)
        setBookmark(false)

        filteredData = allEvents.filter(data => data.isRegistered)
        setData(filteredData)
    }
    const [seats, setSeats] = useState();
    const handleSeats = () => {
        setSeats(true)
        setAll(false)
        setBookmark(false)
        setRegistered(false)

        filteredData = allEvents.filter((data) => data.areSeatsAvailable)
        setData(filteredData)
    }
    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    // console.log(filteredData)
    // console.log(allEvents)
    return data ? (
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
                    {data.map((eachEvent) => {
                        return <Card key={eachEvent.id} data={eachEvent} />
                    })}
                </div>


            </div>
        </div>
    ) : <div>loding...</div>;

}