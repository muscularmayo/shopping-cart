import React from 'react';

const Star = (props) => {
  if (props.type === '1') {
    return (
      <div className="star">
          <svg
              width="15%"
              height="15%"
              viewBox="0 0 24 24"
              fill="yellow"
              stroke="yellow"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"

          >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
      </div>
    );
  } else if (props.type === '0.5') {
    return (
      // <div className ="star half-star">
      //     <svg
      //         width="15%"
      //         height="15%"
      //         viewBox="0 0 24 24"
      //         fill="yellow"
      //         stroke="yellow"
      //         strokeWidth="1"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //     >
      //       <polygon points="12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2 "></polygon>
      //     </svg>
      //     <svg
      //       width="15%"
      //       height="15%"
      //       viewBox="0 0 24 24"
      //       fill="gray"
      //       stroke="gray"
      //       strokeWidth="1"
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //     >
      //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 "></polygon>
      //     </svg>

      // </div>
      <div className="star half-star">
        <svg>
          <svg
              // width="30%"
              // height="30%"
              // viewBox="0 0 24 24"
              fill="yellow"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"

          >
            <polygon points=" 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2 "></polygon>
          </svg>
          <svg
            // width="30%"
            // height="30%"
            // viewBox="0 0 24 24"
            fill="gray"
            strokeWidth="1"

            strokeLinecap="round"
            strokeLinejoin="round"

          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 "></polygon>
          </svg>
        </svg>


      </div>






    );
  } else { //props.type = 0
    return (
      <div className="star">
        <svg
            width="15%"
            height="15%"
            viewBox="0 0 24 24"
            fill="gray"
            stroke="gray"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"

        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
    );
  }

}

export default Star;
