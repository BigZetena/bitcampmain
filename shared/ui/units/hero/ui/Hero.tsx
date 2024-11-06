import React from 'react';

export const Hero = ({
  subtitle,
  description,
}: {
  subtitle: React.ReactNode | string;
  description: React.ReactNode | string;
}) => {
  return (
    <div className="bg-[#1B1B1B] h-screen text-[#FDFDFD} font-raleway py-16 text-[#FDFDFD] relative overflow-hidden">
      <div className="container max-w-container mx-auto flex flex-col justify-end h-full ">
        <div className="absolute left-0 top-[20vh]">
          <svg
            width="423"
            height="781"
            viewBox="0 0 423 781"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_199_85)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.4227 136.049C96.7397 142.696 134.336 202.957 177.24 249.719C217.062 293.121 271.847 334.012 268.885 392.681C265.977 450.274 204.508 481.197 163.495 521.979C122.47 562.773 91.298 630.991 33.4227 626.817C-24.1976 622.662 -48.1347 552.999 -79.0529 504.487C-100.997 470.056 -106.801 432.445 -115.801 392.681C-129.497 332.17 -175.583 269.656 -144.358 215.958C-110.524 157.77 -33.8136 128.99 33.4227 136.049Z"
                fill="#A46F87"
                style={{ mixBlendMode: 'overlay' }}
              />
            </g>
            <defs>
              <filter
                id="filter0_f_199_85"
                x="-308.4"
                y="-18.4"
                width="730.8"
                height="798.8"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="76.7"
                  result="effect1_foregroundBlur_199_85"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 bottom-[20vh]">
          <svg
            width="341"
            height="752"
            viewBox="0 0 341 752"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7" filter="url(#filter0_f_199_84)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M323.758 154.947C380.803 160.945 414.675 215.327 453.33 257.527C489.207 296.695 538.565 333.596 535.896 386.541C533.277 438.516 477.897 466.421 440.946 503.225C403.985 540.039 375.901 601.602 323.758 597.835C271.846 594.085 250.28 531.218 222.424 487.439C202.654 456.368 197.425 422.426 189.316 386.541C176.977 331.934 135.456 275.519 163.587 227.059C194.07 174.549 263.182 148.577 323.758 154.947Z"
                fill="#4071AD"
                style={{ mixBlendMode: 'overlay' }}
              />
            </g>
            <defs>
              <filter
                id="filter0_f_199_84"
                x="0.600006"
                y="0.600006"
                width="688.8"
                height="750.8"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="76.7"
                  result="effect1_foregroundBlur_199_84"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <h2 className="text-4xl md:text-5xl">{subtitle}</h2>
          <p className="text-base md:text-xl text-[#E4E4E4] text-left md:text-right max-w-full md:max-w-md mt-4 md:mt-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
