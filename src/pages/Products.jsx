const items = [
    { id: 1, name: "Black Hoodie", price: 499, img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/A20CAMSWAWHD709/A20CAMSWAWHD709_PINK/A20CAMSWAWHD709_PINK.jpg_2000Wx3000H" },
    { id: 2, name: "White Tee", price: 299, img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/A23URUMCT656/A23URUMCT656_WHITE/A23URUMCT656_WHITE_alt2.jpg_2000Wx3000H" },
    { id: 3, name: "Modern Cap", price: 199, img: "https://cdna.lystit.com/1200/630/tr/photos/philipbrowne/bea0ef61/polo-ralph-lauren-Black-Modern-Cap.jpeg" },
    { id: 4, name: "Sneakers", price: 899, img: "https://images-magento.shoppersstop.com/pub/media/catalog/product/FMPM39646401/FMPM39646401_WHITE/FMPM39646401_WHITE.jpg_2000Wx3000H" }

];

export default function Products({ addToCart }) {
    return (
        <div className="products">
            <h2>Our Collection</h2>
            <div className="grid4">
                {items.map(p => (
                    <div key={p.id} className="card">
                        <img src={p.img} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>{p.price}</p>
                        <button onClick={() => addToCart(p)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
