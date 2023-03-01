import React from 'react';
import './footer.css';
export default function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='theme-container'>
                    <span className='theme-title'>THEMES</span>
                    <div className='themes' id='th-1'></div>
                    <div className='theme' id='th-2'></div>
                    <div className='theme' id='th-3'></div>

                </div>
                <div className='theme-button'><span className='theme-button-text'>SAVE THEME</span></div>
            </div>
        </div>
    )
}