import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        reprehenderit impedit odit esse maxime aliquid necessitatibus
        distinctio, voluptatum laborum ducimus dignissimos, facere accusamus hic
        commodi, enim deserunt. Maiores, recusandae delectus?
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
