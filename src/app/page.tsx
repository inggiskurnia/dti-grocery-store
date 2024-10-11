import Image from "next/image";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";

export default function Home() {

  return (
    <div>
        <Navbar></Navbar>
        <Categories></Categories>
        <ProductList></ProductList>
    </div>
  );
}
