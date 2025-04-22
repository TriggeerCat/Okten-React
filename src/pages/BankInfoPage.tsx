import {useLocation, useNavigate} from "react-router-dom";
import {Bank} from "../types/Users.ts";

const BankInfoPage = () => {
    const {state} = useLocation();
    const bank = state as Bank;

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('../');
    }


    return (
        <div className='text-2xl'>
            <p>Card number: {bank.cardNumber.match(/.{1,4}/g)?.join(' ')}</p>
            <p>Expire date: {bank.cardExpire}</p>
            <p>Card type: {bank.cardType}</p>
            <p>Card Currency: {bank.currency}</p>
            <button onClick={handleOnClick} className='m-2 border-2 text-xl p-1'>Go back</button>
        </div>

    );
};

export default BankInfoPage;