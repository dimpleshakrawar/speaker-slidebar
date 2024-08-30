import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

interface StyledButtonProps extends ButtonProps {
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  fontSize?: string;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => !['backgroundColor', 'textColor', 'hoverBackgroundColor', 'hoverTextColor'].includes(prop as string),
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
  }
`;
;

export default StyledButton;
