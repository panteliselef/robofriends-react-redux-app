import React from 'react';

const Card = (props) => {
  const {name, email, id} = props; 
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
       <img alt="robo-photo" src={`https://robohash.org/${props.id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
// or i can type this

// class Card extends Component {
//   render () {
//     return (
//       <div>
//         <img alt="photo" src='https://robohash.org/test'/>
//         <div>
//           <h2>Jane Doe</h2>
//           <p>panteliselef@outlook.com</p>
//         </div>
//       </div>
//     );
//   }
// }

export default Card;