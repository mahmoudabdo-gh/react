import React from "react";

function getProducts() {
    const URL = 'https://fakestoreapi.com/products';
    return fetch(URL)
        .then(res => res.json())
        .then(json => json);
}

function Store() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <section>
                <h1>Fake Store API - Products</h1>
                <div>
                    {products.map((product) => (
                        <div className="container shadow" key={product.id}>
                            <img className="image" src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>
                                <strong>{product.price} EGP</strong>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Store;
