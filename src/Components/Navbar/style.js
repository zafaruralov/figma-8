import styled from 'styled-components'

export const Menu = styled.div`
position: relative;
`
export const Left = styled.div`
    width: 300px;
    height: 100vh;
`
export const Fast = styled.div`
    width: 300px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: space-evenly;
`
export const LeftImg = styled.div`
`
export const RightText = styled.div`
`
export const VrL = styled.div`
z-index: 111;
position: absolute;
left: 0%;
right: 98.67%;
top: 30%;
height: 340px;
width: 4px;
bottom: 40.67%;
background: #FCB600;
border-radius: 0px 2px 2px 0px;
`
export const Container = styled.div`
padding-left: 0px;
user-select: none;
padding-top: 15px;

.icon{
    width: 30px;
    height: 20px;

}

.exit{
    padding: 30px 26px;
    cursor: pointer;
    :active{
        transform: scale(0.98);
    }
}
.exit span{
    padding-left: 12px;
}
`
export const Wrap = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
padding-left: 20px;
margin: 20px 0px;
cursor: pointer;
padding: 10px 26px;

:active{
    transform: scale(0.98);
}

:hover{
   background: #FCB600;
   border-radius: 0px 6px 6px 0px;
   padding: 10px 20px;
   color: white;
}
`
Wrap.Title = styled.div`
font-family: 'SFProDisplay';
font-size: 18px;
`

