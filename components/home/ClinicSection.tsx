import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const clinicImages = [
  "/assets/img/the-one-500x500.jpeg",
  "/assets/img/office-500x500.jpg",
  "/assets/img/the-one-500x500.jpeg",
  "/assets/img/office-500x500.jpg",
];

const clinicWhatsappLink =
  "https://wa.me/5511989706917?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%20da%20Cl%C3%ADnica%20L%C3%B3tus.";

export function ClinicSection() {
  return (
    <section id="aclinica" className="mt-14 scroll-mt-24">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-4xl leading-tight font-bold text-lotus-rose-500 sm:text-5xl">
          Conheça a Clínica
        </h2>

        <div className="mt-4 space-y-4 text-base leading-8 text-[#8f3a55] sm:text-lg sm:leading-8">
          <p>
            A Clínica Lotus oferece uma <strong>abordagem única e transformadora</strong> na
            nutrição, com uma equipe de profissionais especializados e apaixonados. Nosso
            atendimento personalizado considera a história, preferências e restrições de cada
            paciente, permitindo-nos criar planos alimentares adequados e alinhados aos seus
            objetivos.
          </p>
          <p>
            Promovemos uma <strong>relação saudável</strong> com a comida e uma{" "}
            <strong>alimentação equilibrada e prazerosa</strong>. Além das orientações
            nutricionais, trabalhamos com a nutrição comportamental, para entender as emoções
            ligadas à alimentação e incentivar hábitos saudáveis.
          </p>
          <p>
            Acreditamos em um <strong>cuidado nutricional eficiente e humanizado</strong>, oferecendo
            uma experiência acolhedora e apoiadora. Nosso compromisso é{" "}
            <strong>transformar corpo e mente</strong>, restaurando a autoestima e promovendo o
            equilíbrio integral.
          </p>
          <p>
            Seja bem-vindo à Clínica Lótus, onde a nutrição gentil é o caminho para uma vida
            saudável e plena!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {clinicImages.map((image, index) => (
            <article key={`${image}-${index}`} className="overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={`Imagem da clínica ${index + 1}`}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </article>
          ))}
        </div>

        <a
          href={clinicWhatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 mx-auto flex w-fit items-center gap-2 rounded-full bg-[#14C751] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#11b549]"
        >
          <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0" />
          Agendar consulta agora!
        </a>
      </div>
    </section>
  );
}
