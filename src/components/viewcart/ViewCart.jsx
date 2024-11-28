import { Link, useNavigate } from "react-router-dom";
import { StorageGet } from "../../services/storageGet"
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const ViewCart = () => {

    const [GetBilldata, setGetBilldata] = useState(StorageGet());
    const navigate = useNavigate();

    const BillData = (id) => {
        const GetBill = StorageGet().filter((cust) => cust.id !== id)
        setGetBilldata(GetBill);
        localStorage.setItem("TextStyleBill",JSON.stringify(GetBill))
    }

    const billView = (id) => {
        navigate(`/viewbill/${id}`);
    }

    const billEdit = (id) => {
        navigate(`/editform/${id}`);
    }

    return (
        <>
            <section className="h-screen flex items-center justify-center">
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-center mb-4">
                                    <h2 className="text-2xl font-bold text-center mb-3 py-2 rounded-lg text-white bg-[#1b1b5c]">Bill List</h2>
                                    <div className="home-add-btn flex items-center justify-center flex-col flex-lg-row gap-2">
                                        <Link to="/" className="px-3 py-2 bg-blue-800 text-white rounded-lg inline-block no-underline">Home</Link>
                                        <Link to="/form" className="px-3 py-2 bg-blue-800 text-white rounded-lg inline-block no-underline">Add Bill</Link>
                                    </div>
                                </div>
                                {/* <input type="text" placeholder="Search..." className="mt-3 px-3 py-2 border rounded-lg mb-3 outline-none" value={Search} onChange={handleSearch} /> */}
                                <div className="overflow-x-scroll">
                                    {GetBilldata.length === 0 ? (<p className="text-center">No Bill available. Please add some Bill.</p>) : (
                                        <table className="table-auto text-left border-collapse w-[1600px]">
                                            <thead>
                                                <tr className="bg-blue-200 text-center">
                                                    <th className="border py-2">No</th>
                                                    <th className="border py-2">Id</th>
                                                    <th className="border py-2 w-[200px]">Name</th>
                                                    <th className="border px-4 py-2 w-[500px]">Address</th>
                                                    <th className="border px-4 py-2">Description</th>
                                                    <th className="border px-4 py-2">Quantity</th>
                                                    <th className="border px-4 py-2">Rate</th>
                                                    <th className="border px-4 py-2">CGST&nbsp;%</th>
                                                    <th className="border px-4 py-2">SGST&nbsp;%</th>
                                                    <th className="border px-4 py-2">IGST&nbsp;%</th>
                                                    <th className="border px-4 py-2">Discount&nbsp;%</th>
                                                    <th className="border px-4 py-2 w-[400px]">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {GetBilldata.map((cust,index) => (
                                                    <tr key={cust.id} className="hover:bg-gray-100 text-center">
                                                        <td className="border px-4 py-3">{index + 1}</td>
                                                        <td className="border px-4 py-3">{cust.id}</td>
                                                        <td className="border px-4 py-3">{cust.name}</td>
                                                        <td className="border px-4 py-3 ">{cust.address}</td>
                                                        <td className="border px-4 py-3">{cust.description}</td>
                                                        <td className="border px-4 py-3">{cust.quantity}</td>
                                                        <td className="border px-4 py-3">{cust.rate}</td>
                                                        <td className="border px-4 py-3">{cust.cgst || 0}</td>
                                                        <td className="border px-4 py-3">{cust.sgst || 0}</td>
                                                        <td className="border px-4 py-3">{cust.igst || 0}</td>
                                                        <td className="border px-4 py-3">{cust.discount || 0}</td>
                                                        <td className="border px-4 py-3 w-[800px]">
                                                            <button className="bg-green-700 p-2 px-3 rounded-lg me-2 text-white" onClick={() => billView(cust.id)}>View&nbsp;Bill</button>
                                                            <button className="bg-blue-700 p-2 px-3 rounded-lg me-2 text-white" onClick={() => billEdit(cust.id)}>Edit&nbsp;Bill</button>
                                                            <a href="#" className="bg-red-700 p-2 px-3 rounded-lg text-white no-underline" onClick={() => BillData(cust.id)}>Delete</a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ViewCart