import Navbar from "./Navbar"
import ListWrapper from "./ListWrapper"
import Button from "./Button"

const Pagination = ({ itemsPerPage, totalProducts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Navbar location="pagination">
            <ListWrapper location="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="p-2 shadow-[0_0_10px_2px_rgba(0,0,0,.2)] text-white rounded-xl hover:bg-slate-300 transition duration-200">
                        <Button onClick={() => paginate(number)}>
                            {number}
                        </Button>
                    </li>
                ))}
            </ListWrapper>
        </Navbar>
    )
}

export default Pagination
