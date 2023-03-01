/* eslint-disable react/prop-types */
import React, { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_EVENT } from "../../constants/apiEndPoint";
import './detailCard.css'
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState()
    const [bookMark, setBookMark] = useState(data.isBookmarked)
    const [register, setRegister] = useState(data.isRegistered)
    const handleRegister = () => {
        if (data.areSeatsAvailable) {
            setRegister(!register);
            makeRequest(UPDATE_EVENT(data.id), {
                data: {
                    isRegistered: !register
                }
            })
        }
        else {
            setErrorMessage(!errorMessage)
        }

    }
    const handleClick = () => {
        navigate(`/cardDetails/${data.id}`)
    }
    const handleBookMark = () => {
        makeRequest(UPDATE_EVENT(data.id), {
            data: {
                isBookmarked: !bookMark
            }
        })
        setBookMark(!bookMark)
    }
    return (
        <div >
            <div className="card-conatiner">
                <div>
                    <img onClick={handleClick} src={data.imgUrl} />
                </div>

                <div className="content-container">
                    <div className="title">
                        {data.name}
                    </div>
                    <div className="description">
                        <span>{data.description}</span>
                    </div>
                    <div className="venue">

                        <span>VENUE: {data.venue}</span>
                    </div>
                    <div className="date">
                        <span>DATE: {data.datetime}</span>
                    </div>
                    <div className="bottom-icons">
                        <div>
                            {data.isRegistered && <>
                                <div style={{ padding: "10px" }}>
                                    <i className='fa-solid fa-circle-check' style={{ color: "#A0F3AD", paddingRight: "5px" }} />
                                    <span style={{ color: "#A0F3AD", fontSize: "15px" }}> REGISTERED</span>
                                </div>
                            </>}
                            {
                                !data.areSeatsAvailable && <>
                                    <div style={{ padding: "10px" }}>
                                        <i className=" fa-solid fa-circle-xmark" style={{ color: "#ECECAB", paddingRight: "5px" }} />
                                        <span style={{ color: "#ECECAB", fontSize: "15px" }}>NO SEATS AWAILABLE</span>
                                    </div>

                                </>
                            }
                        </div>

                        <div className="bookmark-container">
                            <i onClick={handleBookMark} className={bookMark ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} style={{ color: "#EA8282", padding: "10px" }} />
                        </div>
                    </div>
                    <div onClick={handleRegister} className="register-button">
                        <div>{register ? 'UNREGISTER' : 'REGISTER'}</div>


                        {errorMessage && <>
                            <div style={{ height: "10px", width: "fit-content", backgroundColor: "Highlight" }} className="error-message">
                                <span >Cannot Register: No seats available</span>
                            </div>
                        </>}



                    </div>
                </div>

            </div>
        </div >
    );
}