/* eslint-disable react/prop-types */
import React, { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_EVENT } from "../../constants/apiEndPoint";
import './card.css'
import { useNavigate } from "react-router-dom";

export default function Card({ data, bookmark }) {
    const navigate = useNavigate();
    const [bookMarkSate, setBookMarkSate] = useState(data.isBookmarked)
    const handleClick = () => {
        navigate(`/cardDetails/${data.id}`)
    }
    const handleBookMark = async () => {
        await makeRequest(UPDATE_EVENT(data.id), {
            data: {
                isBookmarked: !bookMarkSate
            }
        })
        setBookMarkSate(!bookMarkSate)
    }
    return !bookmark ? (
        <div >
            <div className="card-conatiner">
                <img onClick={handleClick} src={data.imgUrl} />
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
                            <i onClick={handleBookMark} className={bookMarkSate ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} style={{ color: "#EA8282", padding: "10px" }} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    ) : (<>
        {
            bookMarkSate &&
            <div >
                <div className="card-conatiner">
                    <img onClick={handleClick} src={data.imgUrl} />
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
                                <i onClick={handleBookMark} className={bookMarkSate ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} style={{ color: "#EA8282", padding: "10px" }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        }
    </>


    );
}