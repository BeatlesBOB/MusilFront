import { Container, Row,Col} from "react-bootstrap";
import CustomNavbar from "../component/CustomNavbar";

export default function SetupPage(){

    const selected = 4
    
    return (
        <Container fluid style={{minHeight:"100vh"}}>
            <Row className="g-0">
                {
                    Array.from(Array(8).keys()).map((x,i) => (
                        
                        <Col xs={3} className="d-flex flex-column border border-dark" style={{height:"50vh",backgroundColor:i===selected?"#ffc107":null}} key={i}>
                            <div style={{height:"80%",width:"100%"}} className="bg-success">

                            </div>
                            <div style={{height:"20%",width:"100%"}} className="d-flex justify-content-center mt-2">
                                {
                                   i===selected?<p className="fs-6 track">Now playing puette</p>:null 
                                }
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}