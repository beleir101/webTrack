//import Last from "./Last";
//import Middle from "./Middle";

import Form from "./Form";

//import Top from "./Top";
function MainBoard() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex w-1/2">
        <div className="card  rounded-box grid h-20 flex-grow place-items-center">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
