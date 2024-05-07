import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 w-full h-40">
      <p className="text-2xl flex justify-center py-4">
        ❤️ Realizado con mucho amor ❤️
      </p>
      <div className="flex justify-around">
        <Image
          src="/Images/ravit.png"
          alt="Logo"
          width={40}
          height={40}
          className="brightness-200"
        />
        <a href="https://github.com/santiagomillan">
          <FaGithub size={50} />
        </a>

        <Image
          src="/Images/ravit.png"
          alt="Logo"
          width={40}
          height={40}
          className="brightness-200"
        />
      </div>
    </footer>
  );
}
