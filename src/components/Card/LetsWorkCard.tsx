import Card from "../Card";

const LetsWorkCard = () => {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay="200"
      absolute
      className="pt-0 flex-1 h-full"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
            alt="Star"
          />
        </div>
        <h2 className="text-3xl lg:text-[42px] font-medium leading-tight mt-2 ">
          Let's <br /> work <span className="text-accent">together.</span>
        </h2>
      </div>
    </Card>
  );
};

export default LetsWorkCard;
