import Cards from '../../assets/desktop/isocard.svg';
function Slogan() {
    return (
        <section className="md:grid md:grid-cols-3 md:items-center md:text-48 text-36 my-14 font-bold ">
            <div className="text-center md:col-span-2">
                <p>
                    Earn <span className="text-purple-500">More</span>
                </p>
                <p className="">Pay Less</p>
                <button className="dark:text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-lg hover:bg-pink-500 transition-all duration-300">
                    Start
                </button>
            </div>
            <div className="md:col-span-1 mt-[60px]">
                <img src={Cards} alt="cards" />
            </div>
        </section>
    );
}

export default Slogan;
