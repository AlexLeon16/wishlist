export default function LuxuryWishlistBoard() {
  const items = [
    {
      title: 'Mazda MX-5 Miata',
      category: 'Dream Car',
      price: '≈ 1 500 000 ₽',
      priority: 'А мне нравится',
      description:
        'Легендарный lightweight roadster и так с глазками. Да маленькая.',
      image:
        '/wishlist/public/images/myata.jpg',
      link: 'https://www.avito.ru/minsk/avtomobili/mazda_mx-5_1.8_mt_1994_250_500_km_8045825383?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJXTGd1TjB0bGpnWFZXdDI2Ijt9rMQPaT8AAAA',
    },
    {
      title: 'Кованые R17 и резина к ним',
      category: 'Колесики',
      price: '≈ 180 000 ₽',
      priority: 'Нужно',
      description:
        'Зимний комплект, чтобы у меня не болела голова.',
      image:
        '/wishlist/public/images/koleso.avif',
      link: 'https://rimzona.ru/diski/wheels-r17/',
    },
    {
      title: 'Dodge Challenger / Charger',
      category: 'Muscle Dream',
      price: '≈ 5 500 000 ₽',
      priority: 'Да мечта и что теперь',
      description:
        'Американская мощь, эстетика late-night drives и вайб кино.',
      image:
        '/wishlist/public/images/dodge.avif',
      link: 'https://www.dodge.com',
    },
    {
      title: 'Kawasaki Ninja 400',
      category: 'Motorcycle',
      price: '≈ 900 000 ₽',
      priority: 'А иначе зачем мне категория А',
      description:
        'Хочу выёбываться.',
      image:
        '/wishlist/public/images/kavasaki.avif',
      link: 'https://www.kawasaki.com',
    },
    {
      title: 'Honda CBR500R',
      category: 'Motorcycle',
      price: '≈ 1 100 000 ₽',
      priority: 'А иначе зачем мне категория А',
      description:
        'Хочу выёбываться.',
      image:
        '/wishlist/public/images/honda.avif',
      link: 'https://powersports.honda.com',
    },
    {
      title: 'Мотоэкип',
      category: 'Lifestyle',
      price: '≈ 250 000 ₽',
      priority: 'Ну, а как без него',
      description:
        'Премиальный rider aesthetic: шлем, куртка, перчатки и ботинки.',
      image:
        '/wishlist/public/images/ekip.jpg',
      link: 'https://www.alpinestars.com',
    },
    {
      title: '2 500 000 ₽ наличкой',
      category: 'Закроем ипотеку?',
      price: 'Target',
      priority: 'Ultimate',
      description:
        'Финансовая свобода, спокойствие и возможность закрыть ипотеку.',
      image:
        '/wishlist/public/images/ipoteca.jpg',
      link: 'https://www.tradingview.com',
    },
  ];

  const priorityStyles = {
    'Must-have': 'bg-white text-black',
    Maybe: 'bg-zinc-700 text-white',
    Dream: 'bg-amber-200 text-black',
    Ultimate: 'bg-emerald-200 text-black',
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-zinc-900 font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/90 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 py-14 relative z-10">
        <div className="mb-14">
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-4">
            Чего я хочу на День Рождения
          </p>

          <h1 className="text-6xl md:text-7xl font-light leading-none tracking-tight mb-6">
            Виш лист охреневшей 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-zinc-600">
            <span className="px-4 py-2 rounded-full border border-zinc-300 bg-white/70 backdrop-blur">
              Хочу
            </span>
            <span className="px-4 py-2 rounded-full border border-zinc-300 bg-white/70 backdrop-blur">
              А чего сразу НЕТ?
            </span>
            <span className="px-4 py-2 rounded-full border border-zinc-300 bg-white/70 backdrop-blur">
              Ну хоть подумай
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-[32px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl shadow-black/5 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span
                    className={`px-4 py-2 rounded-full text-xs tracking-wide font-medium ${priorityStyles[item.priority]}`}
                  >
                    {item.priority}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-2">
                    {item.category}
                  </p>

                  <h2 className="text-3xl font-light leading-tight">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                    Примерная цена
                  </p>

                  <p className="text-lg font-medium">{item.price}</p>
                </div>

                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-wide uppercase border-b border-zinc-900 pb-1 hover:opacity-60 transition"
                >
                  Ссылочка ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[30px] bg-white/60 border border-white/60 backdrop-blur-xl p-8 shadow-xl shadow-black/5">
            <p className="uppercase text-xs tracking-[0.35em] text-zinc-500 mb-5">
              Могу 
            </p>
            <h3 className="text-3xl font-light leading-tight">
              Я хочу не дохуя,
              <br />
              я хочу ДОХУЯ,
              <br />
              и БОЛЬШЕ.
            </h3>
          </div>

          <div className="rounded-[30px] overflow-hidden h-[280px] shadow-xl shadow-black/5">
            <img
              src="/wishlist/public/images/road.avif"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-[30px] bg-[#1a1a1a] text-white p-8 flex flex-col justify-between shadow-2xl shadow-black/20">
            <div>
              <p className="uppercase text-xs tracking-[0.35em] text-zinc-400 mb-5">
                Вишлист
              </p>

              <h3 className="text-4xl font-light leading-tight">
                я старалась
                <br />
                мечты
                <br />
                должны исполняться.
              </h3>
            </div>

            <p className="text-zinc-400 text-sm tracking-wide mt-10">
              2026 мой личный вишлист
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
