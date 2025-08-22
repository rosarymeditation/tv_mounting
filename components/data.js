import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  BanIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/mount2.jpg";
import benefitTwoImg from "../public/img/mount.jpg";
import { CheckCircleIcon } from "@heroicons/react/solid";

const benefitOne = {
  title: "Expert Installation for Every Home",
  desc: "Trust Our Skilled Technicians for Seamless TV Mounting",
  image: benefitOneImg,
  bullets: [
    {
      title: "Professional Expertise",
      desc: " Our trained technicians have years of experience in TV mounting and installation.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Safety First",
      desc: "We ensure that your TV is securely mounted to prevent accidents and damage.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Customized Solutions",
      desc: "Each installation is tailored to fit your space and preferences, ensuring optimal viewing angles.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Quick and Efficient",
      desc: "We value your time, completing installations promptly without compromising quality.",
      icon: <EmojiHappyIcon className="bg-green" />,
    },
    {
      title: "Post-Installation Support",
      desc: " Enjoy peace of mind with our aftercare service, ensuring your setup remains perfect.",
      icon: <EmojiHappyIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our Professional TV Mounting and Installation Services",
  desc: "Enhancing Your Entertainment Space with Expertise and Precision",
  image: benefitTwoImg,
  bullets: [
    {
      title: "TV Wall Mounting",
      desc: "We specialize in mounting TVs of all sizes securely and professionally. Our technicians will assess your space to determine the best height and angle for optimal viewing, ensuring a clean and tidy installation",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Cable Management",
      desc: "Say goodbye to unsightly cables and clutter. Our cable management services keep your setup looking clean and organized, enhancing the aesthetics of your room while ensuring safety.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Consultation Services",
      desc: "Not sure where to start? Our expert consultants provide personalized advice on the best mounting solutions, equipment choices, and room layouts tailored to your needs and preferences. ",
      icon: <CheckCircleIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
