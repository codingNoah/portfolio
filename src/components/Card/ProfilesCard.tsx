import Card from "../Card";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProfilesCard = () => {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay="150"
      title="Profiles"
      description="STAY WITH ME"
    >
      <div className="flex gap-5 justify-around custom-bg px-4 py-6 shadow-lg">
        <Link
          to="https://www.linkedin.com/in/yenoh-tessema-366793258/"
          className="gradient-transition hover:text-black transition-all duration-200"
        >
          <FaLinkedinIn className="size-20 p-6" />
        </Link>
        <Link
          to="https://github.com/codingNoah"
          className="gradient-transition hover:text-black transition-all duration-200"
        >
          <FaGithub className="size-20 p-6" />
        </Link>
      </div>
    </Card>
  );
};

export default ProfilesCard;
