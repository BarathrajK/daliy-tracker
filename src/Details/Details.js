import React from 'react'
import './Details.css'
import { Link } from 'react-router-dom'

function Details() {
    return (
        <div>
            <section className='mt-5'>
                <div className='container act'>
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand imgtag" href="#">
                                <img src='./images/icons8-clock-100.png'></img>
                            </a>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/Project" class="nav-link page2">Home</Link>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/ActivityUser" class="nav-link page2">Spentime</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link page1">Activity</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <h1 className='mx-auto text-center tab1'>Activity</h1>
                    </div>
                    <div className='total'>
                        TotalHours : 18Hrs
                    </div>
                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">S No</th>
                                <th scope="col">Date</th>
                                <th scope="col">User</th>
                                <th scope="col">Activity</th>
                                <th scope="col">Domain</th>
                                <th scope="col">Description</th>
                                <th scope="col">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>02/08/2023</td>
                                <td>asdfsd</td>
                                <td>Analysis</td>
                                <td>Nodejs</td>
                                <td>Ui creation completed</td>
                                <td>2.50</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>02/08/2023</td>
                                <td>asdfsd</td>
                                <td>Deployment</td>
                                <td>Javascript</td>
                                <td>Ui creation completed</td>
                                <td>5.50</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>02/08/2023</td>
                                <td>asdfsd</td>
                                <td>Development</td>
                                <td>C++</td>
                                <td>Ui creation completed</td>
                                <td>3.50</td>
                            </tr>
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    )
}
export default Details
