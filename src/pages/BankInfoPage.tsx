import {useLocation} from "react-router-dom";
import {Bank} from "../types/Users.ts";

const BankInfoPage = () => {
    const {state} = useLocation();
    const bank = state as Bank;

    return (
        <div className='text-2xl'>
            <p>Card number: {bank.cardNumber.match(/.{1,4}/g)?.join(' ')}</p>
            <p>Expire date: {bank.cardExpire}</p>
            <p>Card type: {bank.cardType}</p>
            <p>Card Currency: {bank.currency}</p>
        </div>
    );
};

export default BankInfoPage;