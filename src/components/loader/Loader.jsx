import "./loader.css";
import Image from "next/image";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-icon">
        <Image
          src="/assets/images/logo2.png"
          width={200}
          height={100}
          alt="loader logo"
          priority
        />
      </div>
    </div>
  );
}

export default Loader;
