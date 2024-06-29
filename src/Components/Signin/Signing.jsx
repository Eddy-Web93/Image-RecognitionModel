import React from 'react'
import "./Signing.css"

const Signing = (props) => {
  return (
    <main className="br3 mw7 center shadow-5 pa4 black-80">
        <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f9" htmlFor="email-address">Email</label>
                <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100 email" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f9" htmlFor="password">Password</label>
                <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="">
             <input 
             onClick={() => props.check("home")}
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
             type="submit" 
             value="Sign in" />
            </div>
            <div className="lh-copy mt3">
            <a href="#0" onClick={() => props.check("register")} className="f6 pointer link dim black db">Register</a>
            </div>
        </div>
    </main>

  )
}

export default Signing