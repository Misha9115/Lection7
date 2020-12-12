import React, { Component } from 'react';
const pets = [
    {
      key: 1,
      isDog: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
    },
    {
      key: 2,
      isDog: false,
      image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg'
    },
    {
      key: 3,
      isDog: true,
      image: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381'
    },
    {
      key: 4,
      isDog: false,
      image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1136638860%2F960x0.jpg%3Ffit%3Dscale'
    },
  ];
  
  const style = {
    width: '100%',
    border: '2px solid grey'
  }
  
  const Dog = (props) => <img style={style} src={props.image} />
  
  const Cat = (props) => <img style={style} src={props.image} />
  
  const Pet = (props) => {
return(
<>
{props.isDog?<Dog image={props.image}/>:<Cat image={props.image}/>}
</>
);

  }
  
 export default class Animal extends React.Component {
    render() {
      return (
        <div>
          <h2>Welcome to the world of pets</h2>
          { 
          pets.map((e) =>
            <Pet  key={e.key} isDog={e.isDog} image={e.image} />
          )
          }
        </div>
      )
    }
  }
  
  

  