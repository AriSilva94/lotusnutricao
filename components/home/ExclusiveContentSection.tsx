import Image from "next/image";
import { FaLock } from "react-icons/fa";

export function ExclusiveContentSection() {
  return (
    <section className="relative left-1/2 right-1/2 mt-14 -mx-[50vw] w-screen overflow-hidden">
      <div className="grid min-h-80 lg:grid-cols-2">
        <div className="bg-lotus-rose-500 px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-none">
            <h2 className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:whitespace-nowrap">
              Quer receber conteúdos exclusivos?
            </h2>
            <p className="mt-6 text-lg text-white">É só se inscrever abaixo!</p>

            <form className="mt-8 space-y-3">
              <label className="sr-only" htmlFor="exclusive-name">
                Seu nome
              </label>
              <input
                id="exclusive-name"
                name="name"
                type="text"
                placeholder="Seu nome"
                className="h-11 w-full rounded-full bg-white px-6 text-lg text-lotus-burgundy placeholder:text-[#c39dac] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />

              <label className="sr-only" htmlFor="exclusive-email">
                Seu email
              </label>
              <div className="relative">
                <input
                  id="exclusive-email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  className="h-11 w-full rounded-full bg-white px-6 pr-14 text-lg text-lotus-burgundy placeholder:text-[#c39dac] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                />
                <FaLock
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-[#dc3f57]"
                />
              </div>

              <label className="sr-only" htmlFor="exclusive-captcha">
                Verificação
              </label>
              <input
                id="exclusive-captcha"
                name="captcha"
                type="text"
                placeholder="1+1=?"
                className="h-11 w-full rounded-full bg-white px-6 text-lg text-lotus-burgundy placeholder:text-[#c39dac] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />

              <button
                type="submit"
                className="inline-flex h-11 min-w-26 items-center justify-center rounded-full bg-[#f5e0dc] px-7 text-2xl leading-none font-semibold text-lotus-burgundy transition-colors hover:bg-[#f0d2cc]"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="relative min-h-80">
          <Image
            src="/assets/img/conteudos-exclusivos.jpg"
            alt="Pessoa segurando celular"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
