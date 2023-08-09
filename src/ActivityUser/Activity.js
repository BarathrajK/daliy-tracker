import React from 'react'
import './Activity.css'
import { Link } from 'react-router-dom'

function Activity() {
    return (
        <div>
            <section className='mt-3'>
                <div className='container act'>
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand imgtag" href="\Project">
                                <img src='./images/icons8-clock-100.png'></img>
                            </a>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/Project" class="nav-link page2">Home</Link>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                        <nav>
                                            <Link to="/ActivityUser" class="nav-link page1">Spentime</Link>
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
                    <div>
                        <h1 className='mx-auto text-center tab1'>Spentime</h1>
                        <h2 className='mx-auto text-center tab3'>Consort</h2>
                        <div className="card-body col-lg-7 text-center mx-auto insideedge">
                            <form>
                                <div className='row'>
                                    <div className='col-sm-12 mb-1'>
                                        <label>Date</label>
                                        <input type="date" formControlName="name" class="form-control" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 mb-1'>
                                        <label>Hours</label>
                                        <input type="text" formControlName="name" class="form-control" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 mb-1'>
                                        <label>Description</label>
                                        <input type="text" formControlName="name" class="form-control" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 mb-1'>
                                        <label>Activity</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select a Activity</option>
                                            <option value="1">Analysis</option>
                                            <option value="2">Development</option>
                                            <option value="3">Deployment</option>
                                            <option value="4">Debug</option>
                                            <option value="4">Test</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 mb-1'>
                                        <label>Domain</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select a Domain</option>
                                            <option value="1">Android</option>
                                            <option value="2">Flutter</option>
                                            <option value="3">React-native</option>
                                            <option value="4">Nodejs</option>
                                            <option value="5">Dotnetcore</option>
                                            <option value="6">Angular</option>
                                            <option value="7">C++</option>
                                            <option value="8">Python</option>
                                            <option value="9">SQL</option>
                                            <option value="10">MySQL</option>
                                            <option value="11">Java</option>
                                            <option value="12">Javascript</option>
                                            <option value="13">MongoDb</option>
                                            <option value="14">Reactjs</option>
                                            <option value="15">Qt</option>
                                            <option value="16">Vuejs</option>
                                            <option value="17">Html</option>
                                            <option value="18">Css</option>
                                            <option value="19">Typescript</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <Link to="/Details" class="btn">Create</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Activity