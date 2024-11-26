import { Link, useParams } from "react-router-dom"
import { Container, Row } from "react-bootstrap";
import { StorageGet } from "../../services/storageGet";
import "../../App.css"

const ViewBill = () => {
    const { id } = useParams();
    const GetBill = StorageGet();
    const ViewBill = GetBill.find((cust) => cust.id == id);

    const totalAmount = (ViewBill.quantity * ViewBill.rate);
    const discountAmount = ((totalAmount * ViewBill.discount) / 100).toFixed(2);
    const texAmount = (totalAmount - discountAmount);
    const totalGst = ((Number(ViewBill.cgst) || 0) + (Number(ViewBill.sgst) || 0) + (Number(ViewBill.igst) || 0))
    const GstAmount = (((texAmount || 1) * (totalGst || 1)) / 100).toFixed(2);
    const Invoice_Amount = ((texAmount + (Number(GstAmount)))).toFixed(2);

    return (
        <>
            <section className="py-36 my-40">
                <Container>
                    <Row>
                        <div className="col-lg-12 flex flex-col items-center justify-center h-screen">
                            <div className="col-lg-12">
                                <div className="gst_bill">
                                    <p className="flex items-center flex-col gap-2 flex-lg-row justify-between p-3 rounded-lg text-white font-bold bg-[#1b1b5c]"><span>જય ભાણાઆતા</span><span>|| श्री गणेशाय नमः ||</span> <span>જય આશાપુરા માઁ</span></p>
                                    <div className="home-add-btn flex items-center justify-center">
                                        <Link to="/" className="px-3 py-2 bg-blue-800 text-white rounded-lg inline-block me-2"><i className="fa-solid fa-house"></i></Link>
                                        <Link to="/form" className="px-2 py-1 bg-blue-800 text-white rounded-lg text-2xl me-2"><i className="fa-solid fa-user-plus"></i></Link>
                                    </div>
                                    <div className="logo-discription flex flex-col flex-lg-row border-2 rounded-lg mt-4">
                                        <div className="col-lg-8">
                                            <div className="logo p-4">
                                                <h3 className="h3 text-[#1b1b5c] font-bold">YASHVI ENTERPRICE</h3>
                                                <p className="text-[20px] text-[#2a2a7c] font-bold">G - 1 403, GOKULDHAM TOWNSHIP DINDOLI, SURAT</p>
                                                <span className="text-[20px] text-[#2a2a7c] font-bold block">GSTIN :- ------</span>
                                                <span className="text-[20px] text-[#2a2a7c] font-bold">Hitesh bhai :- 99096 55662</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="discription p-4 text-start flex flex-col">
                                                <h2 className="h4 font-bold rounded-lg text-[#1b1b5c] py-3 px-3 border-2 inline-block">GST INVOICE</h2>
                                                <h2 className="h4 font-bold rounded-lg text-[#1b1b5c] py-3 px-3 border-2 inline-block">Date :- 25-5-2024</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gst-ui">
                                        <div className="logo-discription flex flex-col flex-lg-row border-2 rounded-lg mt-4">
                                            <div className="col-lg-8">
                                                <div className="logo p-4 h-[100%] flex flex-col items-start justify-center">
                                                    <h3 className="h4 text-[#1b1b5c] font-bold">Name :- <span className="font-normal">Nilesh paradva</span></h3>
                                                    <h3 className="h4 text-[#1b1b5c] font-bold">Address :- <span className="font-normal">C/D-541 sitaram society</span></h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="discription p-4 text-start">
                                                    <h2 className="h5 text-start text- font-bold rounded-lg text-[#1b1b5c] py-3 px-3 border-2 inline-block me-2">Bill NO</h2>
                                                    <h2 className="h5 text-start text- font-bold rounded-lg text-[#1b1b5c] py-3 px-3 border-2 inline-block">{ViewBill.id}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 table-data flex items-center justify-center">
                                <div className="col-12 flex items-center justify-center">
                                    <div className="bill_view_data mt-4 overflow-x-scroll">
                                        <table className=" p-3 border-2 border-[#4f4f93] w-full">
                                            <thead>
                                                <tr className="border-2 text-center bg-[#343489] text-white">
                                                    <th className="border-2">Description&nbsp;of&nbsp;Goods</th>
                                                    <th className="border-2">HSN&nbsp;CODE</th>
                                                    <th className="border-2">Quantity&nbsp;Pcs./Mtr</th>
                                                    <th className="border-2">Rate</th>
                                                    <th className="border-2">Total Amount<br />(Before Tax)</th>
                                                    <th className="border-2">SGST&nbsp;%</th>
                                                    <th className="border-2">CGST&nbsp;%</th>
                                                    <th className="border-2">IGST&nbsp;%</th>
                                                    <th className="border-2">Discount&nbsp;%</th>
                                                    <th className="border-2">Taxable Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-2 text-center">
                                                    <td className="border-2 py-3">{ViewBill.description}</td>
                                                    <td className="border-2 py-3">{ViewBill.id}</td>
                                                    <td className="border-2 py-3">{ViewBill.quantity}</td>
                                                    <td className="border-2 py-3">{ViewBill.rate} ₹</td>
                                                    <td className="border-2 py-3">{totalAmount} ₹</td>
                                                    <td className="border-2 py-3">{ViewBill.sgst || 0}</td>
                                                    <td className="border-2 py-3">{ViewBill.cgst || 0}</td>
                                                    <td className="border-2 py-3">{ViewBill.igst || 0}</td>
                                                    <td className="border-2 py-3">{ViewBill.discount || 0}</td>
                                                    <td className="border-2 py-3">{totalAmount} ₹</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 flex items-center justify-center">
                                <div className="col-12 flex items-center justify-center">
                                    <div className="get-amount mt-4 overflow-x-scroll">
                                        <table className=" w-full p-3 border-2 border-[#4f4f93] rounded-full">
                                            <thead>
                                                <tr className="border-2 text-center bg-[#343489] text-white">
                                                    <th className="border-2">HSN&nbsp;CODE</th>
                                                    <th className="border-2">Total Amount</th>
                                                    <th className="border-2">Total Discount Amount</th>
                                                    <th className="border-2">Total Taxable Amount</th>
                                                    <th className="border-2">Total GST</th>
                                                    <th className="border-2">Total GST Amount</th>
                                                    <th className="border-2">Total Invoice Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-2 text-center">
                                                    <td className="border-2 py-3">{ViewBill.id}</td>
                                                    <td className="border-2 py-3">{totalAmount} ₹</td>
                                                    <td className="border-2 py-3">{discountAmount} ₹</td>
                                                    <td className="border-2 py-3">{texAmount} ₹</td>
                                                    <td className="border-2 py-3">{totalGst} %</td>
                                                    <td className="border-2 py-3">{GstAmount} ₹</td>
                                                    <td className="border-2 py-3">{Invoice_Amount} ₹</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="download-btn text-center mt-4">
                                    <button onClick={() => window.print()} className="px-3 py-2 bg-[#242465] text-white font-bold rounded-lg inline-block">Download</button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default ViewBill