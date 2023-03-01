import React from 'react';
import Header from '../../components/header';
import './pageNotFound.css'
export default function CardDetail() {
    return (
        <div>
            <Header />
            <div className='error-message'>
                <span>Sorry Page Not Found (Error: 404)</span>
            </div>

        </div>
    );
}