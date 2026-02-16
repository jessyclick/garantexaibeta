import Image from "next/image";

export default function JustPhoto() {
  return (
    <section>
        <div className="container flex flex-col items-center">
            <div className="max-w-[930px]" style={{ position: 'relative', width: '100%', height: 'auto' }}>
              <Image 
                src="/assets/news-just.png" 
                alt="Just Photo" 
                width={1200}
                height={600}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="flex flex-col items-center w-full justify-center mt-8 gap-2">
              <h2 className="fs-45">экономия: <span> 10–50 раз.</span> </h2>
              <h2 className="fs-45">Результат: полная свобода вместо зависимости от дикторов.</h2>
            </div>
          </div>
    </section>
    
    
  );
}