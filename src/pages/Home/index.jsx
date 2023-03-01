import React, { useEffect, useState } from 'react';
import Body from '../../components/body';
import Footer from '../../components/footer';
import Header from '../../components/header';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoint';

export default function Home() {
    const [allEvents, setAllEvents] = useState();

    useEffect(() => {
        (makeRequest(GET_ALL_EVENTS)).then((response) => {
            setAllEvents(response)
        })
    }, [])
    const setNewData = (newData) => {
        setAllEvents(newData)
    }
    return allEvents ?
        <div>
            <Header />
            <Body allEvents={allEvents} setNewData={setNewData} />
            <Footer />
        </div>
        : <div>
            Loding...
        </div>

        ;
}