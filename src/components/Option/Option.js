import Swal from 'sweetalert2'

const Option = ({option, correctAnswer}) => {
    const handleClick = () => {
        if(option === correctAnswer){
            Swal.fire(
                'Correct Answer!',
                'Congratulations!!!',
                'success'
              )
        }
      };
    
    return (
        <div className={` form-control text-lg lg:text-xl  border lg:border-2  border-blue-500 flex lg:p-4 p-2  rounded-lg cursor-pointer hover:bg-cyan-900 `}  onClick={handleClick}>
                <label className="label cursor-pointer flex flex-row items-start justify-start gap-3 ">
                    <input type="radio" name="radio-2" className="radio radio-primary checked:bg-blue-500 " checked />
                    <span className="label-text text-white text-lg lg:text-xl">{option}</span> 
                </label>
        </div>
    );
};

export default Option;