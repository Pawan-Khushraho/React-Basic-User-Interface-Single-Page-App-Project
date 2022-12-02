import React from 'react';
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Solution</h1>
            <p>Solution To All Your Problems</p>
        </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics"  />
      <div>
        <p>
        We are your one and only solution to the tech problems you face
        every day. We are leading tech company whose aim is to increase the
        problem solving ability in children.
        </p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aliquam temporibus quia in modi, doloribus assumenda adipisci quam vitae officia mollitia porro optio quo fugiat iure accusamus ea veniam autem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde ex dicta consequuntur ratione quaerat! Accusantium recusandae blanditiis quaerat sequi hic impedit tempore inventore obcaecati, laboriosam possimus fuga accusamus omnis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, officiis. Vitae atque, eius deleniti inventore unde possimus dignissimos nihil, repellendus perspiciatis quibusdam, dolores fugit ipsum neque? Ipsa deleniti recusandae delectus.
        </p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
             <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home