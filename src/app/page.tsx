import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="text-center mt-32">
        <p>Trusted by those companies</p>
        <div className="flex gap-8 mt-6 *:h-8 justify-center">
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg"
            alt="Adobe"
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/12wPeh4lwu7VlCTlVsAWNo/f60c88c5735bc8595d0ab28622e2abf6/ifood.svg"
            alt="ifood"
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/6QYvDUGfi9wmqju2ZQMdpC/56cf3afb486d1f048b2ce8c966312ba4/Cielo.svg"
            alt="cielo"
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/2QQzVl11euSiggd8zTFPE7/09e7b96d45fb6ee7cb783d89726b5964/fast-Shop.svg"
            alt="fast"
          />
        </div>
      </section>
    </>
  );
}
