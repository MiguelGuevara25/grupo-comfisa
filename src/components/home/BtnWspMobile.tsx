import { FaWhatsapp } from "react-icons/fa6";

export default function BtnWspMobile() {
  return (
    <a
      href="https://wa.me/+51994045254"
      target="_blank"
      className="animate__animated animate__bounce animate__infinite fixed bottom-8 right-8 z-50 rounded-full bg-green-400 p-3 text-5xl text-white lg:hidden"
    >
      <FaWhatsapp />
    </a>
  );
}
