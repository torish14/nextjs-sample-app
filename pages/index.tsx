import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a href="">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a href="">About US</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
