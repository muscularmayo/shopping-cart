import React from 'react';

const Star = (props) => {
  if (props.type === '1') {
    return (

          <svg
              width="34.95px"
              height="34.95px"
              // viewBox="0 0 24 24"
              fill="gold"
              stroke="gold"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"

          >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>

    );
  } else if (props.type === '0.5') {
    return (



          <svg
              width="34.95px"
              height="34.95px"
              // viewBox="0 0 24 24"

              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"

          >
            <polygon fill="gold" points=" 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2 "></polygon>
            <polygon fill="gray" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 "></polygon>

          </svg>











    );
  } else { //props.type = 0
    return (

        <svg
            width="34.95px"
            height="34.95px"
            // viewBox="0 0 24 24"
            fill="gray"
            stroke="gray"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"

        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>

    );
  }

}

export default Star;
