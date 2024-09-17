import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <div className="flex bg-green-600 text-white justify-between px-10">
      <div>
        <img src={logo} alt="logo" width={70} />
      </div>
      <ul className="flex justify-around">
        <li>Features</li>
        <li>Home</li>
        <li>Articles</li>
      </ul>
      <ul className="flex gap-x-5">
        <li>
          <Button>Hytam</Button>
        </li>
        <li>
          <h2>Register</h2>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
