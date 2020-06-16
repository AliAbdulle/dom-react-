import React from 'react'

function Info() {
constructor(){
    super( props);
    this.state = {
        name: 'ALi'
    }
}
return (
    <section>
        <h1>Profile Info</h1>
        <p> Hello, user! Tons of useful info here....</p>
    </section>
)
}
export default Info