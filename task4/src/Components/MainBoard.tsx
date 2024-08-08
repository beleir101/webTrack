//import Last from "./Last";
import Middle from "./Middle";
import Top from "./Top";
function MainBoard() {
  return (
    <div className="shadow-lg rounded card w-50  text-bg-light p-3">
      <Top />
      <hr></hr>
      <Middle />
    </div>
  );
}

export default MainBoard;
