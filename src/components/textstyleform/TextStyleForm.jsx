import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { StorageGet } from "../../services/storageGet";

const TextStyleForm = () => {

  const [Inputhandel, setInputhandel] = useState({
    name: '',
    address: '',
    description: '',
    quantity: '',
    rate: '',
    discount: '',
    cgst: '',
    sgst: '',
    igst:'',
  });

  const [storageBill, setstorageBill] = useState(StorageGet());
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputhandel({ ...Inputhandel, [name]: value })
  }

  const SubmitBill = () => {
    const newBillData = { ...Inputhandel, id: Math.floor(Math.random() * 10000) };
    const updateBilldata = [...storageBill, newBillData];
    setstorageBill(updateBilldata);
    localStorage.setItem("TextStyleBill", JSON.stringify(updateBilldata));
    // navigate("/viewcart")
  }

  console.log("description",);


  useEffect(() => {
    localStorage.setItem("TextStyleBill", JSON.stringify(storageBill));
  }, [storageBill])

  return (
    <>
      <section className="py-24 my-8">
        <Container>
          <Row>
            <div className="col-12 flex items-center justify-center h-screen">
              <div className="col-8">
                <div className="link-btn mb-4 text-center flex items-center justify-center flex-col gap-2 flex-lg-row">
                  <Link to="/" className="px-3 py-2 bg-blue-800 text-white font-bold rounded-lg inline-block no-underline">Home</Link>
                  <Link to={'/viewcart'} className="px-3 py-2 inline-block rounded-lg bg-blue-700 text-white font-bold no-underline">View Bill</Link>
                </div>
                <form action="">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={Inputhandel.name} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Name" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                    <input type="text" id="address" name="address" value={Inputhandel.address} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Address" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description of Goods</label>
                    <input type="text" id="description" name="description" value={Inputhandel.description} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter goods description" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
                    <input type="number" id="quantity" name="quantity" value={Inputhandel.quantity} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter quantity" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="rate" className="block text-gray-700 font-bold mb-2">Rate</label>
                    <input type="number" id="rate" name="rate" value={Inputhandel.rate} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter rate" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="cgst" className="block text-gray-700 font-bold mb-2">CGST</label>
                    <input type="number" id="cgst" name="cgst" value={Inputhandel.cgst} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter CGST" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="sgst" className="block text-gray-700 font-bold mb-2">SGST</label>
                    <input type="number" id="sgst" name="sgst" value={Inputhandel.sgst} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter SGST" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="igst" className="block text-gray-700 font-bold mb-2">IGST</label>
                    <input type="number" id="igst" name="igst" value={Inputhandel.igst} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter IGST" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="discount" className="block text-gray-700 font-bold mb-2">Discount %</label>
                    <input type="number" id="discount" name="discount" value={Inputhandel.discount} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter discount" onChange={handleChange} />
                  </div>
                  <div className="mt-6 text-center">
                    <Link to={'/viewcart'} onClick={SubmitBill} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 no-underline">Submit</Link>
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}
export default TextStyleForm