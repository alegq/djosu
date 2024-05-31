import Image from "next/image";
import Header from "@/components/header";
import Block2 from "@/components/Block2";
import Block3 from "@/components/block3";
import Block4 from "@/components/block4";
import Block5 from "@/components/block5";

export default function Home() {
  return (
    <div>
      <Header />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
    </div>
  );
}
