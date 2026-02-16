import Image from "next/image";

export default function JustPhoto() {
  return (
    <section>
        <div className="container">
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
              <Image 
                src="/assets/expert.png" 
                alt="Just Photo" 
                width={1200}
                height={600}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="flex items-center w-full justify-center mt-8">
              <h2> <span>Ваша выгода:</span> окупаемость в первый же месяц.</h2>
            </div>
          </div>
    </section>
    
    
  );
}