import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firstNameChanged, lastNameChanged, emailChanged, passwordChanged, loginUser, signUpUser } from '../../store/user/actions'


//

class SignUp extends Component {
  constructor( props ) {
    super( props )

console.log( 'thisis the props from the constructor>>>>>',props )
this.onFirstNameChanged = this.onFirstNameChanged.bind( this )
this.onLastNameChanged = this.onLastNameChanged.bind( this )
this.onEmailChange = this.onEmailChange.bind( this )
this.onPasswordChange = this.onPasswordChange.bind( this )
  }


  onFirstNameChanged=( event )=> {
    console.log( 'event', event.target.value )
    this.props.firstNameChanged( event.target.value )
  }

  onLastNameChanged=( event )=> {
    console.log( 'eventfor LAST NAME', event )
    this.props.lastNameChanged( event.target.value )
  }

  onEmailChange=( event )=> {

    this.props.emailChanged( event.target.value )
  }

  onPasswordChange=( event ) =>{
    this.props.passwordChanged( event.target.value )
  }

  onButtonPress=() =>{


    this.props.signUpUser( this.props.fname, this.props.lname, this.props.email, this.props.password )
  }

  renderError=()=> {
    if ( this.props.error ) {
      return (
        <div>
          <p style={ styles.errorTextStyle }>
            { this.props.error }
          </p>
        </div>
      )
    }
  }

  renderButton() {
    return (
      <button style={styles.signUpButtonStyle} onClick={ this.onButtonPress}>
        <p style={styles.signUpTextStyles}>Sign Up</p>
      </button>
    )

  }


  render() {
    const { viewStyles, textInputStyles, emailTextStyles, passwordTextStyles,
            signUpTextStyles, signUpButtonStyle } = styles

    return (
      <div style={viewStyles}>
      <div
        style={{height:'100%',width:'100%',justifyContent: 'center',
        alignItems: 'center',}}>
        <p style={emailTextStyles}>First Name</p>
        <input
          style={textInputStyles}
          placeholder='John'
          autoCapitalize="none"
          onChange={ this.onFirstNameChanged}
          value={ this.props.fname }/>

        <p style={emailTextStyles}>Last Name</p>
        <input
          style={textInputStyles}
          placeholder='Doe'
          autoCapitalize="none"

          onChange={ this.onLastNameChanged}
          value={ this.props.lname }/>

        <p style={emailTextStyles}>Email</p>
        <input
          style={textInputStyles}
          placeholder='example@email.com'
          autoCapitalize="none"
          onChange={ this.onEmailChange }
          value={ this.props.email }/>

        <p style={passwordTextStyles}>Password</p>
        <input style={textInputStyles}
          placeholder='password'
          type= 'password'
          autoCapitalize="none"
          onChange={ this.onPasswordChange }
          value={ this.props.password }
        />



        { this.renderError() }
        { this.renderButton()}
        </div>
      </div>
    )
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyles: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginTop: 1,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#982D37'
  },
  emailTextStyles: {
    alignSelf: 'flex-start',
    marginTop: 30,
    marginLeft: 40,
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600'
  },
  passwordTextStyles: {
    alignSelf: 'flex-start',
    marginTop: 30,
    marginLeft: 40,
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpTextStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  signUpButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#982D37',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#982D37',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30
  }
}

function mapStateToProps( state ) {
  console.log( 'thisis the STATE>>',state.userRD.user )
    return ( state.userRD.user ?
      {
        fname : state.userRD.user.fname,
        lname : state.userRD.user.lname,
        email : state.userRD.user.email,
        password: state.userRD.user.password,

      }
    :  {
        fname:'',
        lname:'',
        email:'',
        password:''
      } )
}

export default connect( mapStateToProps, {
  firstNameChanged, lastNameChanged, emailChanged, passwordChanged, loginUser, signUpUser
} )( SignUp )
