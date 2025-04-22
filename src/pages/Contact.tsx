import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import { CiBasketball } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <section>
      <div className="text-white pt-20 flex flex-col lg:flex-row gap-20">
        <div className="md:pl-6">
          {/* contact info */}
          <div>
            <h2 className="uppercase font-medium mb-7">Contact info</h2>
            <div className="flex flex-col sm:gap-20 gap-10">
              <div data-aos="zoom-in" className="flex gap-3 sm:gap-6">
                <div className="bg-primary-gradient px-6 py-5 rounded-xl scale-75 sm:scale-100">
                  <MdOutlineEmail className="icon" />
                </div>
                <div>
                  <p className="uppercase text-sm text-primary mb-1">Mail us</p>
                  <p className="font-medium opacity-80">
                    tessemayenoh94@gmail.com
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="flex gap-3 sm:gap-6"
              >
                <div className="bg-primary-gradient px-6 py-5 rounded-xl scale-75 sm:scale-100">
                  <FiPhone className="icon" />
                </div>
                <div>
                  <p className="uppercase text-sm text-primary mb-1">
                    contact us
                  </p>
                  <p className="font-medium opacity-80">+251-905-014-179</p>
                  <p className="font-medium opacity-80">+251-944-403-029</p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex gap-3 sm:gap-6 items-center"
              >
                <div className="bg-primary-gradient px-6 py-5 rounded-xl scale-75 sm:scale-100">
                  <GrLocation className="icon" />
                </div>
                <div>
                  <p className="uppercase text-sm text-primary mb-1">
                    location
                  </p>
                  <p className="font-medium opacity-80">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* social info */}
          <div className="mt-10 text-white">
            <h2 className="uppercase font-medium">Social info</h2>
            <div className="flex gap-5 lg:justify-around mt-5">
              <Link
                to="https://www.linkedin.com/in/yenoh-tessema-366793258/"
                className="gradient-transition hover:text-black transition-all duration-200"
                data-aos="zoom-in"
              >
                <FaLinkedinIn className="size-14 p-4 sm:size-20 sm:p-6" />
              </Link>
              <Link
                to="https://github.com/codingNoah"
                className="gradient-transition hover:text-black transition-all duration-200"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FaGithub className="size-14 p-4 sm:size-20 sm:p-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1" data-aos="fade-in">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
