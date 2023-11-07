import {FaCheck,FaTimes} from 'react-icons/fa';

function Card({details}) {
  return <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{details.price}</h5>
      <h6 className="card-price text-center">{details.period}<span className="period">/month</span></h6>
      <hr />
      <ul>
      { details.features.map((feat)=>{
                    return <li className={feat.enable ?"" :"text-muted" } >
                   {feat.enable ? <FaCheck className="fas fa-check" /> : <FaTimes className="fas fa-times" />}

                     &ensp; {feat.name}</li>
                  })}


        {/* { details.features.map((feature) => {
                return <li className={feature.enable ?  `${<li><span className="fa-li"><i className="fas fa-check"></i></span></li>}` :
                `${<li className="text-muted"><span className="fa-li"><i className="fas fa-check"></i></span></li>}`}>{feature.name}</li>

            })
            
        } */}
        {/* <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span></li> */}
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}
export default Card;
