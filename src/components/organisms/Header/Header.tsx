import Image from "next/image";
import Link from "next/link";
import { GiPokerHand } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-8 flex justify-around items-center">
        <p>
          <GiPokerHand size={30} />
        </p>
        <Link href="/">
          <Image
            src="/Images/ravit.png"
            alt="Logo"
            width={40}
            height={40}
            className="brightness-200"
          />
        </Link>
        <p>
          <FaHeart size={20} className="text-red-600" />
        </p>
      </div>
    </header>
  );
};
