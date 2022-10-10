const Option = ({option, correctAnswer}) => {
    
    const handleClick = () => {
        if(option === correctAnswer){
            alert('correct')
        }
      };
    
    return (
        <div className={`text-lg lg:text-xl  border lg:border-2  border-blue-500 flex lg:p-4 p-2  rounded-lg cursor-pointer hover:bg-cyan-900`} onClick={handleClick}>
            <li className="form-control">
                
                    <label className="label cursor-pointer">
                        <input onChange={handleClick} defaultChecked={true} type="radio" name="radio-6" className="radio checked:bg-blue-500 bg-white mr-3 " checked />
                        <span className="label-text text-white text-2xl">{option}</span> 
                    </label>
                
            </li>
        </div>
    );
};

export default Option;