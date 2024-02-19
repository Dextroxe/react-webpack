import { Counter } from "./Counter";
import "./app.css";
import Image from "../asset/genshin.jpg";
import { Button } from "@mantine/core";
const App = () => {
  const onclicked = () => {
    console.log("clicked");
  }

  return (
    <>
      <h1 className="bg-red-200 text-4xl font-bold">
        Hello world! I am using React - {process.env.NODE_ENV} by{" "}
        {process.env.name}
      </h1>
      <img src={Image} alt="image" width={200} height={600} />
      <div className="w-full h-[60vh]">
      <Counter />
      <Button className="text-black bg-teal-200" onClick={onclicked}>Button</Button>
      </div>
    </>
  );
};

export default App;
