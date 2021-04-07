import Head from "next/head";
// import style from "styled-components";
import { Hero } from "../app/components/Hero";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kruse </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <style jsx global>{`
        html {
          font-size: 10px;
        }
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: sans-serif;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
        .container {
          max-width: 1320px;
        }
      `}</style>
    </div>
  );
}
