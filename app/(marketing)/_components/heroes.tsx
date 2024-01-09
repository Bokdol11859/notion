import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[200px] w-[400px] sm:h-[300px] sm:w-[550px] md:h-[400px] md:w-[700px]">
          <Image
            src="/landing.webp"
            alt="landing"
            fill
            className="object-contain"
          />
        </div>
        {/* <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            alt="Documents"
            className="object-contain dark:hidden"
            fill
          />
          <Image
            src="/documents-dark.png"
            alt="Documents"
            className="hidden object-contain dark:block"
            fill
          />
        </div>
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="hidden object-contain dark:block"
            alt="Reading"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Heroes;
