import Image from "next/image";
import { IListing } from "../types/app";

interface IProps {
  listings: IListing[];
}

const Listings = ({ listings }: IProps) => {
  return (
    <div>
      {listings.map((l) => {
        return (
          <div className="card lg:card-side" key={l.sys.id}>
            <figure>
              <Image
                src={`https://${l.fields.images[0].fields.file.url}`}
                alt="img"
                height={250}
                width={250}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{l.fields.property}</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost">More info</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
