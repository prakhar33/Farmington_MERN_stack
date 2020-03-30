import React, { Component } from 'react';
import { Carousel } from 'antd';
import './testimonials.css';
class Testimonials extends Component {
  state = {};
  render() {
    return (
      <div className="main_testimonials" id="testimonials">
        <p className="testi_heading">Testimonials</p>
        <Carousel autoplay>
          <div>
            <h3>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.
              Testimonials provide a sense of what it's like to work with you, or what it's like to use your products and services. This can show people that you're credible and reliable,
              and can build trust with potentials customers.”
            </h3>
            <h2>
              <b>Yogesh</b>
            </h2>
          </div>
          <div>
            <h3>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.
              Testimonials provide a sense of what it's like to work with you, or what it's like to use your products and services. This can show people that you're credible and reliable,
              and can build trust with potential customers.”
            </h3>
            <h2>
              <b>Arpit</b>
            </h2>
          </div>
          <div>
            <h3>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.
              Testimonials provide a sense of what it's like to work with you, or what it's like to use your products and services. This can show people that you're credible and reliable,
              and can build trust with potential customers.”
            </h3>
            <h2>
              <b>Bihari</b>
            </h2>
          </div>
          <div>
            <h3>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.
              Testimonials provide a sense of what it's like to work with you, or what it's like to use your products and services. This can show people that you're credible and reliable,
              and can build trust with potential customers.”
            </h3>
            <h2>
              <b>Ganesh</b>
            </h2>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Testimonials;
