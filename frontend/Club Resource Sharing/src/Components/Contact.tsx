import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="bg-slate-300 min-h-screen p-8">
            <header className="text-center py-10 bg-slate-600 rounded-lg shadow-lg mb-10">
                <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            </header>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Get in Touch</h2>
                <p className="text-lg mb-4">
                    We are here to help you with any questions or concerns you may have about our platform. Whether you need assistance with renting an item, have suggestions for improvements, or just want to learn more about what we do, feel free to reach out to us.
                </p>
                <p className="text-lg mb-4">
                    You can contact us via email, and we will get back to you as soon as possible. We value your feedback and are committed to providing the best possible support to our users.
                </p>
                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                    <p className="text-lg mb-2"><strong>Email:</strong> <a className="text-blue-500 font-bold" href="mailto:spant@knox.edu">spant@knox.edu</a></p>
                </div>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Commitment to You</h2>
                <p className="text-lg mb-4">
                    As the developer of this platform, I, Santosh, am dedicated to ensuring that you have a smooth and enjoyable experience using our service. Your satisfaction is my priority, and I am always looking for ways to improve and enhance the platform based on your feedback.
                </p>
                <p className="text-lg mb-4">
                    Being a freshman at Knox College and an international student from Nepal, I understand the importance of resourcefulness and community support. This project is driven by my passion for technology and my desire to make a positive impact on our college community.
                </p>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Additional Information</h2>
                <p className="text-lg mb-4">
                    If you have any specific questions about how to use the platform, or if you encounter any issues, please do not hesitate to reach out. I am here to assist you and ensure that all your concerns are addressed promptly.
                </p>
                <p className="text-lg mb-4">
                    For detailed information on how to rent items, view available items, or manage your bookings, please refer to our Help Center. Our Help Center contains step-by-step guides and FAQs to help you navigate the platform efficiently.
                </p>
                <p className="text-lg">
                    Thank you for being a part of this community and for supporting the initiative to make resources more accessible and cost-effective for all clubs at Knox College.
                </p>
            </section>
            <footer className="text-center py-10">
                <p className="text-lg">Best regards,</p>
                <p className="text-lg">Santosh</p>
                <p className="text-lg">The ClubSharing Team</p>
            </footer>
        </div>
    );
};

export default Contact;
