import LightNav from "~/components/light-navbar/LightNav";

const SecondHero = () => {
  return (
    <header className="flex w-full gap-[10px] bg-secondary-120 p-[12px] lg:p-[40px]">
      <div className="flex w-full flex-col gap-[48px] border-transparent-white-15 bg-white py-[12px] md:pb-[48px] lg:gap-[64px] lg:border-[8px] lg:border-solid">
        <LightNav className="relative mx-auto w-full max-w-[1654px] bg-white" />
        <div className="">
          <h1 className="text-[32px] font-bold leading-[48px] tracking-[0.06em] flex justify-center">
          Benefits of AI In Language Learning
          </h1>
        </div>
        <div className="flex justify-around">
          <h6 className="text-[16px]">August 6, 2024</h6>
          <div className="h-2 w-2 rounded-full bg-primary-100"></div>
          <h6>6 min read</h6>
        </div>
        <div className="flex justify-center">
          <img src="/blog/blog-img-2.png"
          width={800}
          height={800}
           alt="" />
        </div>
        <div className="leading-tight text-[18px]">
          <h5>Did you know that Spanish is the official language of 20 countries, with the second largest number of 
            native speakers in the world? Here are some useful facts
             and phrases that every traveller should know before travelling to a Spanish-speaking country.</h5>
             <h5 className="mt-6">Travelling to a Spanish-speaking country? Fortunately, Spanish is one of the easiest languages
               for English-speakers to pick up.While we all know our ‘sí‘ from our ‘no‘,
                there are so many more complex but useful Spanish phrases to learn that will help you on your travels.</h5>
                <h5 className="mt-6">Whether you want to confidently chat with the locals, make friends abroad or find the 
                  nearest toilet with zero hassle, these useful Spanish phrases will make sure you’re 
                  making the most of your holiday. Diviértete! (have fun!)Let’s start with the simple ones.
                   Here are some basic Spanish phrases for you to learn:</h5>
                   <div>
                    <li className="mt-6">Hello – Hola <br />(O-la)</li>
                    <li className="mt-6"i>Good morning – Buenos días <br />(BWAY-nos DEE-as)</li>
                    <li className="mt-6">Good morning – Buenos días <br />(BWAY-nos DEE-as)</li>
                    <li className="mt-6"> Good night – Buenas noches <br />(BWAY-nas NOH-chays)</li>
                    <li className="mt-6">How are you? (formal – to a stranger) –Cómo está? <br />(KOH-moh eh-STAH)</li>
                    <li className="mt-6">I’m fine, thank you – Bien, gracias <br />(bee-EN GRA-thee-as)</li>
                    <li className="mt-6">What’s your name? – Cómo te llamas? <br />(KOH-moh te ya-mas?)</li>
                    <li className="mt-6">My name is… – Me llamo… <br />(May ya-moh… )</li>
                    <li className="mt-6">Nice to meet you – Mucho gusto <br />(MOO-choh GOO-stoh)</li>
                    <li className="mt-6">Please – Por favor <br />(por fa-vor)</li>
                    <li className="mt-6">Thank you – Gracias <br />(GRA-thee-as)</li>
                   </div>
                   <div>
                    <h2 className="mt-6">Having difficulty understanding what someone is saying? These Spanish phrases will definitely come in handy:</h2>
                    <li className="mt-6">I don’t understand – Yo no entiendo <br />(yo no en-tee-EN-doh)</li>
                    <li className="mt-6">I don’t understand – Yo no entiendo <br />(yo no en-tee-EN-doh)</li>
                   </div>
                   <div>
                    <h2 className="mt-6">Common Spanish Phrases</h2>
                    <h5 className="mt-6">Whether you’re searching for a toilet or need directions to your hotel,
                       you’ll inevitably need to ask for guidance at some point during your holiday. 
                       These Spanish phrases are for when you’re out
                       and about and need to ask for assistance from a Spanish-speaking local.</h5>
                    <li className="mt-6">Excuse me – Disculpe <br />(Dis-KUL-pay)</li>
                    <li className="mt-6">I’m lost – Estoy perdido <br />(eh-stoy per-DEE-doh)</li>
                    <li className="mt-6">Where is…? – Dónde está…? <br />(DON-day es-tah…?)</li>
                    <li className="mt-6">Where is the bathroom? – Dónde está el baño? <br />(DON-day es-tah el BAH-nyo?)</li>
                    <li className="mt-6">Where is the bank? – Dónde está el banco? <br />(DON-day es-tah el BAN-koh?)</li>
                    <li className="mt-6">Where can I get a taxi? – Dónde puedo encontrar un taxi? <br /> (DON-day pway-doh en-kon-trar oon taxi?)</li>
                   </div>
                   <div>
                    <h2 className="mt-6">How to order in Spanish</h2>
                    <h5 className="mt-6">Eating out at a restaurant is a great chance to practice your Spanish ordering skills! Here are some common Spanish phrases to memorise:</h5>
                    <li className="mt-6">What do you recommend? – Qué me recomienda? <br />(Kay may re-kom-ee-en-dah?)</li>
                    <li className="mt-6">I’m a vegetarian – Soy vegetariano/a <br />(soy ve-he-tah-ree-ah-noh/nah)</li>
                    <li className="mt-6">I have an allergy to [nuts] – Tengo alergia a [las nueces] <br />(Ten-go al-er-hee-ah a las noo-eh-ses)</li>
                    <li className="mt-6">How much is it? – Cuánto cuesta? <br />(KWAN-to KWES-ta?)</li>
                    <li className="mt-6">The bill, please – La cuenta, por favor <br />(la KWEN-ta por fa-vor)</li>
                    <li className="mt-6">A table for two, three, four – Una mesa para dos tres, cuatro  <br />(Oo-na may-sah pah-rah dohs, trays, kwah-troh)</li>
                   </div>
        </div>
      </div>
    </header>
  );
};
export default SecondHero;
