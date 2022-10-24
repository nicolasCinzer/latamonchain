import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ children }) => {
  const router = useRouter();

  return (
    <div id="navbar" className="flex justify-between p-4 bg-white shadow">
      <Link href="/">
        <a
          className={`transition-all duration-300 ${
            router.asPath === "/"
              ? "px-1 border-b-2 border-l-2 border-emerald-400 shadow rounded"
              : "hover:text-emerald-700"
          }`}
        >
          LATAM ON CHAIN
        </a>
      </Link>
      <div className="transition-all duration-300">
        <Link href="/cursos">
          <a
            className={`mx-6 transition-all duration-300 ${
              router.asPath === "/cursos"
                ? "px-2 py-1 bg-emerald-400/60 rounded-3xl"
                : "hover:text-emerald-700"
            } `}
          >
            CURSOS
          </a>
        </Link>
        <Link href="/recursos">
          <a
            className={`mx-6 transition-all duration-300 ${
              router.asPath === "/recursos"
                ? "px-2 py-1 bg-emerald-400/60 rounded-3xl"
                : "hover:text-emerald-700"
            } `}
          >
            RECURSOS
          </a>
        </Link>
        <Link href="/faqs">
          <a
            className={`mx-6 transition-all duration-300 ${
              router.asPath === "/faqs"
                ? "px-2 py-1 bg-emerald-400/60 rounded-3xl"
                : "hover:text-emerald-700"
            } `}
          >
            FAQs
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
