//import Last from "./Last";
//import Middle from "./Middle";

import Already from "./Already";
import Form from "./Form";

//import Top from "./Top";
export default function MainBoard() {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex w-1/2">
        <div className="card  rounded-box grid h-20 flex-grow place-items-center">
          <Form />
          <Already />
        </div>
      </div>
    </div>
  );
}
