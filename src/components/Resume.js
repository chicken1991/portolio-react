import React, { useState } from 'react';
import PDF from '../assets/benpitroff_resume.pdf';

export default function Resume() {

    return (
        <div>
            <div>
                <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading">Resume</div>
                    </div>
                </header>
            </div>

            {/* Embedded resume PDF */}
            <object width="100%" height="800" data={PDF} type="application/pdf"/>

        </div>
    )

}