import "./FeaturedBooks.css";

function FeaturedBooks(){

    const books = [
        "Harry Potter",
        "Atomic Habits",
        "Rich Dad Poor Dad"
    ];

    return(

        <section className="books">

            <h1>Featured Books</h1>

            <div className="cards">

                {
                    books.map((book,index)=>{

                        return(

                            <div className="card" key={index}>

                                <h2>{book}</h2>

                                <p>
                                    Available in our library.
                                </p>

                            </div>

                        );

                    })
                }

            </div>

        </section>

    );

}

export default FeaturedBooks;