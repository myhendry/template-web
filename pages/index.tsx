import type { GetStaticProps, NextPage } from "next";
import { createClient } from "contentful";
import { NextSeo } from "next-seo";

import { NavBar, Footer, ThemeChanger, Hero, Typo } from "../components/common";
import { IListing } from "../types/app";
import Listings from "../components/Listings";

// https://daisyui.com/components/hero
// https://github.com/garmeeh/next-seo

interface IProps {
  listings: IListing[];
}

const Home: NextPage<IProps> = ({ listings }) => {
  return (
    <>
      {/* <NextSeo

      /> */}
      <NavBar title="C O R P O R A T E  S P A C E" />
      <div className="flex flex-col items-center">
        <ThemeChanger />
        <Hero />
        <Typo />
        <Listings listings={listings} />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const res = await client.getEntries({ content_type: "listing" });

  return {
    props: {
      listings: res.items,
    },
    revalidate: 1,
  };
};

export default Home;
