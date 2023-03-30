import { Box, styled } from '@mui/material';
import backImage from '../assests/images/bg2.jpg'
import Header from '../Components/Header';

function Home() {

    const Component = styled(Box)({
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        width: '65%'
    })

    const Image = styled(Box)({
        backgroundImage: `url(${backImage})`,
        width: '27%',
        height: '80%',
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    })

    const BoxStyled = styled(Box)({
        width: '73%',
        height: '80%'
    })

    return (
        <div>
            <Component>
                <Image />
                <BoxStyled>
                    <Header />
                </BoxStyled>
            </Component>
        </div>
    );
}

export default Home;
