import "./Hero.css";

function Hero(){

    const totalBooks = 25000;
    const members = 5000;
    const year = new Date().getFullYear();

    function welcome(){
        alert("Welcome to City Library!");
    }

    return(

        <section className="hero">

            <div className="hero-left">

                <h1>Welcome to City Library</h1>

                <p>
                    Read, Learn and Grow with thousands
                    of books available for everyone.
                </p>

                <h3>Total Books : {totalBooks}+</h3>

                <h3>Members : {members}+</h3>

                <h3>Year : {year}</h3>

                <button onClick={welcome}>
                    Join Library
                </button>

            </div>

            <div className="hero-right">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-PV3nWzhirzMfoPJANOr-aglVfORsYBX-NJEQNguZA&s=10" alt="Library"/>

            </div>

        </section>

    );
}

export default Hero;