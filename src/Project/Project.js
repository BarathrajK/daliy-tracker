import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'

function Project() {
    return (
        <section>
            <div className='container act1'>
                <div className='Home'>
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand imgtag" href="#">
                                <img src='./images/icons8-clock-100.png'></img>
                            </a>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link page1">Home</a>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <nav>
                                        <Link to="/ActivityUser" class="nav-link page2">Spentime</Link>
                                    </nav>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/Details" class="nav-link page2">Details</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-lg-6 tab'>
                                <img src="./images/Img1.jpg" class="card-img-top" alt="" />
                            </div>
                            <div className='col-lg-6 mb-1 mx-auto text-center topwidget'>
                                <h1 className='tab1'>Home</h1>
                                <label className='mt-3'>Project</label>
                                <select class="form-select" aria-label="Default select example" required>
                                    <option selected>Select a Project</option>
                                    <option value="1">Consort</option>
                                    <option value="2">Fabkinect</option>
                                    <option value="3">Laborates</option>
                                    <option value="4">Tailoring</option>
                                    <option value="5">Rover 360</option>
                                    <option value="6">Get Billing</option>
                                </select>
                                <div class="col-sm-12 mt-3">
                                    <Link to="/ActivityUser" class="btn m-2">Jump to Project</Link>
                                    <Link to="/UserLogin" class="btn">Logout</Link>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}



export default Project