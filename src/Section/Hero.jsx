import Button from "../components/Button"

import { arrowRight } from "../assets/icons"

import { statistics } from "../constants"


const Hero = () => {
    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  "
        >

            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">


                <p className="text-coral-red font-montserrat text-xl">Our Summer Collection</p>

                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap pr-10 relative -z-10">The New Arrival</span>
                    <br />
                    <span className="mt-3 text-coral-red inline-block">Nike </span> Shoes
                </h1>

                <p className="text-lg text-slate-gray font-montserrat leading-8 mt-6 mb-14 sm:max-w-small">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                <Button label="Shop now"
                    iconURL={arrowRight}
                />


                <div className="flex items-center justify-start flex-wrap w-full mt-20 gap-16">

                    {
                        statistics.map((stat) => (

                            <div key={stat.label}>
                                <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
                                <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
                            </div>

                        ))}

                </div>

            </div>



        </section>
    )
}

export default Hero