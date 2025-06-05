import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    const formattedDate = format(new Date(), 'EEEE, MMMM d, yyyy');
    return (
        <div className='flex flex-col justify-center items-center gap-4 py-5'>
            <div>
                <img src={logo} alt="Header Logo" />
            </div>
            <h2 className='font-bold text-gray-400 text-xl'>Journalism Without Fear on Favour</h2>
            <p className='font-bold text-xl text-gray-500'>{formattedDate}</p>
        </div>
    );
};

export default Header;