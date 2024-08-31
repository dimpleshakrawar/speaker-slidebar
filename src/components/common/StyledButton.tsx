import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

interface StyledButtonProps extends ButtonProps {
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  fontSize?: string;
  activeBackgroundColor?: string
  activeTextColor?: string;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => !['backgroundColor', 'textColor', 'hoverBackgroundColor', "activeTextColor" ,'hoverTextColor',"activeBackgroundColor"].includes(prop as string),
})<StyledButtonProps>`
  && {
    border-radius: 4px;
    text-transform: none;
    font-size: ${(props) => props.fontSize || '14px'};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};

    &:hover {
      background-color: ${(props) => props.hoverBackgroundColor};
      color: ${(props) => props.hoverTextColor};
    }

    &:active {
    background-color: #0056b3; /* Darker background color on click */
    color: #d3d3d3;            /* Lighter text color on click */
    }

    &:focus {
      outline: none;
      background-color:  ${(props) => props.activeBackgroundColor || ""} ; /* Darker background color on focus */
      color:  ${(props) => props.activeTextColor || ""};;            /* Lighter text color on focus */
    }
  }
`;
;

export default StyledButton;
