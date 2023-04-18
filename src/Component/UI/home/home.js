import React from 'react';
import './home.css'
function Home() {
    return ( 
        <>
            <nav>
                <div className='row g-0'>
                    <div className='col-12 d-flex bg-dark w-100 h-50 '>
                        <div className='col-8'>
                        <p className='float-start text-light my-3 mx-sm-5 px-3 py-2 hello-name display-6'>
                            Hello Md Kamran</p>
                        </div> 
                        <div className='col-4'>
                        <button className='btn btn-warning float-end mx-3 my-4 mx-sm-5 px-3 py-2'>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='modal d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className='col mx-3 modaled border rounded-5 py-5 px-4 px-sm-5 d-flex flex-column justify-contnet-center align-items-center'>
                        <p className='display-6 pb-0 mb-0'>You have registered </p>
                        <span className='text-success successfully'>Successfully</span> 
                        <div className='profilePic'>
                            <img src='' className='border my-4 rounded-circle' alt='Profile Image' />
                        </div>
                        <div className='col-12 pb-2'>
                            <span className='additional'>Additional Information: </span><br />
                        </div>
                        <div className='col-12 pb-1'>
                            <span className='email'>Email: </span><br />
                        </div>
                        <div className='col-12 pt-1'>
                            <span className='phone'>Phone No: </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

     );
}

export default Home;