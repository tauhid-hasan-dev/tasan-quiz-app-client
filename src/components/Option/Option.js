import Swal from 'sweetalert2'

const Option = ({option, correctAnswer}) => {
    
    const handleClick = () => {
        if(option === correctAnswer){
            Swal.fire(
                'Correct Answer!',
                ` ${correctAnswer}`,
                'success'
              )
        }
      };
    
    return (
        <div className={`text-lg lg:text-xl  border lg:border-2  border-blue-500 flex lg:p-4 p-2  rounded-lg cursor-pointer hover:bg-cyan-900`}  onClick={handleClick}>
            <li className="form-control" >
                <span className="label-text text-white text-2xl">{option}</span> 
            </li>
        </div>
    );
};

export default Option;