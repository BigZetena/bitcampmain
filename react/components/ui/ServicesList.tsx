import { Service } from '@/types';

export const ServicesList: React.FC<{
  color?: string;
  servicesData: Service[];
  isVisible?: boolean;
}> = ({ servicesData, isVisible = true, color }) => {
  return (
    <div className="max-w-[660px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
        {/* Левая колонка - смещена вниз на половину высоты строки */}
        <div className="mt-20">
          {servicesData.slice(0, 2).map((service, index) => (
            <div key={index} className="relative py-4 min-h-[205px] ">
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-primary  mt-4 transition-all duration-200 ease-in-out ${
                  isVisible ? 'w-full' : 'w-1/3'
                }`}
                style={color ? { backgroundColor: color } : {}}
              ></div>
              <div
                className={`flex flex-col justify-between transition-opacity duration-300 ease-in-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3
                  className={`text-xl font-light mb-5 mt-4 `}
                  style={color ? { color: color } : {}}
                >
                  {service.title}
                </h3>
                <p className="text-primary leading-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Правая колонка - без смещения */}
        <div>
          {servicesData.slice(2).map((service, index) => (
            <div key={index} className="relative py-4 min-h-[205px] ">
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-primary mt-4 transition-all duration-200 ease-in-out ${
                  isVisible ? 'w-full' : 'w-1/3'
                }`}
                style={color ? { backgroundColor: color } : {}}
              ></div>
              <div
                className={`flex flex-col justify-between transition-opacity duration-200 ease-in-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3
                  className={`text-xl font-light mb-5 mt-4`}
                  style={color ? { color: color } : {}}
                >
                  {service.title}
                </h3>
                <p className="text-primary leading-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};