

const Button = ({ label, iconURL }) => {
    return (
        <button className="flex items-center justify-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red"

        > {label} <img className="ml-2 h-5 w-5 rounded-full" src={iconURL} alt="" /></button>


    )
}

export default Button