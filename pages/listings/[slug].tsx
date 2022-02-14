import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import { NavBar } from "../../components/common";
import { IListing } from "../../types/app";

interface IProps {
  listing: IListing;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getEntries<{
    slug: string;
  }>({
    content_type: "listing",
  });

  const paths = items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "listing",
    "fields.slug": params!.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      listing: items[0],
    },
    revalidate: 1,
  };
};

const ListingDetails: NextPage<IProps> = ({ listing }) => {
  const { back } = useRouter();

  return (
    <div>
      <NavBar title="C O R P O R A T E  S P A C E" />
      <article className="prose lg:prose-xl">
        <div onClick={back}>Back</div>

        <div>
          <h1 className="text-center">{listing?.fields.property}</h1>

          <div className="flex flex-col w-full">
            <div className="divider"></div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {listing?.fields?.images.map((img, i) => {
              return (
                <div key={img.sys.id}>
                  <Image
                    src={`http:${img.fields.file.url}`}
                    alt="img"
                    height={500}
                    width={500}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ListingDetails;
