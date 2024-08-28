import { github, linkedin } from "../assets";
import { Tilt } from "react-tilt";
function Footer() {
  return (
    <footer className="bg-primary flex flex-col md:flex-row items-center justify-center md:justify-around py-6 gap-4 flex-wrap shadow-lg shadow-white">
      <div>
        {" "}
        <p className="text-sm text-white">
          Email:{" "}
          <a
            href="mailto:sohaib.chebah2020@gmail.com"
            className="underline text-secondary hover:text-white cursor-pointer"
          >
            sohaib.chebah2020@gmail.com
          </a>
        </p>
        <p className="text-sm text-white">
          Phone:{" "}
          <a
            href="tel:+213667410867"
            className="underline text-secondary cursor-pointer hover:text-white"
          >
            +213667410867
          </a>
        </p>
      </div>
      <div className="flex gap-4">
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          {" "}
          <a
            href="https://github.com/sohaibchebah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="w-10 h-10" />
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          <a
            href="https://linkedin.com/in/sohaib-chebah-653a87281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="w-10 h-10" />
          </a>
        </Tilt>
      </div>
      <p className="text-sm text-secondary">
        &copy; 2024 Sohaib Chebah. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
