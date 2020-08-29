import Styled from 'styled-components';

export const CustomWrapper = Styled.div`
    margin: ${props => props.margin || ''};
    padding: ${props => props.padding || ''};
    width: ${props => props.width || ''};
    height: ${props => props.height || ''};
    background-color: ${props => props.backgroundColor || ''};
    display: ${props => props.display || ''};
    align-items: ${props => props.alignItems || ''};
    justify-contnet: ${props => props.justifyContnet || ''};
    flex: ${props => props.flex || ''};
    flex-direction: ${props => props.flexDirection || 'row'};
    pointer-events: ${props => props.pointerEvents || ''};
`;

export const Label = Styled.span`
    font-size: ${props => props.fontSize || '12px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    font-family: ${props => props.fontFamily || ''};
    color: ${props => props.color || ''};
    margin-left: ${props => props.marginLeft || ''};
    margin-right: ${props => props.marginRight || ''};
    text-align: ${props => props.textAlign || '12px'};
    background-color: ${props => props.backgroundColor || '12px'};
`;