import AOS from "aos";
import "aos/dist/aos.css";

const BannerComponent = () => {
  AOS.init();

  const backgroundImageUrl =
    "https://schrankdesign.de/cdn/shop/files/Banner_3.jpg?v=1674234169&width=1000";

  const backgroundImageUrltwo =
    "https://schrankdesign.de/cdn/shop/files/Composing_171b5300-98f1-4e88-8de2-9975f4279ef2_720x.jpg?v=1674181504";

  return (
    <div
      className="h-[34rem] bg-cover bg-center relative"
      data-aos="fade-up"
      data-aos-duration="3000"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="flex flex-col justify-center h-full items-center w-1/2 relative z-10">
        <h3 className="text-lg text-white font-bold">
          Individuell konfigurierbar
        </h3>
        <h1 className="text-6xl mt-5 text-white font-bold">Modern & Zeitlos</h1>
        <p className="text-center font-bold text-white mt-5">
          {
            '"Die Schönheit des Lebens offenbart sich in den kleinen Dingen, wie in der perfekten'
          }
          <br />
          {
            " Form eines Stuhls oder der Geschichte, die in einem alten Schrank verborgen liegt."
          }
        </p>

        <button className="bg-green-700 h-12 bg-opacity-90 rounded-md w-72 text-white mt-5 font-bold">
          JETZT KONFIGURIEREN
        </button>
      </div>
      <div className="h-36 bg-gray-100 justify-around flex">
        <div className="flex flex-col items-center">
          <img
            className="h-16 mt-5"
            src="https://schrankdesign.de/cdn/shop/files/schnelle-lieferung_140x.png?v=1674135960"
            alt=""
          />
          <p className="text-center font-semibold">KURZE LIEFERZEIT</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-16 mt-5"
            src="https://schrankdesign.de/cdn/shop/files/telefon_140x.png?v=1674135889"
            alt=""
          />
          <p className="text-center font-semibold">BERATUNG VOM TISCHLER</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-16 mt-5"
            src="https://schrankdesign.de/cdn/shop/files/sichere-bezahlung_140x.png?v=1674136456"
            alt=""
          />
          <p className="text-center font-semibold">BEZAHLUNG NACH LIEFERUNG</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-16 mt-5"
            src="https://schrankdesign.de/cdn/shop/files/star_140x.png?v=1674135549"
            alt=""
          />
          <p className="text-center font-semibold">BEZAHLUNG NACH LIEFERUNG</p>
        </div>
      </div>

      <div className="flex mt-8 justify-center items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text center text-2xl font-bold">
            Das sagen unsere Kunden
          </h2>
          <div className="flex justify-center">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
          </div>
          <p className="text-center font-medium">von 132 Bewertungen</p>
        </div>
      </div>

      <div className="flex mt-10 justify-around gap-5  ">
        <div href="#" className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
          </div>
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Grandioser Schrank
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Einbauschrank nach Maß: Der Online-
          </p>
          <p className="text-gray-600">Laura</p>
          <p className="text-gray-600">01/20/2022</p>
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-10 w-10"
              src="https://cdn.shopify.com/s/files/1/0689/3977/6300/files/Principale_9dd5deef-0919-45ef-93e7-b743c70466b0_56x56.jpg"
              alt=""
            />
            <p>Kleiderschrank (K+G)</p>
          </div>
        </div>
        <div href="#" className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
          </div>
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Grandioser Schrank
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Einbauschrank nach Maß: Der Online-
          </p>
          <p className="text-gray-600">Laura</p>
          <p className="text-gray-600">01/20/2022</p>
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-10 w-10"
              src="https://cdn.shopify.com/s/files/1/0689/3977/6300/products/Composing_070415e9-90c5-4ff5-95bd-93c1ff4d881f_56x56.jpg"
              alt=""
            />
            <p>Designer Sideboard Mia</p>
          </div>
        </div>
        <div href="#" className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              alt=""
            />
          </div>
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Grandioser Schrank
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Einbauschrank nach Maß: Der Online-
          </p>
          <p className="text-gray-600">Laura</p>
          <p className="text-gray-600">01/20/2022</p>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col items-center justify-center"
          >
            <img
              className="h-10 w-10"
              src="https://cdn.shopify.com/s/files/1/0689/3977/6300/files/Principale_9dd5deef-0919-45ef-93e7-b743c70466b0_56x56.jpg"
              alt=""
            />
            <p>Kleiderschrank (K+K)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-11 justify-center items-center">
        <h1 className=" text-4xl font-bold ">Designermöbel nach Maß</h1>
        <div className="flex justify-evenly gap-11 items-center">
          <div className="rounded-md border shadow-lg mt-12 w-96">
            <div className="relative group ">
              <img
                className="h-96 w-full border rounded-md object-cover transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="https://schrankdesign.de/cdn/shop/files/aussen_c04bb002-5d10-43e1-a25d-c6f65ef34393_270x.jpg?v=1682948735"
                alt=""
              />
              <img
                className="absolute inset-0 h-96 w-full object-cover opacity-0 transition-opacity duration-300  transform group-hover:opacity-100 group-hover:scale-100"
                src="https://schrankdesign.de/cdn/shop/files/aussen_500x.jpg?v=1682948672"
                alt=""
              />
            </div>
            <p className="text-center text-lg mt-2">Kleiderschrank (K+G+K)</p>
            <div className="flex justify-center items-center">
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <p className="ml-2 text-base">5 Bewertungen</p>
            </div>
            <p className="text-center text-lg">Breiten: 130cm - 260cm</p>
            <div className="flex items-center justify-center mt-4 mb-2 ">
              <button className="bg-green-900 hover:bg-green-800 hover:bg-opacity-75 text-white font-medium h-11 rounded-md w-56 bg-opacity-80">
                {" "}
                JETZT KONFIGURIEREN
              </button>
            </div>
          </div>

          <div className="rounded-md border shadow-lg mt-12 w-96">
            <div className="relative group ">
              <img
                className="h-96 w-full border rounded-md object-cover transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="https://schrankdesign.de/cdn/shop/files/aussen_c04bb002-5d10-43e1-a25d-c6f65ef34393_270x.jpg?v=1682948735"
                alt=""
              />
              <img
                className="absolute inset-0 h-96 w-full object-cover opacity-0 transition-opacity duration-300  transform group-hover:opacity-100 group-hover:scale-100"
                src="https://schrankdesign.de/cdn/shop/files/aussen_500x.jpg?v=1682948672"
                alt=""
              />
            </div>
            <p className="text-center text-lg mt-2">Kleiderschrank (K+G+K)</p>

            <div className="flex justify-center items-center">
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <p className="ml-2 text-base">5 Bewertungen</p>
            </div>
            <p className="text-center text-lg">Breiten: 130cm - 260cm</p>
            <div className="flex items-center justify-center mt-4 mb-2 ">
              <button className="bg-green-900 hover:bg-green-800 hover:bg-opacity-75 text-white font-medium h-11 rounded-md w-56 bg-opacity-80">
                {" "}
                JETZT KONFIGURIEREN
              </button>
            </div>
          </div>

          <div className="rounded-md border shadow-lg mt-12 w-96">
            <div className="relative group ">
              <img
                className="h-96 w-full border rounded-md object-cover transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="https://schrankdesign.de/cdn/shop/files/aussen_c04bb002-5d10-43e1-a25d-c6f65ef34393_270x.jpg?v=1682948735"
                alt=""
              />
              <img
                className="absolute inset-0 h-96 w-full object-cover opacity-0 transition-opacity duration-300  transform group-hover:opacity-100 group-hover:scale-100"
                src="https://schrankdesign.de/cdn/shop/files/aussen_500x.jpg?v=1682948672"
                alt=""
              />
            </div>
            <p className="text-center text-lg mt-2">Kleiderschrank (K+G+K)</p>
            <div className="flex justify-center items-center">
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <img
                className="h-4"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                alt=""
              />
              <p className="ml-2 text-base">5 Bewertungen</p>
            </div>
            <p className="text-center text-lg">Breiten: 130cm - 260cm</p>
            <div className="flex items-center justify-center mt-4 mb-2 ">
              <button className="bg-green-900 hover:bg-green-800 hover:bg-opacity-75 text-white font-medium h-11 rounded-md w-56 bg-opacity-80">
                {" "}
                JETZT KONFIGURIEREN
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20 mb-20 overflow-hidden justify-center">
          <h1 className="text-4xl font-bold text-center flex flex-col items-center">
            <span className="whitespace-pre-line">
              {
                "Schönheit ist die Mischung aus Form und Funktion,die \n das Auge erfreut und das Herz inspiriert."
              }
            </span>
          </h1>

          <p className="font-thin text-base mt-4">Louis Sullivan</p>
        </div>

        <div
          className="h-screen w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${backgroundImageUrltwo}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>

          <div className="flex flex-col justify-center h-full items-center w-1/2 relative z-10">
            <h3 className="text-lg text-white font-bold">
              {
                "MODERNE FORMEN UND LIEBE, BEIDES ERFORDERT MUT UND RISIKOBEREITSCHAFT."
              }
            </h3>
            <h1 className="text-6xl ml-8 mt-5 text-white font-bold">
              Moderne Formen und Liebe
            </h1>

            <button className="bg-green-600 h-12 bg-opacity-90 rounded-md w-72 text-white mt-5 font-bold">
              DESIGNE DEINE ZUKUNFT
            </button>
          </div>
        </div>
      </div>

      <div className="flex  justify-center mt-8 items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex rounded-3xl  p-6 justify-center items-center"
        >
          <div className="relative overflow-hidden">
            <img
              className="rounded-xl h-[670px] w-full transition-transform transform-gpu scale-100 hover:scale-105"
              src="https://schrankdesign.de/cdn/shop/files/Composing_720x.jpg?v=1674181436"
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-5xl">Kommoden</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-center relative gap-8 items-center"
        >
          <div className="relative group overflow-hidden">
            <img
              className="h-80 w-full rounded-3xl transition-transform transform-gpu scale-100 group-hover:scale-105"
              src="https://schrankdesign.de/cdn/shop/files/Composing_klein_i2_700x.jpg?v=1674147980"
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-3xl">Sideboards</p>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              className="h-80 w-full rounded-3xl transition-transform transform-gpu scale-100 group-hover:scale-105"
              src="https://schrankdesign.de/cdn/shop/files/Composing_klein_1320x.jpg?v=1674215640"
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-3xl">Lowboards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-center text-5xl font-bold">Werte und Erfahrung</h1>
        <div className="flex justify-around items-center mt-8">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://schrankdesign.de/cdn/shop/files/Individuell_1200x.jpg?v=1674221575"
              className="w-84 rounded-2xl h-80"
              alt=""
            />
            <h3 className="text-2xl font-bold mt-4">Individuell</h3>
            <p className="break-words text-center">
              Mit unserem individuellen Möbel-Konfigurator kannst du ganz
              einfach dein persönliches Designerstück kreieren. Entwerfe es nach
              deinen Wünschen und erwecke es zum Leben!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="https://schrankdesign.de/cdn/shop/files/Nachhaltig_1200x.jpg?v=1674221185"
              className="w-84 rounded-2xl h-80"
              alt=""
            />
            <h3 className="text-2xl font-bold mt-4">Nachaltig</h3>
            <p className="break-words text-center">
              Verantwortungsvoller Umgang mit Holz als Rohstoff und Regionalität
              aus Leipzig sichern unsere Nachhaltigkeit. Unsere Möbel schonen
              die Umwelt und unterstützen die Region
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="https://schrankdesign.de/cdn/shop/files/Muster_1200x.jpg?v=1674221120"
              className="w-84 rounded-2xl h-80"
              alt=""
            />
            <h3 className="text-2xl font-bold mt-4">Beratung</h3>
            <p className="break-words text-center">
              Unsere Tischler bieten dir persönliche und kompetente Beratung bei
              der Wahl deiner Möbel. Lass dich von unseren Fachleuten beraten
              und finde genau das, was du suchst!
            </p>
          </div>
        </div>
      </div>

      <footer className="h-96 bg-neutral-500 mt-9 justify-around flex">
  <div className="flex flex-col mt-4 gap-5">
    <h4 className="text-white font-semibold text-lg">UNSER SERVICE</h4>
    <p className="text-white">Über Uns</p>
    <p className="text-white">Beratung</p>
    <p className="text-white">Muster</p>
    <p className="text-white">FAQ - Häufige Fragen</p>
    <p className="text-white">Maßanfertigung & Sonderwunsch</p>
    <p className="text-white">Bestellung & Konfiguration</p>
    <h2 className="text-white font-semibold mt-5">Schrankdesign.de</h2>
  </div>

  <div className="flex mt-4 flex-col gap-5">
    <h4 className="text-white font-semibold text-lg">RECHTLICHES</h4>
    <p className="text-white">AGB</p>
    <p className="text-white">Widerrufsrecht</p>
    <p className="text-white">Impressum</p>
    <p className="text-white">Versand</p>
    <p className="text-white">Datenschutz</p>
    <p className="text-white">Cookie Einstellungen</p>
  </div>

  <div className="flex mt-4 flex-col gap-5 max-w-[350px]">
    <h4 className="text-white font-semibold text-lg">DESIGNERMÖBEL NACH MAS</h4>
    <p className="text-white break-words">
      Bei uns findest du hochwertige Designermöbel nach Maß. Das 
      heißt du kannst hier alles vom Maß, über die Materialien bis 
      hin zu Füßen und Oberflächenbehandlung, frei konfigurieren.
    </p>
  </div>
</footer>

    </div>
  );
};

export default BannerComponent;
