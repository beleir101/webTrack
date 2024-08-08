import MainBoard from "./MainBoard";

function Body() {
  return (
    <div
      className="bg-secondary-subtle d-flex justify-content-center p-5"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <MainBoard />
    </div>
  );
}
export default Body;
