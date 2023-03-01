import React, { useEffect, useState } from 'react';
import Body from '../../components/body';
import Footer from '../../components/footer';
import Header from '../../components/header';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoint';

export default function Home() {
    const [allEvents, setAllEvents] = useState();
    let filteredData = allEvents
    useEffect(() => {

        (makeRequest(GET_ALL_EVENTS)).then((response) => {
            setAllEvents(response)
        })
    }, [])
    if (allEvents) {
        filteredData = allEvents.filter((data) => {
            return data.isBookmarked
        })
        console.log(filteredData);
    }


    return allEvents ?
        <div>
            <Header />
            <Body allEvents={allEvents} />
            <Footer />
        </div>
        : <div>
            Loding...
        </div>

        ;
}