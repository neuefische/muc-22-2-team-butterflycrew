import bg from '../img/marcell.jpg'
import bd from '../img/sam.jpg'
import be from '../img/vladi.jpg'
import bz from '../img/marcus.jpg'
import "./AboutUs.css"

export default function AboutUs() {


    return (
        <div>

            <div className={"container mt-5 mb-5"}>
                <h2 className={"mb-5 text-center fw-bolder"}>Die Butterfly Crew</h2>
                <div className={"row row-cols-2 g-4"}>
                    <div className={"col"}>
                        <div className="card">
                            <img src={bg} className="card-img-top" alt="loading..."/>
                            <div className="card-body">
                                <h5 className="card-title">Marcell</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                                <a href="https://github.com/MoinMarcell" className="btn btn-outline-dark">GitHub <i
                                    className="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/marcell-dechant-375424258/" className="btn btn-outline-dark mx-2">LinkedIn <i
                                    className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className="card">
                            <img src={bd} className="card-img-top" alt="loading..."/>
                            <div className="card-body">
                                <h5 className="card-title">Sam</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                                <a href="https://github.com/devBK84" className="btn btn-outline-dark">GitHub <i
                                    className="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/bassamkharashfeh/" className="btn btn-outline-dark mx-2">LinkedIn <i
                                    className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className="card">
                            <img src={be} className="card-img-top" alt="loading..."/>
                            <div className="card-body">
                                <h5 className="card-title">Vladi</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                                <a href="https://github.com/VladimirKlippert93" className="btn btn-outline-dark">GitHub <i
                                    className="fa-brands fa-github"></i></a>
                                <a href="#" className="btn btn-outline-dark mx-2">LinkedIn <i
                                    className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className="card col">
                            <img src={bz} className="card-img-top" alt="loading..."/>
                            <div className="card-body">
                                <h5 className="card-title">Marcus</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                                <a href="https://github.com/MarcusSchweizer91" className="btn btn-outline-dark">GitHub <i
                                    className="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/marcus-schweizer-9bb5a3258/" className="btn btn-outline-dark mx-2">LinkedIn <i
                                    className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}