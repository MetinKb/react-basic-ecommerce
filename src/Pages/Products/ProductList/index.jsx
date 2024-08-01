import ListWrapper from 'Components/ListWrapper'
import { Link } from 'react-router-dom'

const ProductList = ({ products, category }) => (
    <ListWrapper location="products">
        {products.map(({ _id, name, price, imgUrl, discountPercentage }) => (
            <li key={_id} className="relative border border-slate-500 w-1/5 h-max flex flex-col items-center justify-center p-4 gap-4">
                {discountPercentage > 0 && (
                    <span className="absolute top-0 right-0 bg-blue-400 pl-4 pb-4 pt-2 pr-2 rounded-bl-full text-xl text-white">
                        -{discountPercentage}%
                    </span>
                )}
                <span className="block w-full h-full p-2">
                    <img className="w-full h-40 object-contain cursor-pointer" src={imgUrl} alt={name} />
                </span>
                <h3 className="text-2xl tracking-wide">{name}</h3>
                <b>
                    <span className="text-2xl">{price} USD</span>
                    {discountPercentage > 0 && (
                        <sup className="text-2xl text-red-500">
                            <s>{(price / (1 - discountPercentage / 100)).toFixed(2)}</s>
                        </sup>
                    )}
                </b>
                <Link to={`/products/${category}/${_id}`} className="text-blue-500 hover:underline mt-2">View Details</Link>
            </li>
        ))}
    </ListWrapper>
)

export default ProductList
