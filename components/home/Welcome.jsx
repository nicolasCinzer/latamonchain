import BlockchainHome from "../svg/BlockchainHome";

const Welcome = () => {
  return (
    <div className="grid md:grid-cols-2 mb-8">
      <div className="flex flex-col pb-8 md:py-16 w-min">
        <a
          href="https://github.com/nicolasCinzer/latam-on-chain"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-6xl py-4 px-8 mb-4 w-fit bg-emerald-300 rounded-3xl z-10 transition-all duration-300 hover:scale-110 hover:border-l-4 hover:border-b-4 border-emerald-400">
            #LATAMonCHAIN
          </div>
        </a>
        <div className="text-xl pl-4">
          LATAM on Chain es un proyecto open-source con el objetivo de recopilar
          contenido sobre Web3 en español!
        </div>
      </div>
      <BlockchainHome />
    </div>
  );
};

export default Welcome;
