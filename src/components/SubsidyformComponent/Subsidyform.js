import React,{ Component} from 'react';

import Userdetailform from './userdetailform/userdetailform';
import Subsidydetailform from './subsidydetailform/subsidydetailform';
import Documentuploadform from './Documentuploadform/documentuploadform';
import Confirm from './Confirm/confirm';
import Success from './Success/success';


class Subsidyform extends Component{
    state = {
        step: 1,
        FirstName:'',
        LastName:'',
        FatherName:'',
        Age:'',
        Sex:'',
        Occupation:'',
        Address:'',
        Aadhar :'',
        phone:'',
        Maritalstatus:'',
        Annualincome:'',
        Priority:'',
        Subsidytype:'',
        Investedamount:'',
        Loanamount:'',
        Landarea:'',
        Additionaldetail:'',
        Loanaccountnumber:'',
        Accountholdername:'',
        Bankname:'',
        Branchname:'',
        IFSCcode:'',
        PAN:'',
        Aadharcard:'',
        PANcard:'',
        Bankpassbook:'',
        Incomecerti:'',
        Cropregistercerti:'',
        Landcerti:'',
        Photo:'',
        Signature:''
    }

    nextstep = () => {
        const {step} =this.state;
        this.setState({
            step: step + 1
        });
    }

    prevstep = () => {
        const {step} =this.state;
        this.setState({
            step: step - 1
        });
    }

    handlechange = input => e => {
        this.setState({[input]: e.target.value});
    }
    onSubmit=()=>{
        console.log(this.state)
    }

    render(){
        const {step} = this.state;
        const { FirstName, LastName, FatherName, Age, Sex, Occupation, Address, Aadhar, Phone,
                Maritalstatus, Annualincome, Priority, Subsidytype, Investedamount, Loanaccountnumber,
                Loanamount, Landarea, Additionaldetail, Accountholdername, Bankname,
                Branchname, IFSCcode, PAN, Aadharcard, PANcard, Bankpassbook, Incomecerti,
                Cropregistercerti, Landcerti, Photo, Signature} = this.state;
        const  values= {FirstName, LastName,FatherName, Age, Sex, Occupation, Address, Aadhar, Phone,
                Maritalstatus, Annualincome, Priority, Subsidytype, Investedamount, Loanaccountnumber,
                Loanamount, Landarea, Additionaldetail, Accountholdername, Bankname,
                Branchname, IFSCcode, PAN, Aadharcard,  PANcard, Bankpassbook, Incomecerti,
                Cropregistercerti, Landcerti, Photo, Signature}

        switch(step){
            case 1:
                return(
                    <Userdetailform
                        nextstep={this.nextstep}
                        handlechange={this.handlechange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Subsidydetailform
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Documentuploadform
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}/>
                )
            case 5:
                return (
                    this.nextstep(),
                    fetch('http://localhost:3000/subsidy',{
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            FirstName:this.state.FirstName,
                            LastName:this.state.LastName,
                            FatherName:this.state.FatherName,
                            Age:this.state.Age,
                            Sex:this.state.Sex,
                            Occupation:this.state.Occupation,
                            Address:this.state.Address,
                            Aadhar :this.state.Aadhar,
                            phone:this.state.phone,
                            Maritalstatus:this.state.Maritalstatus,
                            Annualincome:this.state.Annualincome,
                            Priority:this.state.Priority,
                            Subsidytype:this.state.Subsidytype,
                            Investedamount:this.state.Investedamount,
                            Loanamount:this.state.Loanamount,
                            Landarea:this.state.Landarea,
                            Additionaldetail:this.state.Additionaldetail,
                            Loanaccountnumber:this.state.Loanaccountnumber,
                            Accountholdername:Accountholdername,
                            Bankname:this.state.Bankname,
                            Branchname:this.state.Branchname,
                            IFSCcode:this.state.IFSCcode,
                            PAN:this.state.PAN,
                            Aadharcard:this.state.Aadharcard,
                            PANcard:this.state.PANcard,
                            Bankpassbook:this.state.Bankpassbook,
                            Incomecerti:this.state.Incomecerti,
                            Cropregistercerti:this.state.Cropregistercerti,
                            Landcerti:this.state.Landcerti,
                            Photo:this.state.Photo,
                            Signature:this.state.Signature
                          
                  
                        })
                      })
                
                
                        
                )
   
            case 6:
                return (
                    <Success
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}/>
                )      
              
        }

    }

    
}

export default Subsidyform ;