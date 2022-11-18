import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default class Home extends Component {
  render() {
    return (
      <Carousel>
      <Carousel.Item  style={{'height':"700px"}}>
        <img style={{'height':"700px"}} 
          className="d-block w-100"
          src={'./images/image1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"700px"}}>
        <img style={{'height':"700px"}}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1401178460/photo/teacher-helping-a-young-student-with-her-homework-in-the-library-after-school-two-females-are.jpg?b=1&s=170667a&w=0&k=20&c=aPY2PqE2XJtiRo-9WSdDR0DHTy3PgocUK0GVTwoYmcg="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"700px"}}>
        <img style={{'height':"700px"}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}
