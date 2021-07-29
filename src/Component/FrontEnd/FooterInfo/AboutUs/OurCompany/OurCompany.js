import React from 'react';
import fashion2 from '../../../../../Images/images1.jpg';

const OurCompany = () => {
    return (
        <section className="">
            <div class="">
                <img style={{ height: "500px" }} src={fashion2} class=" w-100" alt="..." />
            </div>
            <div className="container p-5">
                <div className="col-md-12 text-center container">
                    <h5>
                        Amazing designs & collaborations, and as always 100% Organic & Fairtrade certified cotton. Inspired by the georgious Brasilian bucket, a wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.
                    </h5>
                </div>
                <div className="row m-0 mt-5 pt-5">
                    <div className="com-sm-12 col-md-6 p-3">
                        <h6>Vision</h6>
                        <p className="text-muted">No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.</p>

                    </div>
                    <div className="com-sm-12 col-md-6 p-3">
                        <h6>Mission</h6>
                        <p className="text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    </div>

                </div>
            </div>
            <div style={{ backgroundColor: "#F5F5F5" }} >
                <div className=" container p-5">
                    <div className="row m-0">
                        <h1 className="text-center mb-5">Some numbers about us</h1>
                        <div className="com-sm-12 col-md-3 p-3">
                            <p className="text-center"><small>Established</small></p>
                            <h1 className="text-center">2018</h1>
                            <p className="text-center"><small>in New York</small></p>
                        </div>
                        <div className="com-sm-12 col-md-3 p-3">
                            <p className="text-center"><small>Employees</small></p>
                            <h1 className="text-center">120 +</h1>
                            <p className="text-center"><small>and counting</small></p>
                        </div>
                        <div className="com-sm-12 col-md-3 p-3">
                            <p className="text-center"><small>Brands</small></p>
                            <h1 className="text-center">2500 +</h1>
                            <p className="text-center"><small>and growing</small></p>
                        </div>
                        <div className="com-sm-12 col-md-3 p-3">
                            <p className="text-center"><small>Orders</small></p>
                            <h1 className="text-center">500 +</h1>
                            <p className="text-center"><small>each day</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5">
            <div className="row m-0 mt-5 pt-5">
                    <div className="com-sm-12 col-md-6 p-3">
                       <img className="w-100" src="http://spab-rice.com/wordpress/kona/demo/wp-content/uploads/2018/10/about-1.jpg" alt="" />
                    </div>
                    <div className="com-sm-12 col-md-6 p-5 my-auto">
                        <h1>Creating a different shopping experience since 2018</h1>
                        <p className="pt-5 ">Want to get in touch with us? A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.</p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default OurCompany;