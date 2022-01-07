import React from 'react'
import { ContainerLogin, LoginInnerContainer, ButtonLogin } from './styles'
import { FcGoogle } from 'react-icons/fc'
import { auth, provider } from '../../firabase';
function Login() {
    const singIn = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err => alert(err.message));
    }

    return (
        <ContainerLogin>
            <LoginInnerContainer>
                <h2>Login</h2> 
                <ButtonLogin onClick={singIn}>
                    <FcGoogle size={25} />
                    Entrar com o Gogle
                </ButtonLogin>
            </LoginInnerContainer>
        </ContainerLogin>
    )
}

export default Login
