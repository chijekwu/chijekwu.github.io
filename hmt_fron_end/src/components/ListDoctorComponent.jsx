import React, { Component } from 'react'
import DoctorService from '../services/DoctorService'


class ListDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                doctors: []
        }
      this.addDoctor = this.addDoctor.bind(this);
      this.editDoctor = this.editDoctor.bind(this);
      this.deleteDoctor = this.deleteDoctor.bind(this);
    }

    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data});
        });
     }
     editDoctor(id) {
         this.props.history.push(`/add-doctor/${id}`);
     }

     addDoctor(){
         this.props.history.push('/add-doctor/-1');
     }

     deleteDoctor(id) {
            DoctorService.deleteDoctor(id).then((response) => {
                this.setState({doctors : this.state.doctors.filter(d => d.id !== id)});
            });


     }
     
    render() {
        return (
            <div>
                 <h2 className="text-center">Doctors Avaliable</h2>
                 <div className = "row">
                     <button className = "btn btn-primary" onClick={this.addDoctor}>Add Doctor</button>
                 </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Speciality</th>
                                <th>Number of Patients</th>
                                <th>Email Address</th>
                                <th>Telephone ext</th>
                                <th>Function</th>
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
                                            <td>
                                                <button onClick={ () => this.editDoctor(doctor.d_id)} className = "btn btn-info">Edit</button>
                                                <button onClick={ () => this.deleteDoctor(doctor.d_id)} className = "btn btn-danger">Delete</button>
                                            </td>
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