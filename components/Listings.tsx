import Image from "next/image";
import Link from "next/link";

import { IListing } from "../types/app";

interface IProps {
  listings: IListing[];
}

const Listings = ({ listings }: IProps) => {
  return (
    <div id="listing-section" className="grid grid-cols-3">
      {listings.map((l) => {
        return (
          <div className="card lg:card-side" key={l.sys.id}>
            {/* <figure>
              <Image
                src={"https:" + l.fields.images[0].fields.file.url}
                alt="img"
                height={250}
                width={250}
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title">{l.fields.property}</h2>
              <Image
                src={"https:" + l.fields.images[0].fields.file.url}
                alt="img"
                height={250}
                width={250}
                className="rounded-xl"
              />
              <p className="text-justify line-clamp-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti odio beatae nam aliquid illum accusantium quisquam
                nulla quis accusamus facilis officiis obcaecati vel expedita
                fugit odit sed tenetur atque modi, distinctio quia ex suscipit
                ipsum qui.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                <Link href={`/listings/${l.fields.slug}`}>
                  <a className="btn btn-ghost">More Info</a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
