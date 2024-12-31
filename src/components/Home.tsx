import './Home.css'
import ImageOne from '../assets/image.png'
import SectorOne from '../assets/sectors/SectorOne.jpg'
import SectorTwo from '../assets/sectors/SectorTwo.jpg'
import SectorThree from '../assets/sectors/SectorThree.jpg'
import WorkOne from '../assets/work/WorkOne.jpg'
import WorkTwo from '../assets/work/WorkTwo.jpg'
import WorkThree from '../assets/work/WorkThree.jpg'
import HSBC from '../assets/clients/HSBC.png'
import MainImage from '../assets/main.jpg'
import AstraZenca from '../assets/clients/astra.jpg'
import Shell from '../assets/clients/shell.png'
import BP from '../assets/clients/bp.png'
import NationalGrid from '../assets/clients/NGG.png'
import BritGov from '../assets/clients/gcs.png'
import Rekit from '../assets/clients/rk.png'
import BT from '../assets/clients/bt.png'
import { useState } from 'react'
const Home = () => {
    const serviceRows = [
        ['UI/UX Design', 'Mobile Applications Development', 'Paid Social', 'Branding', 'Design Audit'],
        ['Website Design and Development', 'Digital Management', 'Platform Consulting'],
        ['Explainer Videos', 'Mobile App Design', '3D Illustrations', 'Motion Design System'],
        ['Illustrations and Iconography']
    ];

    const stats = [
        { number: "1B+", label: "Lives Touched" },
        { number: "322+", label: "Delivered Projects" },
        { number: "300+", label: "Clients" },
        { number: "30+", label: "Global Awards" },
    ];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: ''
    });

    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'project') {
            setCharacterCount(value.length);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const blogs = [
        {
            id: 1,
            title: "Understanding the Accessibility of Metaverse Needs",
            description: "Exploring virtual world interactions and user experiences in 3D space, focusing on accessibility requirements and design considerations.",
            image: "src/assets/articles/mv.png",
            date: "December 26, 2024"
        },
        {
            id: 2,
            title: "Modern Vs Unmodern Usability Testing of Designs",
            description: "Comparing traditional and contemporary approaches to usability testing in virtual environments and digital spaces.",
            image: "src/assets/articles/mv.png",
            date: "December 25, 2024"
        }
    ];

    const smallerBlogs = [
        {
            id: 3,
            title: "Modern Vs Unmodern Usability Testing of Designs",
            description: "Exploring interaction patterns in virtual environments",
            image: "src/assets/articles/mv.png",
        },
        {
            id: 4,
            title: "Modern Vs Unmodern Usability Testing of Designs",
            description: "Analyzing user behavior in 3D spaces",
            image: "src/assets/articles/mv.png",
        },
        {
            id: 5,
            title: "Modern Vs Unmodern Usability Testing of Designs",
            description: "Evaluating virtual world accessibility features",
            image: "src/assets/articles/mv.png",
        }
    ];


    return (
        <div>
            <section>

            </section>
            <section>
                <div className="container-fluid p-0" style={{ marginTop: '60px' }}>
                    <div className="row g-0">
                        {/* Left Section */}
                        <div className="col-md-6 d-flex align-items-center bg-white p-5">
                            <div className="py-5">
                                <h1 className=" text-dark mb-4" style={{ fontSize: '6rem' }}>
                                    FAST, FRESH,<br />
                                    AND FUTURE—<br />
                                    PROOF
                                </h1>
                                <button className="btn btn-danger rounded-pill px-4 py-2">
                                    Take Forward Now
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Image */}
                        <div className="col-md-6">
                            <div className="position-relative" style={{ height: '100vh', maxHeight: '750px' }}>
                                <img
                                    src={MainImage}
                                    alt="Team meeting"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                        </div>

                        {/* Statistics Section */}
                        <div className="col-12 bg-white">
                            <div className="container py-4">
                                <div className="row justify-content-between px-md-5">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="col-6 col-md-3 text-center mb-3 mb-md-0">
                                            <h2 className="fw-bold mb-0">{stat.number}</h2>
                                            <p className="text-muted mb-0">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services-section-full'>
                <div className="container service-section py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="main-heading mb-4">
                                At KODEO, we offer expert digital services from platform consulting to digital management, designed to refine and elevate your online presence.
                            </h1>

                            <p className="sub-heading mb-4">
                                Interact with your users on the platforms they prefer. Web and mobile -<br></br> we have you covered.
                            </p>

                            <div className="services-container">
                                {serviceRows.map((row, rowIndex) => (
                                    <div key={rowIndex} className="service-row">
                                        {row.map((service, index) => (
                                            <div
                                                key={`${rowIndex}-${index}`}
                                                className="service-pill"
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='case-study-section'>
                <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 15px" }} className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className='case-heading'>CASE STUDIES</h2>
                    <button className="btn btn-danger rounded-pill">See All</button>
                </div>

                <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 15px" }}>
                    {/* Header Section */}

                    {/* First Row */}
                    <div className="row g-4 align-items-center">
                        {/* Left: Two Boxes Side by Side */}
                        <div className="col-md-8">
                            <div className="d-flex gap-4">
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                            </div>
                        </div>
                        {/* Right: Two Headings with Text */}
                        <div className="col-md-4">
                            <div className="mb-4">
                                <h5 className='case-studies-heading'>Modern Vs Unmodern Usability Testing of Designs</h5>

                                <p>
                                    The metaverse is a virtual world where users interact with each
                                    other as avatars in a 3D space.
                                </p>
                            </div>
                            <div>
                                <h5 className='case-studies-heading'>Another Heading for Usability Testing</h5>

                                <p>
                                    Insights gained from usability tests can inform the design of
                                    better systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row g-4 pt-5 align-items-center">
                        {/* Left: Two Headings with Text */}
                        <div className="col-md-4">
                            <div className="mb-4">
                                <h5 className='case-studies-heading'>Exploring UX in the Digital Era</h5>

                                <p>
                                    Digital usability focuses on creating seamless experiences for
                                    users online.
                                </p>
                            </div>
                            <div>
                                <h5 className='case-studies-heading'>Improving Virtual Interfaces</h5>

                                <p>
                                    Better virtual interfaces enhance user engagement and satisfaction.
                                </p>
                            </div>
                        </div>
                        {/* Right: Two Boxes Side by Side */}
                        <div className="col-md-8">
                            <div className="d-flex gap-4">
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="row g-4  pt-5 text-center">
                        {/* Three Boxes */}
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>
                            <h5 className='case-studies-heading'>Future of Virtual Reality</h5>
                            <p>VR technology will redefine how we experience the digital world.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>
                            <h5 className='case-studies-heading'>Designing for the Metaverse</h5>

                            <p>
                                Creating intuitive and engaging interfaces for the metaverse
                                requires innovation.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>

                            <h5 className='case-studies-heading'>Inclusive Digital Spaces</h5>
                            <p>
                                Designing digital spaces that are accessible to everyone fosters
                                inclusivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='clients-section'>
                <div className='clients-container'>
                    <div>
                        <h1 className='clients-heading'>Our Valuable Clients</h1>
                    </div>
                    <div className="clients-grid">
                        <div className="client-card">
                            <img src={HSBC} alt='hsbc' style={{ width: 'auto', height: '35px', }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>HSBC UK</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">
                            <img src={AstraZenca} alt='astra' style={{ width: 'auto', height: '45px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>AstraZenca</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card"> <img src={Shell} alt='shell' style={{ width: 'auto', height: '60px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>Shell</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card"> <img src={BP} alt='bp' style={{ width: 'auto', height: '80px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>British Petroleum</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card"> <img src={NationalGrid} alt='ngg' style={{ width: 'auto', height: '50px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>National Grid</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card"> <img src={BritGov} alt='britgov' style={{ width: 'auto', height: '60px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>UK Government</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card"> <img src={Rekit} alt='rekit' style={{ width: 'auto', height: '50px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>Reckitt Benckiser </h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card"> <img src={BT} alt='bt' style={{ width: 'auto', height: '50px' }} />
                            <h5 style={{ fontWeight: '800', marginTop: '1.5rem' }}>BT Group</h5>
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={ImageOne} alt="fireSpot" loading="lazy" className="responsive-image" />
            </section>

            <section className='industries-color'>
                <div className='d-flex industries-wrapper'>
                    <div className='heading-container' style={{ flex: '1 1 50%', backgroundColor: '#F7F4F2' }}>
                        <h1 className='industries-heading'>REIMAGINING INDUSTRIES <br /> THROUGH DESIGN</h1>
                        <p className='industries-para'>From agriculture, e-commerce, edtech and enterprise <br></br>solutions to fintech, healthcare, hospitality, IOT and HR solutions, <br></br>we have designed it all.</p>
                    </div>
                    <div className='grid-container' style={{ flex: '1 1 50%', backgroundColor: 'white', padding: '4rem' }}>
                        <div className='container'>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Fintech</h5>
                                    <p>Revolutionizing financial services through technology by enabling seamless transactions, improved user experiences, and secure solutions for global financial operations.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Health Tech</h5>
                                    <p>Empowering healthcare with innovative solutions, from patient monitoring wearables to telemedicine, and streamlined electronic health records for better patient outcomes.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Sports</h5>
                                    <p>Enhancing athletic performance and fan experiences with data analytics, wearable technology, and immersive digital solutions for the sports industry.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Enterprise</h5>
                                    <p>Driving enterprise growth with tailored digital solutions, optimizing workflows, and enabling smart business operations for large organizations.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>E-Commerce/Marketplace</h5>
                                    <p>Transforming online shopping experiences through scalable platforms, secure payment systems, and personalized customer engagement strategies.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>IT/Consulting</h5>
                                    <p>Providing expertise in technology integration, infrastructure development, and strategic consulting to help businesses thrive in the digital age.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Media and Entertainment</h5>
                                    <p>Innovating content delivery, enhancing user engagement, and driving new revenue streams in the media and entertainment industry.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Internet of Things</h5>
                                    <p>Connecting devices and systems to create smart environments, improving efficiency, and offering new levels of convenience in everyday life.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Venture Capitalists</h5>
                                    <p>Supporting startups and innovation with strategic investments, fostering growth in diverse industries through financial backing.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>For a Cause</h5>
                                    <p>Leveraging technology to promote social good, empower communities, and address pressing global challenges effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="testimonials-container">
                    <h1 className='testimonials-heading'>Our Testimonials</h1>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "This service is exceptional! The team went above and beyond to meet our expectations."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile1.jpg" loading="lazy" alt="Profile" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">John Doe</h4>
                                    <p className="profile-designation">CEO, Example Co.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className='location-section'>
                <div>
                    <div>
                        <h1 className='locations'>We are Culture-Driven UI UX <br></br>
                            & Development Agency </h1>
                        <p className='location-subheading'>We're a group of 180+ creative minds spread <br></br> across 4 countries touching billions of lives <br></br> through design.</p>
                        <div className="countries-container">
                            <div className="countries-grid">
                                <div>India</div>
                                <div>United Kingdom</div>
                                <div>UAE</div>
                                <div>Singapore</div>
                                <div>Russia</div>
                                <div>South Africa</div>
                                <div>Kazakhstan</div>
                            </div>
                        </div>
                        <div className='pt-5 pb-3'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src={WorkOne} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={WorkTwo} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={WorkThree} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="blogs-heading">Must Read Articles</h1>
                            <button className="btn btn-danger   rounded-pill mt-3">View Blogs</button>
                        </div>

                        <div className="col-md-8">
                            {/* Featured articles */}
                            {blogs.map(blog => (
                                <div key={blog.id} className="card mb-4 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={blog.image}
                                                className="img-fluid "
                                                alt={blog.title}
                                                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{blog.title}</h5>
                                                <p className="card-text">{blog.description}</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Posted on {blog.date}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Bottom row articles */}
                            <div className="row">
                                {smallerBlogs.map(blog => (
                                    <div key={blog.id} className="col-md-4 mb-4">
                                        <div className="card border-0 h-100">
                                            <img
                                                src={blog.image}

                                                alt={blog.title}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{blog.title}</h5>
                                                <p className="card-text">{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-companies'>
                <div className='container deliver-c'>
                    <h1 className='deliver-head'>
                        Tailored to deliver the best<br></br> for your business
                    </h1>
                    <p className='deliver-para'>A flexible and adaptive process that helps<br></br> businesses launch and scale quickly.</p>
                </div>
            </section>


            <section className='sectors-section'>
                <div>
                    <div>
                        <h1 className='sectors'>Helping Governments, Industries and Public Sectors</h1>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row sectors-row">
                                <div className="col-sm">
                                    <img src={SectorOne} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Governments</h5>
                                    <p>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <h5 className='learn-more'>Learn More</h5>
                                </div>
                                <div className="col-sm">
                                    <img src={SectorTwo} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Public Sectors</h5>
                                    <p>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <h5 className='learn-more'>Learn More</h5>
                                </div>
                                <div className="col-sm">
                                    <img src={SectorThree} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Industries</h5>
                                    <p>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <h5 className='learn-more'>Learn More</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-section'>
                <div>
                    <div>
                        <h1 className='contact'>Let's make cool products <br></br> together</h1>
                    </div>
                    <div className="contact-form-wrapper">
                        <div className="container py-5">


                            <form onSubmit={handleSubmit}>
                                <div className="row mb-5 g-4">
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            className="form-control custom-input"
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="email"
                                            className="form-control custom-input"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="tel"
                                            className="form-control custom-input"
                                            placeholder="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <textarea
                                        className="form-control custom-input"
                                        placeholder="Tell us about your project"
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        rows={1}
                                        maxLength={225}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        {characterCount}/225
                                    </small>
                                </div>

                                <div className="mb-4">
                                    <div className="form-check custom-checkbox mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="privacy"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="privacy">
                                            I agree to the processing of personal data under the terms of the Policy on the processing of personal data of Kodeo Technologies LLC
                                        </label>
                                    </div>

                                    <div className="form-check custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="promotional"
                                        />
                                        <label className="form-check-label" htmlFor="promotional">
                                            I agree to receive promotional emails from Kodeo Technologies LLC
                                        </label>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <button type="submit" className="btn btn-danger rounded-pill px-4">
                                        Forward
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home
