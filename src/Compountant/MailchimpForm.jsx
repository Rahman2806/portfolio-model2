import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';

export default function MailchimpForm() {
    // Construct the Mailchimp URL with environment variables
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <Newsletter
                    status={status}
                    message={message}
                    subscribe={subscribe}  // Pass the subscribe function directly
                />
            )}
        />
    );
}
