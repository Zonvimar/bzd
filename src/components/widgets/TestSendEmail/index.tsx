'use client'

import React from "react";

const TestSendEmail = () => {
    const [response, setResponse] = React.useState<{accepted: string}>({accepted: '0'});

    const sendEmail = () => {
        fetch('/api/emails', {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                setResponse(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handelClick = (e: any) => {
        e.preventDefault()
        sendEmail()
    }

    return (
        <div>
            <button onClick={sendEmail}>Send email</button>
            <p>{response.accepted}</p>
        </div>
    )
}

export default TestSendEmail;