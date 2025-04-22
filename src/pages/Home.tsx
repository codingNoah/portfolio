import Card from "../components/Card";
import { FiCamera } from "react-icons/fi";
import { PiPencilCircle } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import ProfilesCard from "../components/Card/ProfilesCard";
import CredentialsCard from "../components/Card/CredentialsCard";
import LetsWorkCard from "../components/Card/LetsWorkCard";
import Marquee from "react-fast-marquee";
import yenoh from "../assets/images/yenoh.jpg";
import { DiDjango } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { FaReact } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="space-y-6 pt-20">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* profile card */}
        <div
          className="custom-bg relative flex-1 group cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-5 xl:gap-8 items-center px-7 sm:px-[46px] lg:px-6 xl:px-[46px] py-[50px]">
            <img
              className="w-[224px] h-[224px] object-cover rounded-tl-4xl rounded-br-4xl"
              src={yenoh}
              alt="profile"
            />

            <div className="text-white w-full sm:w-auto">
              <h5 className="text-sm font-medium text-primary">
                A SOFTWARE ENGINEER
              </h5>
              <h1 className="text-4xl font-medium">
                Yenoh <br />
                Tessema.
              </h1>
              <p className="text-sm text-primary mt-3">
                I am a Software Engineer based in Addis Ababa, Ethiopia.
              </p>
            </div>
          </div>
          <Link
            to="#"
            className="absolute right-6 bottom-8 opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out"
          >
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt="link button"
            />
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="custom-bg text-primary px-5 py-5"
          >
            <Marquee speed={80}>
              <p className="text-xs mr-2">
                LATEST WORK AND <span className="text-white">FEATURED </span>*
              </p>
              <p className="text-xs mr-2">
                LATEST WORK AND <span className="text-white">FEATURED </span>*
              </p>
              <p className="text-xs mr-2">
                LATEST WORK AND <span className="text-white">FEATURED </span>*
              </p>
            </Marquee>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row gap-5 ">
            <div className="flex-1">
              <CredentialsCard />
            </div>

            <div data-aos="zoom-in" data-aos-delay="150" className="flex-1">
              <Card title="Projects" description="SHOWCASE" className="h-full">
                <img
                  onClick={() => navigate("/works")}
                  decoding="async"
                  src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                  alt=""
                  className="mx-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-5">
        <div className="flex flex-col sm:flex-row flex-1 gap-5">
          <Card
            data-aos="zoom-in"
            data-aos-delay="150"
            className="flex-1 lg:flex-none"
            title="GFonts"
            description="BLOG"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
              alt=""
              className="mx-auto"
            />
          </Card>
          <Card
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex-1"
            title="Services Offering"
            description="SPECIALIZATION"
          >
            <div className="flex  h-full justify-around items-center">
              <DiDjango className="icon" />
              <AiOutlinePython className="icon" />
              <FaReact className="icon" />
              <MdDeveloperMode className="icon" />
            </div>
          </Card>
        </div>
        <div data-aos="zoom-in" data-aos-delay="250">
          <ProfilesCard />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="flex flex-col sm:flex-row flex-1 justify-around p-6 custom-bg text-center gap-6"
        >
          <div className="px-8 py-11 w-full  rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">03</p>
            <p className="text-xs uppercase text-primary">
              Years <br /> Experience
            </p>
          </div>
          <div className="px-8 py-11 w-full rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+4</p>
            <p className="text-xs uppercase text-primary">
              clients <br /> worldwide
            </p>
          </div>
          <div className="px-8 py-11 w-full rounded-4xl bg-primary-gradient text-white space-y-5 shadow-custom">
            <p className="text-3xl font-medium mb-">+10</p>
            <p className="text-xs uppercase text-primary">
              total <br /> projects
            </p>
          </div>
        </div>

        <LetsWorkCard />
      </div>
    </section>
  );
};

export default Home;
