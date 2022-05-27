import React, { linearGradient } from 'react';

const Star = (props) => {
  if (props.type === '1') {
    return (
      <div className="star">
          <svg
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="yellow"
              stroke="#393939"
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
      <div className="star">
        <svg
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="yellow"
            stroke="#393939"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"

        >
          <defs>
            <linearGradient id="grad">
              <stop offset="50%" stopColor="yellow"/>
              <stop offset="50%" stopColor="grey"/>
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
    );
  } else { //props.type = 0
    return (
      <div className="star">
        <svg
            width="29"
            height="29"
            viewBox="0 0 12 12"
            fill="none"
            stroke="#393939"
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
