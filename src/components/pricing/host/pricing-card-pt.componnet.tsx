const PricingCardPtComponent = (): JSX.Element => {
  return (
    <section id="planos" className="bg-white dark:bg-zinc-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Escolha o plano ideal para você
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-zinc-300">
            Comece com o pé direito. Oferecemos 30 dias para pedir reembolso, ou seja, risco zero para você.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-zinc-700 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Free</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-zinc-300">
            Solução ideal para iniciantes
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">R$0</span>
              <span className="text-gray-500 dark:text-gray-400">/reais</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Bot</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>1 Projeto</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>30 dias grátis</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Suporte</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            >
              Iniciar
            </a>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-purple-600 xl:p-8 dark:bg-zinc-700 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-zinc-300">
              Perfeito para sites pessoais e bots.
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">R$29</span>
              <span className="text-gray-500 dark:text-gray-400">/reais</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Sites e Bots</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>10 projetos</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Suporte 24 horas</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Logs
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Modelos de sites
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            >
              Iniciar
            </a>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-zinc-700 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Business</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-zinc-300">
              Tenha mais potência e recursos
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">R$60</span>
              <span className="text-gray-500 dark:text-gray-400">/reais</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Sites e Bot</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Projetos inlimitados</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Suporte 24 horas
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Logs
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Modelos de sites
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Modelos de Bot
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCardPtComponent;
