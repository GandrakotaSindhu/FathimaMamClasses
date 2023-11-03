// export function Greet(){}
const Greet = (props) => {
//const Greet = ({name,company,children}) => {
  //console.log(props)
  //const {name,company,children}=props
  return (
    <div>
      <h1>Grettings from {props.name} and {props.company}  {props.children}</h1>
      {/* <h2>Default export can be imported with different name</h2> */}
    </div>
  );
};
export default Greet;
