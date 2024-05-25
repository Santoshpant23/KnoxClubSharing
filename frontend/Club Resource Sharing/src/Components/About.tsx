import React from 'react';

const About: React.FC = () => {
    return (
        <div className=" bg-slate-300 text-white min-h-screen p-8">
            <header className="text-center py-10 bg-slate-600 rounded-lg shadow-lg mb-10">
                <h1 className="text-4xl font-bold">About Us</h1>
            </header>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Mission and Vision</h2>
                <p className="text-lg">
                    Our mission is to help clubs at Knox College reuse items to save costs and better utilize their funds. Our vision is to create a sustainable and efficient resource-sharing community within the college.
                </p>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Story</h2>
                <p className="text-lg">
                    Founded by a dedicated solo developer, this project aims to address the financial constraints that clubs at Knox College face. Recognizing that limited funding often prevents clubs from buying necessary items for events, the platform was created to facilitate the reuse of items that other clubs already own.
                </p>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Team</h2>
                <p className="text-lg">
                    Our team currently consists of a solo developer, Santosh, who is a freshman at Knox College, majoring in Computer Science. Santosh is an international student from Nepal and a first-generation college student. His passion for technology and helping the community drives the continuous development of this project.
                </p>
                <p className="text-lg">
                    As the project evolves, more features and improvements will be added to enhance the user experience. Despite being a solo project, Santosh is committed to making a significant impact on the Knox College community through innovative solutions.
                </p>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Services</h2>
                <p className="text-lg">
                    We provide a platform where clubs can rent items from each other. Clubs can list items they have available and see what items other clubs are offering. This helps clubs save money and utilize their resources more efficiently.
                </p>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Values</h2>
                <p className="text-lg">
                    We believe in the power of reuse and the importance of saving money. By sharing resources, clubs can reduce unnecessary spending and make the most out of their limited funding.
                </p>
            </section>
            <section className="bg-white text-black p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Contact Us</h2>
                <p className="text-lg">For more information or assistance, please contact us at:</p>
                <p className="text-lg">
                    Email: <a className="text-blue-500 font-bold" href="mailto:spant@knox.edu">spant@knox.edu</a>
                </p>
            </section>
        </div>
    );
};

export default About;
