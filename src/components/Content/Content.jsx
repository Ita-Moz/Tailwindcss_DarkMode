import { animated, useSpring } from 'react-spring';
import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';
function Content() {
    const custormer = useSpring({ cus: 12135, from: { cus: 0 } });
    const card = useSpring({ cards: 15654, from: { cards: 0 } });
    return (
        <>
            <section className='md:grid md:grid-cols-4'>
                <div className="md:col-span-2 mx-[50px] rounded-3xl font-bold flex flex-col justify-center items-center bg-gradient-to-b from-white/40 to-transparent shadow-md">
                    <div className="py-[20px] flex justify-center items-center gap-8">
                        <FaUser size={'22px'} />
                        <div className="text-26">
                            <animated.div>
                                {custormer.cus.to((val) => Math.floor(val))}
                            </animated.div>
                        </div>
                    </div>
                    <div className=" py-[20px] flex items-center justify-center gap-8">
                        <BsFillCreditCardFill size={'22px'} />
                        <div className="text-26">
                            <animated.div>
                                {card.cards.to((val) => Math.floor(val))}
                            </animated.div>
                            <span className="block text-13 font-semibold">
                                Cards Issued
                            </span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 text-13 flex flex-col gap-5 my-[60px] mx-[50px]">
                    <p className="check-content">
                        <img src={checkIconMobile} alt="icons" />
                        <span className="inline-block">
                            Card reports send to your phone every weeks
                        </span>
                    </p>
                    <p className="check-content">
                        <img src={checkIconMobile} alt="icons" />
                        <span className="inline-block">No external fees</span>
                    </p>
                    <p className="check-content">
                        <img src={checkIconMobile} alt="icons" />
                        <span className="inline-block">
                            Set spending limits and restrictions
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Content;
