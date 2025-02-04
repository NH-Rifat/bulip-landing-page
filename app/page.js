import Image from "next/image";
import dynamic from 'next/dynamic'
import Home from "./home/page";
export default function Main() {

  return (
    <div className="min-h-screen ">
      <Home/>
    </div>
  );
}
