import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 10px 20px;
	border: 1px solid #ccc;
	background: #f3f3f3;
	border-radius: 5px;
`;

const Button = (props)=>{

	// console.log(props);

	return(
		<StyledButton onClick={props.btnAttr.click}> {props.btnAttr.text} </StyledButton>
	)
}

export default Button;