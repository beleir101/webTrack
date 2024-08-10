import Header from "./Header";
import MainBoard from "./MainBoard";

function Body() {
  return (
    <div
      className="justify-between bg-black flex-col "
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
      <MainBoard />
    </div>
  );
}
export default Body;
