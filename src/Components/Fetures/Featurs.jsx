import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";


const Featurs = ({Featurs}) => {
    return (
        <div>
            <p className="flex items-center"><AiFillCheckCircle className="text-green-500 mr-4"></AiFillCheckCircle> .{Featurs}</p>
        </div>
    );
};


Featurs.propTypes ={
    Featurs: PropTypes.object
}
export default Featurs;