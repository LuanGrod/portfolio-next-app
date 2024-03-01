
import { Technologies } from "@/i18n/dictionaries/types";
import TechList from "./components/TechList";
import ParallaxText from "./components/ParallaxText";

interface TechnologiesProps {
  dict: Technologies;
}

export default async function Technologies({ dict }: TechnologiesProps) {
  return (
    <>
      <section id="technologies" className="flex flex-col justify-center items-center w-full h-fit max-sm:mb-6 mb-10 bg-neutral-700 dark:bg-neutral-400">
        {/* <h1 className='font-montserrat max-sm:text-lg sm:text-xl lg:text-2xl'>{dict.titleTechnologies}</h1> */}
        <ParallaxText baseVelocity={-3}>tech</ParallaxText>
        <TechList dict={dict}/>
        <ParallaxText baseVelocity={3}>stack</ParallaxText>
      </section>
    </>
  );
}