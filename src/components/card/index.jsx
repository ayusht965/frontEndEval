/* eslint-disable react/prop-types */
import React, { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_EVENT } from "../../constants/apiEndPoint";
import './card.css'

export default function Card({ data }) {
    const [bookMark, setBookMark] = useState(data.isBookmarked)
    const handleBookMark = () => {
        makeRequest(UPDATE_EVENT(data.id), {
            isBookmarked: !bookMark
        })
        setBookMark(!bookMark)
    }
    console.log(data);
    return (
        <div className="card">
            <div className="card-conatiner">
                <img src={data.imgUrl} />
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
                </div>

            </div>
        </div >
    );
}