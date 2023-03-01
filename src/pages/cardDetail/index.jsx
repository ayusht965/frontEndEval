import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
// import Body from '../../components/body';
import Footer from '../../components/footer';
import { useLocation } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENT_BY_ID } from '../../constants/apiEndPoint';
import DetailCard from '../../components/detailCard'
import './cardDetail.css'

export default function CardDetail() {
    const location = useLocation();
    const [event, setEvent] = useState();
    const id = location.pathname.slice(-1);
    useEffect(() => {
        makeRequest(GET_EVENT_BY_ID(id)).then((response) => {
            setEvent(response)
        })
    })
    return event ? (
        <div>
            <Header />
            <div className='card-detail'>
                <DetailCard data={event} />
            </div>

            <Footer />
        </div>
    ) : (
        <div>Loading...</div>
    );
}