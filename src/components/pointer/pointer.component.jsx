import { ReactComponent as PointerSVG } from '../../assets/pointer.svg';
import styled, { keyframes } from 'styled-components';

const goDownKeyFrame = (start, end) => {
    const startPos = (start - 1) * 4;
    const endPos = end==4?(end - 1) * 4:(end - 1) * 4.2;
    if (endPos > startPos) {
        return keyframes`
        0%{
                top: ${startPos}rem;           
                transform:rotate(90deg);             
        }
        60%{
            top:${endPos}rem;
            transform: rotate(90deg);
        }
        70%{
            top:${endPos - 0.7}rem;
            transform: rotate(90deg);
        }
        80%{
            top:${endPos}rem;
            transform: rotate(90deg);
        }
        90%{
            top:${endPos - 0.5}rem;
            transform: rotate(90deg);
        }
        100%{
            top:${endPos}rem;
            transform: rotate(90deg);
        }
    `
    } else {
        return keyframes`
        0%{
            top: ${startPos}rem;           
            transform:rotate(90deg);
           
        }

        50%{
            op: ${(startPos+endPos)/2}rem;           
            transform:rotate(90deg);
        }
        100%{
            top: ${endPos}rem;           
            transform:rotate(90deg);
        }
        `
    }

};

const Pointer = styled(PointerSVG)`
    height:50px;
    weight:50px;
    top:1rem;
    left:3rem;
    transform:rotate(90deg);
    image-size:contain;
    position:absolute;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-name: ${({ step }) =>
        goDownKeyFrame(step.start, step.end)};
`;

export default Pointer;