import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section id="about">
         <div className="container mt-5">
          {/* first row */}
          <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12 text-center">
                <h4 className="display-4 text-success">
                    About Me
                </h4>
                <p className="text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia modi deleniti exercitationem commodi sunt, possimus et, quod molestiae est dignissimos esse dolores odio itaque non eius provident perspiciatis vero? Asperiores.
                </p>
                <Link to={`#`} target="_blank" className="btn btn-success">
                        <i className="bi bi-download text-dark"></i> Download CV</Link>
            </div>
          </div> {/* end */}
            {/* second row */}
          <div className="row m-4">
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="card">
                  <img src="https://picsum.photos/1200/500" alt="no image" className="card-img-top" height={300} />
                </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12">
                <div className="card">
                    <div className="card-body text-center">
                        <h6 className="text-success display-6">I'm Professional FullStack developer</h6>
                        <p className="small text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="card mt-2 mb-2">
                  <div className="card-body">
                      <ul className="list-group">
                          <li className="list-group-item border-0">
                              <strong className="text-success"> <i className="bi bi-phone"></i> Mobile</strong>
                              <span className='float-end'>+91 9988776655</span>
                          </li>
                          <li className="list-group-item border-0">
                              <strong className="text-success"> <i className="bi bi-envelope"></i> Email</strong>
                              <span className='float-end'>johnmartin@gmail.com</span>
                          </li>
                          <li className="list-group-item btn-group text-center border-0">
                        
                                  <Link to={`#`} target='_blank' className="btn btn-primary btn-sm"><i className="bi bi-facebook"></i> Facebook</Link>
  
                                  <Link to={`#`} target='_blank' className="btn btn-info btn-sm">
                                  <i className="bi bi-linkedin"></i> Linked In
                                  </Link>
                           
                                  <Link to={`#`} target='_blank' className="btn btn-dark btn-sm">
                                  <i className="bi bi-github"></i> Github
                                  </Link>
                              
                                  <Link to={`#`} target='_blank' className="btn btn-warning btn-sm">
                                  <i className="bi bi-instagram"></i> Instagram
                                  </Link>
                              
                          </li>
                      </ul>
                  </div>
                </div>
            </div>
          </div> {/* end */}
            <div className="row">
                <div className="col-md-12 text-center">
                  <div className="p-3 m-3">
                      <h6 className="text-success display-6 text-center">My Skills</h6>
                  </div>
                </div>
            </div>
           {/* third row */}
           <div className="row m-4">
              <div className="col-md-6 col-lg-6 col-sm-12">
                 
                   <div>
                      <p className="lead text-success">HTML</p>
                      <div className="progress">
                          <div className="progress-bar bg-success" style={{width:'90%'}}> 90% </div>
                      </div>
                   </div>

                   <div>
                      <p className="lead text-success">CSS</p>
                      <div className="progress">
                          <div className="progress-bar bg-success" style={{width:'85%'}}> 85% </div>
                      </div>
                   </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                   <div>
                      <p className="lead text-success">HTML</p>
                      <div className="progress">
                          <div className="progress-bar bg-success" style={{width:'90%'}}> 90% </div>
                      </div>
                   </div>

                   <div>
                      <p className="lead text-success">CSS</p>
                      <div className="progress">
                          <div className="progress-bar bg-success" style={{width:'85%'}}> 85% </div>
                      </div>
                   </div>
              </div>
           </div>
         </div>
    </section>
  )
}

export default About