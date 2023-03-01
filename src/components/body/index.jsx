import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
import './body.css'
export default function Body() {
    const [showOptions, setShowOptions] = useState(true);
    useEffect(() => {
        makeRequest(GET_ALL_EVENTS).then((response) => {
            console.log(response)
        })
    }, [])
    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

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
                                <i className='fa-solid fa-circle-dot' />
                                <span>ALL</span>
                            </div>
                            <div className='option'>
                                <i className='fa-regular fa-circle' />
                                <span>REGISTERED</span>
                            </div>
                        </div>
                        <div>
                            <div className='option'>
                                <i className='fa-regular fa-circle' />
                                <span>BOOKMARKED</span>
                            </div>
                            <div className='option'>
                                <i className='fa-regular fa-circle' />
                                <span>SEATS AVAILABLE</span>
                            </div>
                        </div>
                    </div>
                </>}
                { }
            </div>
        </div>
    );

}