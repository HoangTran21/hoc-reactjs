import React from 'react';

function Login() {
    const isLogin = true;
    return (
        <>
          {isLogin ?(
            <>
            <div>User Information</div>
            </>
          ):(
            <>
            <div>Login Form, Register button</div>
            </>
          )}

          {isLogin && <div>Avatar</div>} 
          {/* &&: Nếu đúng sẽ trả "Avatar", không thì sẽ không trả gì */}
        </>
    );
}

export default Login;