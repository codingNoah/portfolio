import Card from "../components/Card";
import img1 from "../assets/images/worksPage/1.jpg";
import img2 from "../assets/images/worksPage/2.jpg";
import img3 from "../assets/images/worksPage/3.jpg";
import img4 from "../assets/images/worksPage/4.jpg";
import img5 from "../assets/images/worksPage/5.jpg";
import img6 from "../assets/images/worksPage/6.jpg";
import lucycoding from "../assets/images/lucycoding.png";
import craimer from "../assets/images/craimer.png";
import nyr from "../assets/images/NYR.png";
import icog from "../assets/images/icog.png";

const imgStyle =
  "rounded-4xl w-full h-[200px] sm:h-[250px] lg:h-[350px] object-cover ";

const Works = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-5 pt-20 justify-center">
        {/* section title for mobile */}
        <div
          data-aos="fade-in"
          className="flex sm:hidden gap-1 items-center justify-center mb-4 "
        >
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Star"
            className="object-contain size-7 lg:size-auto"
          />
          <p className="text-white uppercase font-semibold text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            all projects
          </p>
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Star"
            className="object-contain size-7 lg:size-auto"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Card
            data-aos="zoom-in"
            data-aos-delay="100"
            title="iCog"
            description="Landing Page for iCog ACC"
            worksCard
          >
            <img className={imgStyle} decoding="async" src={icog} alt="" />
          </Card>
        </div>

        <div>
          {/* section title */}
          <div
            data-aos="fade-in"
            className="hidden sm:flex gap-1 items-center justify-center mb-4 "
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain size-7 lg:size-auto"
            />
            <p className="text-white uppercase font-semibold text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
              all projects
            </p>
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain size-7 lg:size-auto"
            />
          </div>

          <div className="flex flex-col sm:grid grid-cols-2 gap-5">
            <Card
              data-aos="zoom-in"
              data-aos-delay="200"
              title="Lucy Coding"
              description="Online Coding Platform"
              worksCard
            >
              <img className={imgStyle} src={lucycoding} alt="" />
            </Card>

            <Card
              data-aos="zoom-in"
              data-aos-delay="400"
              title="Craimer"
              description="AI based Real Estate Agent Generation"
              worksCard
            >
              <img className={imgStyle} src={craimer} alt="" />
            </Card>
            <Card
              data-aos="zoom-in"
              data-aos-delay="500"
              title="Nyr Automation"
              description="Not yet reached"
              worksCard
            >
              <img className={imgStyle} src={nyr} alt="" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
