import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-9 hover: bg-yellow-200" >
                    <a href={route.path}>{route.name}</a></li>
    );
};

Link.PropTypes={
    route: PropTypes.object
}
export default Link;