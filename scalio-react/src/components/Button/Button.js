import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 10px 20px;
	background: #000;
	color: #fff;
	border-radius: 100px;
	cursor: pointer;
	transition: all .2s linear;

	&:hover {
    background: #646464;
    color: #fff;
  }
`;

const Button = (props)=>{

	// console.log(props);

	return(
		<StyledButton onClick={props.btnAttr.click}> {props.btnAttr.text} </StyledButton>
	)
}

export default Button;