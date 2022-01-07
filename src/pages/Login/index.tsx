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
                <img src="https://i.pinimg.com/originals/4f/c2/55/4fc255cdafd1ba1f74d792cc2e7f00d3.png" alt="Slack logo" />
                {/* <h2>Login</h2> */}
                <ButtonLogin onClick={singIn}>
                    <FcGoogle size={25} />
                    Entrar com o Gogle
                </ButtonLogin>
            </LoginInnerContainer>
        </ContainerLogin>
    )
}

export default Login
