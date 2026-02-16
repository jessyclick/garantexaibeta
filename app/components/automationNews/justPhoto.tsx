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
            <div className="flex items-center w-full justify-center mt-8">
              <h2> экономия: <span>до 500 000 ₽ в год.</span> </h2>
            </div>
          </div>
    </section>
    
    
  );
}