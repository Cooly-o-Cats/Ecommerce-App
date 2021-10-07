import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 1px solid gray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 10px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    font-family: 'Urbanist', sans-serif;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: "2" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    transition: .4s color ease-in-out;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}

    &:hover{
        color: gray;
        transition: .25s color ease-in-out;
    }
`;

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search"/>
                        <SearchIcon style={{color:"dark-gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>

                <Center><Logo>LAMA.</Logo></Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge color="primary" badgeContent={4}>
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
