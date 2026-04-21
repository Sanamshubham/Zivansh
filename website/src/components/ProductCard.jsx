const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-4">
        <img src={product.image} className="rounded-lg h-40 w-full object-cover" />
        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-green-600">₹{product.price}</span>
          <a
            href={`https://wa.me/91XXXXXXXXXX?text=I want to order ${product.name}`}
            className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm"
          >
            Order
          </a>
        </div>
      </div>
    );
  };
  
  export default ProductCard;