import React from 'react';


const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid #fff', height:'700px', padding: "20px"}}>
      {props.children}
    </div>
  );
}

export default Scroll;