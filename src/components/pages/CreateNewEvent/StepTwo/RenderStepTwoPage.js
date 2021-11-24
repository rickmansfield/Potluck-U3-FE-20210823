import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  input {
    text-align: center;
    padding: 3% 8%;
    border: none;
    border-radius: 25px;
  }
`;

const RenderStepTwo = (props) => {

return (
  <div>
    <form onSubmit={props.submit}>
     <h2>What should guests bring?</h2>
     <input
            type="text"
            name="item_name"
            placeholder="Enter items"
            value={props.value}
            onChange={props.handleChanges}
/>
{!props.loading ? (
              <button>{props.buttonText}</button>
            ) : (
              <button disabled>Loading...</button>
            )}
<h2>Current Items</h2>
{
  props.state.map(item=>(
    <p onClick={(e)=>{
      e.preventDefault()
      e.stopPropagation()
      props.deleteItem(item.food_id)
    }}>{item.food_name}&nbsp;&nbsp;&nbsp;X</p>
  ))
}
{props.state.length > 0 ? (
              <button onClick={props.nextStep}>NEXT STEP</button>
            ) : null}
</form>
  </div>
)
//   return(
//   <section>
//     <form onSubmit={props.submit}>
//       <div className="formContainer">
//         <StyledDiv className="formColumn">
//           <h2>What should guests bring?</h2>
//           <input
//             type="text"
//             name="item_name"
//             placeholder="Enter items"
//             value={props.value}
//             onChange={props.handleChanges}
//           />
//           <div>
//             {!props.loading ? (
//               <button>{props.buttonText}</button>
//             ) : (
//               <button disabled>Loading...</button>
//             )}
//           </div>
//         </StyledDiv>
//         <div className="formColumn">
//           <div>
//             <h2>Current Items</h2>
//           </div>
          
//           <div>
//             <ul>
//               {props.state.map((item) => (
                
//                 <li key={item.id} onClick={() => props.editItem(item)}>
//                   {item.food_name}
//                   <span className="itemList">
//                   {console.log(item)}
//                     <span
//                       className="delete"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         e.stopPropagation()
//                         console.log(item)
//                         props.deleteItem(item.food_id);
//                       }}
//                     >&nbsp;&nbsp;
//                       X
//                     </span>
                    
//                   </span>
                  
//                 </li>
                
//               ))}
//             </ul>
//           </div>
//           <div>
//             {props.state.length > 0 ? (
//               <button onClick={props.nextStep}>NEXT STEP</button>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </form>
//   </section>
// );
            }
export default RenderStepTwo;
