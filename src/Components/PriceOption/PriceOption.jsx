import PropTypes from "prop-types";
import Featurs from "../Fetures/Featurs";


const PriceOption = ({options}) => {
    const{ name, price, features} = options;
    return (
        <div className="bg-blue-500 rounded-md p-4  flex flex-col text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-3xl ">mon</span>

            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
            {
                features.map((features, index) => <Featurs key={index} features={features  }></Featurs>)
            }
            </div>
            <button className="mt-12  bg-green-400 w-fullpy-2 font-bold rounded-lg hover:bg-green-900">Bye Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    options: PropTypes.object
}
export default PriceOption;