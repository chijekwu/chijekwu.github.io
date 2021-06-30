import React, { Component } from 'react'
import DoctorService from '../services/DoctorService'

export default class ViewDocDetailComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            doctor: []
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
    }

    componentDidMount() {
        DoctorService.getDoctorById(this.state.id).then((res) => {
            this.setState({doctor: res.data});
        });
    }

getDoctDetails = (e) => {
    e.preventDefault(); 
    DoctorService.getDoctDetails(this.state.id).then(result => {
        this.setState({doctor: result.data});
    })

}
changeIdHandler = (e) => {
    this.setState({id: e.target.value});
}
    render() {
        return (
            <div>
                <div className="search">
                    <input type="number" placeholder="Search" value={this.state.id} onChange={this.changeIdHandler} />
                    <button className="btn btn-info" onClick={this.getDoctDetails.bind(this)}>Search</button>
                </div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">{this.state.doctor.name} Page</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Name: </label>
                            <div>{this.state.doctor.name}</div>
                        </div>
                        <div className="row">
                            <label>Speciality: </label>
                            <div>{this.state.doctor.practice}</div>
                        </div>
                        <div className="row">
                            <label>Pateints Count: </label>
                            <div>{this.state.doctor.numberOfPatients}</div>
                        </div>
                        <div className="row">
                            <label>Email: </label>
                            <div>{this.state.doctor.email}</div>
                        </div>
                        <div className="row">
                            <label>Telephone: </label>
                            <div>{this.state.doctor.tele}</div>
                        </div>
                    </div>
                </div>
                <h2>{}</h2>
            </div>
        )
    }
}
