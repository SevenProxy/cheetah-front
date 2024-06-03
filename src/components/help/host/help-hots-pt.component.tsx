import { useState } from 'react';

const HelpHostPtComponent = (): JSX.Element => {
  const [helpOne, setHelpOne] = useState(true);
  const [helpTwo, setHelpTwo] = useState(false);
  const [helpThree, setHelpThree] = useState(false);
  const [helpFour, setHelpFour] = useState(false);

  return (
    <section className="bg-white dark:bg-zinc-800">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Perguntas frequentes
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classNamees="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classNamees="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                onClick={() => setHelpOne(!helpOne)}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 border-b border-gray-200 dark:border-gray-700 dark:text-white"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Como faço para migrar meu site para uma nova hospedagem?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            {helpOne && <div
              id="accordion-flush-body-1"
              className=""
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Migrar seu site para uma nova hospedagem pode ser simples com os passos certos:
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <strong>Backup Completo:</strong> Faça um backup completo dos arquivos do seu site e banco de dados.
                </p>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpHostPtComponent;
