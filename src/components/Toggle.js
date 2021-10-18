import styled from '@emotion/styled';
import useToggle from '../hooks/useToggle';

const ToggleContainer = styled.label`
  display: block;
  cursor: pointer;
  user-select: none;
`

const ToggleSwitch = styled.div`
  width: 40px;
  height: 24px;
  padding: 2px;
  border-radius: 12px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background .2s ease-out;

  &::after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: left .2s ease-out;
  }
`

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: lightgreen;
  }

  &:checked + div::after {
    left: calc(100% - 20px);
  }
`

const Toggle = ({ on = false, onChange, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e) => {
    toggle();
    onChange && onChange(e);
  }
  
  return (
    <ToggleContainer {...props}>
      <ToggleInput type="checkbox" onChange={handleChange} checked={checked} />
      <ToggleSwitch />
    </ToggleContainer>
  )
};

export default Toggle;