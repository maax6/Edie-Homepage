import heroImage from '../../assets/img/heroImage.jpg';

export function Banner() {
   return (
      <div className="banner ">
         <p className="leading-relaxed text-sm md:text-base  ml-15p text-blue-400">
            Unhappy with your website?
         </p>
         <h2 className="ml-15p text-xl  md:text-2xl lg:text-4xl xl:text-5xl leading-12 text-gray-800 ">
            We create beautiful <br /> and fast web services
         </h2>
         <img
            className="banImg rounded-2xl my-6"
            src={heroImage}
            alt="picture of a creative meeting"
         />
         <h2 className="ml-15p text-xl  md:text-2xl lg:text-4xl xl:text-5xl leading-12 text-gray-800 ">
            Story, emotion <br /> and purpose
         </h2>
         <div className="max-w-xs text-sm leading-12 ml-15p my-6 text-gray-400">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
         </div>
      </div>
   );
}
