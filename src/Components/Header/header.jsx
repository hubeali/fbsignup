import React, { useState } from 'react';
import './header.css';
import facebook from '../../assects/images/facebook.svg';
const FaceBook = () => {
  const [FirstUserName, SetFIrstUserName] = useState('');
  const [ShowFirstNameError, SetFirstNameError] = useState(false);
  const [FIrstNameMessage, SetFIrstNameMessage] = useState('Enter your first name ');

  const [EnterYourSurName, SetYourSurName] = useState('');
  const [ShowSurNsmeError, SetSurNameError] = useState(false);
  const [SurNameMessage, SetFIstNameMessage] = useState('Enter your surname ');

  const [UserEmailMobileNmbr, SetUserEmailMobileNbr] = useState('');
  const [ShowEmailMobileError, SetShowEmailMobileNbr] = useState(false);
  const [EmailMobileNbrMessage, SerEmailMobileNbrMessage] = useState('Enter your email addres or phone');


  const [UserPassword, SetUserPassword] = useState('');
  const [ShowUserPasswordError, SetShowUserPasswordError] = useState(false);
  const [UserPasswordMessage, SetUserPasswordMessage] = useState('Enter your password ');






  const UserFirstNameHandlar = (e) => {
    SetFIrstUserName(e.target.value)
    if (FirstUserName !== "") {
      SetFIrstNameMessage('Looks Good');

    }

  };

  const UserSurNameHandlar = (e) => {
    SetYourSurName(e.target.value);
    if (EnterYourSurName !== "") {
      SetFIstNameMessage('Looks Good');
    }
  };

  const UserEmailHandlar = (e) => {
    SetUserEmailMobileNbr(e.target.value);
    if (UserEmailMobileNmbr !== "") {
      SerEmailMobileNbrMessage('Looks Good');
    }
  };

  const UserPasswordHandlar = (e) => {
    SetUserPassword(e.target.value);
    if (UserPassword !== "") {
      SetUserPasswordMessage('Looks Good');
    }
  };
  console.log(FIrstNameMessage);

  const UserSubmitHandlar = (e) => {
    e.preventDefault();

    if (FirstUserName === '') {
      SetFirstNameError(true);
    }
    if (EnterYourSurName === '') {
      SetSurNameError(true);
    }
    if (UserEmailMobileNmbr === '') {
      SetShowEmailMobileNbr(true);
    }
    if (UserPassword === '') {
      SetShowUserPasswordError(true);
    }
  };

  return (



    <div className=' mt-5 mb-5 d-flex justify-content-center'>



      <form onSubmit={UserSubmitHandlar}>
        <img src={facebook} width={350} alt="" />
        <h2 className='mb-3 ms-4'>Create a new account</h2>
        <p className='text-center'>It's quick and easy</p>
        <div className='inpu'>

          <div>
            <input value={FirstUserName} onChange={UserFirstNameHandlar} type='text' placeholder='First Name' />
            {ShowFirstNameError && <p className={` ${FIrstNameMessage === "Looks Good" ? "; text-color" : ""}`}>{FIrstNameMessage}</p>}

          </div>
          <div>

            <input value={EnterYourSurName} onChange={UserSurNameHandlar} type='text' className='ms-1' placeholder='SurName' />
            {ShowSurNsmeError && <p className={` ${SurNameMessage === "Looks Good" ? "; text-color" : ""}`}>{SurNameMessage} </p>}
          </div>
        </div>

        <div>

          <input value={UserEmailMobileNmbr} onChange={UserEmailHandlar} type='text' placeholder='Mobile number or email address' />
          {ShowEmailMobileError && <p className={` ${EmailMobileNbrMessage === "Looks Good" ? "; text-color" : ""}`}>{EmailMobileNbrMessage} </p>}

        </div>
        <div>

          <input value={UserPassword} onChange={UserPasswordHandlar} type='password' placeholder='New password' />
          {ShowUserPasswordError && <p className={` ${UserPasswordMessage === "Looks Good" ? "; text-color" : ""}`}>{UserPasswordMessage}</p>}

        </div>


        <input type='submit' value='Sign Up' className='btn-color' />

      </form>
    </div>




  );
};

export default FaceBook;