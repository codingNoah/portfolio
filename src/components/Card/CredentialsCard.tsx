import Card from "../Card";

const CredentialsCard = () => {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay="150"
      title="Credentials"
      description="MORE ABOUT ME"
      className="h-full"
    >
      <img
        decoding="async"
        src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
        alt=""
        className="w-full max-w-96 mx-auto xl:w-auto xl:mx-0 object-contain"
      />
    </Card>
  );
};

export default CredentialsCard;
