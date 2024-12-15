import land from '../assets/land.png'

//ceating a responsive landng page
const Land = () => {
 return(
    <div>
        <img src={land} className="w-full max-h-[600px] object-cover" />
    </div>
 );
};

export default Land;