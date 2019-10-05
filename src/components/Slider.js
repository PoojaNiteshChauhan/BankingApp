


import React from "react"
import "./Header.css"
function Slider() {

    return (
        <div className="slider container-fluid">
            <div id="img-carousel" data-ride="carousel" className="carousel slide">

                <ol className="carousel-indicators">
                    <li data-target="#img-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#img-carousel" data-slide-to="1"></li>
                    <li data-target="#img-carousel" data-slide-to="2"></li>
                </ol>

                <div role="listbox" className="carousel-inner">
                    <div className="item active"><img src="https://images.unsplash.com/photo-1470104240373-bc1812eddc9f" alt="" />
                        <div className="carousel-caption">
                            <h2 className="animated fadeInDown">Caption Animation</h2>
                            <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <p className="animated fadeInUp"><a href="#" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
                        </div>
                    </div>
                    <div className="item"><img src="https://images.unsplash.com/photo-1470848051974-964b789cb6fa" alt="" />
                        <div className="carousel-caption">
                            <h2 className="animated bounceInDown">Bootstrap Slider</h2>
                            <p className="animated bounceInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <p className="animated bounceInUp"><a href="#" className="btn btn-transparent btn-rounded btn-large">Get Started</a></p>
                        </div>
                    </div>
                    <div className="item"><img src="https://images.unsplash.com/photo-1459603677915-a62079ffd002" alt="" />
                        <div className="carousel-caption">
                            <h2 className="animated fadeInDown">Mobile Friendly</h2>
                            <p className="animated fadeInDown">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <p className="animated fadeInRight"><a href="#" className="btn btn-transparent btn-rounded btn-large">Download Now!</a></p>
                        </div>
                    </div>
                </div>
                <a href="#img-carousel" role="button" data-slide="prev" className="left carousel-control"><i aria-hidden="true" className="fa fa-chevron-left"></i><span className="sr-only">Previous</span></a><a href="#img-carousel" role="button" data-slide="next" className="right carousel-control"><i aria-hidden="true" className="fa fa-chevron-right"></i><span className="sr-only">Next</span></a>
            </div>
        </div>

    )
};

export default Slider

