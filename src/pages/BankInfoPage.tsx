import {useLocation, useNavigate} from "react-router-dom";
import {Bank} from "../types/Users.ts";

const BankInfoPage = () => {
    const {state} = useLocation();
    const bank = state.bank as Bank;
    const page = state.page as string;
    const navigate = useNavigate();

    return (
        <div className='text-2xl'>
            <p>Card number: {bank.cardNumber.match(/.{1,4}/g)?.join(' ')}</p>
            <p>Expire date: {bank.cardExpire}</p>
            <p>Card type: {bank.cardType}</p>
            <p>Card Currency: {bank.currency}</p>

            <button onClick={() => {navigate('../?page=' + page)}} className='mx-2 border-2 text-xl p-1'>Home</button>
        </div>
    );
};

export default BankInfoPage;