export default function SEOResults() {
  const results = [
    {
      id: '01',
      title: 'ЧЕРЕЗ 1 МЕСЯЦ:',
      description: 'рост видимости и индексация первых десятков статей.'
    },
    {
      id: '02',
      title: 'ЧЕРЕЗ 3 МЕСЯЦА:',
      description: 'трафик × 3-5 и первые стабильные заявки из поиска.'
    },
    {
      id: '03',
      title: 'ЧЕРЕЗ 6 МЕСЯЦЕВ:',
      description: 'поток клиентов, трафик × 5-10, сотни запросов в ТОП-10.'
    }
  ];

  return (
    <section className="relative overflow-hidden px-5 py-20 text-white bg-[url('/assets/bg-4.png')] bg-cover bg-center">
      <div className="mx-auto grid max-w-[1305px] grid-cols-1 items-center gap-[60px] md:grid-cols-2">
        
        <div className="relative hidden h-[400px] items-center justify-center md:flex">
          <div className="relative w-full">
            <img 
              src="/assets/result_icon.png" 
              alt="" 
              className="mix-blend-lighten" 
            />
          </div>
        </div>

        <div className="z-10 md:min-w-[700px]">
          <h2 className="mb-6 font-['Bebas_Neue'] text-[32px] font-normal leading-normal text-white md:text-[66px]">
            КАКИХ <span className="text-[#FF9C1C]">РЕЗУЛЬТАТОВ</span> ОЖИДАТЬ
          </h2>

          <div className="flex flex-col gap-[30px]">
            {results.map((result) => (
              <div key={result.id} className="flex items-start gap-[25px]">
                <div 
                  className="flex h-[44px] w-[44px] items-center justify-center rounded border border-transparent font-['Bebas_Neue'] text-[24px] text-[#FF9C1C]"
                  style={{
                    backgroundImage: 'linear-gradient(#0F0C09, #0F0C09), linear-gradient(124.35deg, #FE7905 3.69%, #2A0C00 45.84%, #A93301 98.89%)',
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'border-box'
                  }}
                >
                  {result.id}
                </div>
                <div className="flex-1">
                  <h3 className="font-['Bebas_Neue'] text-[35px] font-normal leading-none text-white">
                    {result.title}
                  </h3>
                  <p className="font-['Inter'] text-[19px] font-normal leading-[22px] text-white">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}