import React from "react";

const Paw = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 419.14 403.6"
      {...props}
      className={ className }
    >
      <path
        d="M281.78 0c-.88.011-1.79.055-2.69.125-35.82 6.184-55.52 44.064-58.37 77.469-4.17 30.316 9.19 69.266 42.47 76.066 4.83.92 9.84.5 14.56-.78 40.08-13.44 58.01-60.908 52.22-100.22C328.28 27.264 309.14-.349 281.78 0zM129.91 1.625C107.63 2.172 90.28 24.763 86.75 46c-7.441 42.074 11.698 94.35 55.53 107.66 4.11.89 8.35.98 12.5.34 29.63-4.94 42.18-38.15 40.94-64.969-.89-35.372-19.27-76.273-56-86.218-3.36-.89-6.63-1.266-9.81-1.188zm248.93 119.5c-38.53 2.31-64.95 40.76-68.72 76.66-5.09 25.89 8.71 60.53 38.26 62.6 41.19-.51 69.3-44.53 70.46-82.41 2.61-25.05-12.15-55.46-40-56.85zm-337.28 8.54c-16.394-.14-32.517 9.68-37.874 26.34-14.293 44.58 14.408 101.04 61.624 110.41 19.706 3.37 37.018-11.76 41.908-29.97 10.35-38.95-10.915-84.17-46.908-101.85-5.863-3.29-12.334-4.88-18.75-4.93zm172.75 79.93c-32.14.07-64.78 16.38-85.59 40.66-22.48 28.3-40.892 61.23-48.095 96.94-8.751 25.7 11.083 55.29 38.565 55.47 33.06.91 61.47-21.79 94.34-23.47 27.89-4.25 52.86 10.25 77.94 19.75 21.35 9.13 50.85 5.63 61.75-17.35 8.57-23.41-4.05-48.39-14.5-69.18-21.32-33.76-44.17-69.24-79.13-90.32-14.01-8.68-29.58-12.53-45.28-12.5z"
      />
    </svg>
  );
};

export default Paw;