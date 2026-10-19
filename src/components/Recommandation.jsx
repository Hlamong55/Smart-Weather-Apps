
const Recommandation = ({recommandation}) => {
    return (
         <div className="shadow-2xl rounded-2xl p-5 space-y-2">
                        <h2 className="text-2xl  font-semibold ">Smart Recommandations</h2>

                        <div className="text-lg font-bold text-blue-700 bg-blue-100 rounded-full p-1 text-center">
                            " { recommandation?.text } "
                        </div>
                    </div>
    );
};

export default Recommandation;