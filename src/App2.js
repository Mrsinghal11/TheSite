import { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

class App2 extends Component{
    constructor(){
       super();
       this.state = {
          arr : []
       }
    }

    //componentDidMount() is the life cycle hook used to make the GET Requests.
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
             .then((posRes)=>{
                console.log(posRes);
                this.setState({
                   arr : posRes.data
                })
             },(errRes)=>{
              console.log(errRes);
        });
    };

    render(){
      return(
          <Container fluid className="mt-5">
              <Table bordered
                     hover
                     striped
                     size="sm"
                     variant="dark">
                  <thead>
                      <tr>
                          <th>SNO</th>
                          <th>NAME</th>
                          <th>EMAIL</th>
                          <th>WEBSITE</th>
                          <th>PHONE NUMBER</th>
                          <th>CITY</th>
                      </tr>
                  </thead>
                  <tbody>
                       {this.state.arr.map((element,index)=>(
                          <tr key={index}>
                              <td>{index+1}</td>
                              <td>{element.name}</td>
                              <td>{element.email}</td>
                              <td>{element.website}</td>
                              <td>{element.phone}</td>
                              <td> {element.address.city}</td>
                            
        
                          </tr>
                       ))}
                  </tbody>
              </Table>
          </Container>
      )
    }

};
export default App2;