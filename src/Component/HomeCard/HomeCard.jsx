import PropTypes from 'prop-types';
import { SavedData } from '../../Utility/localStorage';
import swal from 'sweetalert';
import { AiOutlineStar } from 'react-icons/ai';
const HomeCard = ({data}) => {
    const {name, win ,lost, dro, color, img, cup} = data || {}
    const handleWinClick = () => {
        swal("Congratulations!!", `${name} win the match`, "success");
        SavedData(win)
    }
    const handleLostClick = () => {
        swal("Bad luck", `${name} lost the match`, "error");
        SavedData(lost)
    }
    const handleDroClick = () => {
        swal("Not ok", `${name} dro the match`, "error");
        SavedData(dro)
    }
    return (
        <div className="card card-compact" style={{backgroundColor: color?.text_color2}}>
        <figure className='h-40'><img src={img} alt={`image of ${name}`} className='h-full w-full'/></figure>
        <div className="card-body">
            <h2 className="card-title mx-auto"  style={{color: color?.text_color}}>
                {name}
                <p className='flex justify-center items-center gap-1'>{cup} <AiOutlineStar className="mt-[3px]"/></p>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-2">    
                <button 
                    onClick={handleWinClick}
                    className="btn btn-primary btn-sm border-0 text-white" 
                    style={{backgroundColor: color?.text_color}}
                >Win</button>
                <button 
                    onClick={handleDroClick}
                    className="btn btn-primary btn-sm border-0 text-white" 
                    style={{backgroundColor: color?.text_color}}
                >Dro</button>
                <button 
                    onClick={handleLostClick}
                    className="btn btn-primary btn-sm border-0 text-white" 
                    style={{backgroundColor: color?.text_color}}
                >Lost</button>
            </div>
        </div>
        </div>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;