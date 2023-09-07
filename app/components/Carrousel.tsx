import Image from "next/image";
import { escudos } from "@/dbInternal";

function Carrousel() {
  return (
    <div className="w-full h-full flex items-center justify-center">

      <div className="w-full h-[70px] relative shadow-lg overflow-hidden before:h-[100px] before:w-[200px] before:absolute before:content-['']  before:l-0 before:t-0 before: z-2 after:h-[100px] after:w-[200px] after:absolute after:content-[''] after:r-0 after:t-0 after:z-2">

        <div className="h-[70px] flex items-center animate-useSlideshow md:animate-useSlideShowMd xl:animate-useSlideShowXl">

          {escudos.map(it=> (<Image src={it.path} alt="escudo" key={it.team} width={35} height={35} className="px-30" style={{ width: 'auto', height: 'auto' }}/>
          ))}

{escudos.map(it=> (<Image src={it.path} alt="escudo" key={it.team} width={30} height={30} className="px-30 " style={{ width: 'auto', height: 'auto' }}/>
          ))}
          
          {escudos.map(it=> (<Image src={it.path} alt="escudo" key={it.team} width={30} height={30} className="px-30 " style={{ width: 'auto', height: 'auto' }}/>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Carrousel;
