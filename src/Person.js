import React from 'react';

class Person extends React.Component
{
    state={
        fullName:"Osama Amr Osama",
        bio:"A Computer Engineer Student",
        profession:"Student",
        imgSrc:"https://conceptmageg.com/uploads/images/2022/02/image_750x_61faa4db9f456.jpg",
        time: new Date()
    };

    render() {
        return (
            <div>
                <h2>{this.state.fullName}</h2>
                <h3>{this.state.bio}</h3>
                <h4>{this.state.profession}</h4>
                <img style={{width:250}} src={this.state.imgSrc} alt="Profile Photo"></img>
                <h2> {this.state.time.toLocaleTimeString()}</h2> 
            </div>
        ); 
    }
}

export default Person