import React from "react";

export const Location = () => {
  return (
    <div className="p-4 py-10">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:space-x-5">
          <div className="md:w-1/2 w-full h-auto flex flex-col justify-between">
            <div>
              <h1 className="flex items-center text-secondary-foreground uppercase md:mb-10 mb-5">
                <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
                Location
              </h1>
              <h2 className="sm:text-4xl text-3xl">Silal location map</h2>
            </div>
            <div className="flex flex-col gap-5 max-md:mt-5">
              <div>
                <h6 className="font-semibold">Address:</h6>
                <p>100100, Toshkent sh., "Bobur" 1-berk ko'chasi, 17-uy</p>
              </div>
              <hr />
              <div>
                <h6 className="font-semibold">Email:</h6>
                <a href="mailto:info@karantin.uz">info@karantin.uz</a>
              </div>
              <hr />
              <div>
                <h6 className="font-semibold">Phone:</h6>
                <a href="tel:+998712021000">+998 (71) 202 10 00</a>
              </div>
              <hr />
              <div>
                <h6 className="font-semibold">Ish kunlari:</h6>
                <p>Dushanba - Juma 9:00-18:00</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-auto flex flex-col justify-between max-md:mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.458665921555!2d69.24446243069049!3d41.296123153123034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdbaf4fd22f%3A0xd7287387b5aa0573!2sO&#39;ZBEKISTON%20RESPUBLIKASI%20O&#39;SIMLIKLAR%20KARANTINI%20VA%20HIMOYASI%20AGENTLIGI!5e0!3m2!1sen!2s!4v1731043560446!5m2!1sen!2s"
              loading="lazy"
              className="w-full md:h-[500px] h-[400px] rounded-t-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
