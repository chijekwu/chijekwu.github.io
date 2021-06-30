import React, { Component } from 'react'
import DoctorService from '../services/DoctorService';

class CreateDoctorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            practice: '',
            numberOfPatients:null,
            email: '',
            tele: null
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNumberOfPatientsHandler = this.changeNumberOfPatientsHandler.bind(this);
        this.changePracticeHandler = this.changePracticeHandler.bind(this);
        this.changeTeleHandler = this.changeTeleHandler.bind(this);
        this.saveDcotor = this.saveDcotor.bind(this);
    }

    componentDidMount(){

        if(this.state.id === -1){
            return;
        }
        else{
            DoctorService.getDoctorById(this.state.id).then((res) => { 
                let doctor = res.data;
                this.setState({
                    name: doctor.name,
                    practice: doctor.practice,
                    numberOfPatients: doctor.numberOfPatients,
                    email: doctor.email,
                    tele: doctor.tele
                });
            });
        }

    }
    saveDcotor = (e) =>{
        e.preventDefault();
        let doctor = {name: this.state.name, practice: this.state.practice, numberOfPatients: this.state.numberOfPatients, email: this.state.email, tele: this.state.tele};
        console.log('doctor => ' + JSON.stringify(doctor));

        if(this.state.id === -1){
            DoctorService.createDoctor(doctor).then(res => {
                this.props.history.push('/doctors');
            });
        }
        else{
            DoctorService.updateDoctor(doctor, this.state.id).then(res => {
                this.props.history.push('/doctors');
            })
        }
        
    }
    changeNameHandler = (e) => {
        this.setState({name: e.target.value});
    }

    changePracticeHandler = (e) => {
        this.setState({practice: e.target.value});
    }

    changeNumberOfPatientsHandler = (e) => {
        this.setState({numberOfPatients: e.target.value});
    }

    changeEmailHandler = (e) => {
        this.setState({email: e.target.value});
    }

    changeTeleHandler = (e) => {
        this.setState({tele: e.target.value});
    }
    
    cancel(){
        this.props.history.push("/doctors");
    }

    getTitles(){
        if(this.state.id === -1){
            return <h2 className="text-center">Add New Doctor</h2>
        }
        else{
            return <h2 className="text-center">Update Doctor</h2>
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitles()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Practice: </label>
                                        <input placeholder="Practice" name="practice" className="form-control"
                                            value={this.state.practice} onChange={this.changePracticeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Number of Patients: </label>
                                        <input placeholder="Number of Patients" name="numberOfPatients" className="form-control"
                                            value={this.state.numberOfPatients} onChange={this.changeNumberOfPatientsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>email: </label>
                                        <input placeholder="email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Telephon Ext: </label>
                                        <input placeholder="telephone ext" name="tele" className="form-control"
                                            value={this.state.tele} onChange={this.changeTeleHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveDcotor}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default CreateDoctorComponent; 