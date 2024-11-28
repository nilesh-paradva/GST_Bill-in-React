import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo/logo.png"

const Header = () => {
    return (
        <>
            <section className="bg-[#141452] h-screen flex items-center justify-center">
                <Container>
                    <Row className="items-center flex-col">
                        <div className="col-lg-4">
                            <div className="logo flex items-center justify-center">
                                <img src={Logo} alt="logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="menu">
                                <ul className="flex items-center justify-center list-unstyled flex-col flex-lg-row gap-4">
                                    <li className=""><Link to={'/viewcart'} className="px-3 py-2 inline-block rounded-lg bg-blue-700 text-white font-bold no-underline">View Bill</Link></li>
                                    <li><Link to={'/form'} className="px-3 py-2 inline-block rounded-lg bg-blue-700 text-white font-bold no-underline">Add Bill</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Header