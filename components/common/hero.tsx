import { NextPage } from "next";

interface IProps {}

export const Hero: NextPage<IProps> = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Industrial and Commercial</h1>
          <p className="mb-5 text-justify">
            Our Team have more than a decade of experience handling Industrial
            and Commercial properties in Singapore. This includes offices, B1
            Light Industrial, B2 Light Industrial Factories, showrooms etc
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
