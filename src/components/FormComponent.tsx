const FormComponent = () => {
    return (
        <form className='flex flex-col text-xl'>
            <input type='text' name='name'></input>
            <input type='text' name='year'></input>
            <input type='text' name='price'></input>
            <button className='border-2'>Send</button>
        </form>
    );
};

export default FormComponent;