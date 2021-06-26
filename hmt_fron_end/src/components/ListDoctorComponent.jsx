import React, { Component } from 'react'
import DoctorService from '../services/DoctorService'


class ListDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                doctors: []
        }
       /*  this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.del eteEmployee = this.deleteEmployee.bind(this);*/
    }

    /* deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    } */

    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data});
        });
     }
/*
    addEmployee(){
        this.props.history.push('/add-employee/_add');
    } */

    render() {
        return (
            <div>
                 <h2 className="text-center">Doctors Avaliable</h2>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Practice</th>
                                <th>Number of Patients</th>
                                <th>Email Address</th>
                                <th>Telephone ext</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctors.map(
                                        doctor => 
                                        <tr key = {doctor.d_id}>
                                            <td>{doctor.d_id}</td>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.practice}</td>
                                            <td>{doctor.numberOfPatients}</td>
                                            <td>{doctor.email}</td>
                                            <td>{doctor.tele}</td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}


export default ListDoctorComponent 