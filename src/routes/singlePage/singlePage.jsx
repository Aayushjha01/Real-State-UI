import React from 'react'
import './singlepage.scss'
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../lib/dummy'
import Map from '../../components/map/Map'

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="Location Pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
           {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
        <p className="title">General</p>
        <div className="listVertical">
          <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pet Allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Property Fees</span>
            <p>Must have the rent 3X in total household income</p>
            </div>
          </div>
        </div>
        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src="/size.png" alt="" />
            <span>80 sq ft</span>
          </div>
          <div className="size">
            <img src="/bed.png" alt="" />
            <span> 2 bed</span>
          </div>
          <div className="size">
            <img src="/bath.png" alt="" />
            <span> 1 bathroom</span>
          </div>
          </div>
     
        <p className="title">Nearby Places</p>
        <div className="listHorizontal">
        <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
            </div>
            <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
            </div>
            <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
            </div>
        
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map items ={[singlePostData]}/>
        </div>
        <div className="buttons">
          <button>
            <img src="/chat.png" alt="" />
            Send a Message
          </button>
          <button>
            <img src="/save.png" alt="" />
            Save the place
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;


