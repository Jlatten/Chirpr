import React from 'react';

const  SubmitChirp = props => {
    return (
        <>
            < div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={props.handleNewUser}/>
            </div>
            
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder= "Waz up" onChange={props.handleNewMessage}></textarea>
            </div>
            <button type="submit" className="btn btn-sm btn-secondary mb-4" onClick={props.handleSubmit}>submit</button>

        </>
    )
}

export default SubmitChirp