import {useNavigate} from "react-router-dom";
import {Container, Button} from "reactstrap";

export default function Dashboard(){
    const navigate=useNavigate();
    return(
        <Container style={{marginTop:"20px"}}>
        
        <p className="netlify-suggestion-p">Kindly <b>DO NOT REFRESH</b> this netlify site when you are in the page other than home (dashboard) page. If you refresh on page other than home page, then it will give "page not found" (problem with netlify deployment). </p>
            
            <br />
            <h6>Dashboard</h6>
            {/* Button for creating a new user */}
            <Button color="success" style={{marginRight:"50px", marginTop:"30px"}} onClick={()=>navigate("/create-user")}>Create User</Button>

            {/* Button for going to users page */}
            <Button color="primary" style={{marginLeft:"50px", marginTop:"30px"}} onClick={()=>navigate("/users")}>Users List</Button>
        </Container>

    )
}
