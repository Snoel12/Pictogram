import Head from "next/head";

import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Pictogram</title>
      </Head>
      {/*Header*/}
      <Modal />
      <Header />
      {/*Post Feed*/}
      <Feed />
      {/*Modal*/}

      <Modal />
    </div>
  );
}
