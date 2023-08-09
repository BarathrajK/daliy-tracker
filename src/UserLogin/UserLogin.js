import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserLogin.css'
import { useNavigate } from 'react-router-dom'

function UserLogin() {
    const [password,setPassword] = useState(false)
    let navigate = useNavigate()
    return (
        <div>
            <section className="login">
                <div className="container back">
                    <div className='send-mail'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mx-auto text-center '>
                                <img src="./images/login_3.gif" class="card-img-top" alt="" />
                            </div>
                            <div className='col-12 col-lg-6 topwidget'>
                                <div className="card-body text-center ">
                                    <h3 className="card-title head1">Daily Tracker</h3>
                                    <form>
                                        <div className='row'>
                                            <div className='col-sm-12 mb-2'>
                                                <label>UserName</label>
                                                <input type="text"  class="form-control" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 mb-2'>
                                                <label>Password</label>
                                                <input type={password? 'text': 'password'} class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" onClick={()=>setPassword(!password)} value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Show Password
                                                </label>
                                        </div>
                                        <div class="col-sm-12 mb-2">
                                                <nav>
                                                <Link to="/Project" class="btn">Submit</Link>
                                                </nav>
                                                <div>
                                                    Dont'n have Account <span onClick={()=>navigate('/ActivityUser')} className='Signup'>Sign up</span>
                                                </div>
                                                
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserLogin
