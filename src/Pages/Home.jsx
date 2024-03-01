import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main id="hero">
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-1 text-success">
                        John <strong className="text-danger">Martin</strong>
                    </h3>

                    <h5 className="display-5 text-secondary">
                        I'm a Professional FullStack Developer
                    </h5>
                    <Link to={`#`} target="_blank" className="btn btn-success">
                        <i className="bi bi-download text-dark"></i> Download CV</Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home