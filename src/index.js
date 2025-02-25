import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'Routes/routes'
import 'Assets/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)