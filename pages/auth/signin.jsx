import React from "react";
import { getProviders, signIn as providerSignIn } from "next-auth/react";
import Header from "../../components/Header";
import titleLogo from "../../assets/titlelogo.png";
import Image from "next/image";

const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <Image src={titleLogo} className="w-80 pt-3" alt="title logo" />
        <p className="font-xs italic pt-3">
          This is not a REAL app built for educational purposes and porftolio
          demos only. Created my free logo at LogoMakr.com
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 text-white"
                onClick={() =>
                  providerSignIn(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
