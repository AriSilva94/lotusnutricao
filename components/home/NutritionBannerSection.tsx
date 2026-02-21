import Image from "next/image";

export function NutritionBannerSection() {
  return (
    <section className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden border border-[#88364C] rounded-none">
      <div className="grid min-h-[220px] grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[220px]">
          <Image
            src="/assets/img/pexels-moose-photos.jpg"
            alt="Mulher deitada cercada por frutas"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        <div className="flex items-center bg-[#FFE2E2] px-6 py-10 md:px-8 lg:px-12">
          <h2 className="max-w-lg text-3xl font-bold leading-tight text-lotus-burgundy sm:text-4xl">
            Nutrição saudável e sem restrições, transformando corpo e mente.
          </h2>
        </div>
      </div>
    </section>
  );
}
