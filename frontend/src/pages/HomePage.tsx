//iporting images
import landing1 from '../assets/landing1.png'
import landing2 from '../assets/landing2.png'
//building the homepage
const HomePage = () => {
 return(
    <div className="flex flex-col gap-12">
        <div className="bg-whte rounded-lg shadow-md py-8: flex flex-col gap-5 text-center -mt-16">
            <h1 className= "text-5xl font-bold trackng-tight text-orange-600">
                Order any Agricultural product of your choice
            </h1>
            <span className="text-xl">Get any in just a click away!</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <img src={landing1}/>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Place an order even faster!
                </span>
                <span>
                    Download the AgroProducts App for fasting ordering and personalized recommendations 
                </span>
                <img src={landing2}/>
            </div>
        </div>
    </div>
 )
}

export default HomePage;