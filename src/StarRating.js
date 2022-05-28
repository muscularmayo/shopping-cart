import {useState, useEffect} from 'react';
import Star from './Star.js'

const StarRating = (props) => {
  //props.rating will be 3.9
  //props.reviews will be 12 reviews
  //onHover will be string ex: '3.9 - 12 reviews'

  // rating={props.rating.rate} reviews={props.rating.count}

  const [style, setStyle] = useState({display: 'none'})
  const [otherStyle, setOtherStyle] = useState({display: 'block'})

  function roundHalf (num) {
    return (Math.floor(num*2)/2).toFixed(1);
  }

  function starRating (num) {
    let roundedHalfRating = roundHalf(props.rating);
    let starRatingArray = []
    for (let i = 0; i < 5; i++) {
      if (roundedHalfRating >= 1) {
        starRatingArray.push('1')
      } else if (roundedHalfRating > 0 && roundedHalfRating < 1) {
        starRatingArray.push('0.5')
      } else {
        starRatingArray.push('0')
      }
      roundedHalfRating--
    }
    return starRatingArray;
  }

  let starArray = starRating(props.rating)

  const starDisplay = starArray.map((type) => {
    return (
      <Star type={type} />
    )
  })
  const hoverProperty = (
    <div className="hover-rating"
         style={style}
         onMouseEnter={e => {
           setStyle({display: 'block'})
           setOtherStyle({display: 'none'})
         }}
         onMouseLeave={e=> {
           setStyle({display: 'none'})
           setOtherStyle({display: 'block'})
         }}
    >
      {props.rating} stars - {props.reviews} reviews
    </div>
  )

  return (
    <div className="star-rating"
         onMouseEnter={e => {
           setStyle({display: 'block'})
           setOtherStyle({display: 'none'})
         }}
        //  onMouseLeave={e=> {
        //    setStyle({display: 'none'})
        //    setOtherStyle({display: 'block'})
        //  }}
    >
      {hoverProperty}
      <div style={otherStyle}>
        {starDisplay}
      </div>
    </div>
  )



}
/*

*/

export default StarRating;
