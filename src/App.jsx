import { useState } from "react";
const colors = ["red", "white", "green", "brown"];
export const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-4 ">
        {colors.map((item) => (
          <button
            key={item}
            onClick={() => setColor(item)}
            className="outline-none px-4 py-1 shadow rounded-full"
            style={{ background: item }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
export default App;
