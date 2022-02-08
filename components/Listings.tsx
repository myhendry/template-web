import Image from "next/image";
import { IListing } from "../types/app";

interface IProps {
  listings: IListing[];
}

const Listings = ({ listings }: IProps) => {
  return (
    <div>
      {/* <Image
        src={"/vercel.svg"}
        alt="logo"
        layout="fixed"
        width={200}
        height={200}
      /> */}
      {listings.map((l) => (
        <div className="card lg:card-side" key={l.sys.id}>
          <figure>
            <Image
              src={
                "https://images.unsplash.com/photo-1585442581492-a4f38c1cfc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              }
              alt="img"
              height={250}
              width={250}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{l.fields.property}</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-ghost">More info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
