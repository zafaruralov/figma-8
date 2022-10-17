import React, { useContext } from 'react'
import './Navbar.css'
import './style'
import miniLogo from '../../assets/Bitmap.svg'
import Chiqish from '../../assets/log-out.png'

import { Menu, Left, Fast, LeftImg, RightText, VrL, Container, Wrap } from '../Navbar/style'
import { dataCategory } from '../../data/data'
import { marketInfo } from '../../Context'

const Navbar = () => {
    // const {type, setType} = useContext(marketInfo)
  return (
    <Menu>
        <Left>
            <VrL />
            <Fast>
                <LeftImg>
                    <img className='realImg' src={miniLogo} alt="" />
                </LeftImg>                
                <RightText>
                    <h1 className='fast_food'>Fast Food</h1>
                    <span className='online'>Online maxsulot sotuvi</span>
                </RightText>
            </Fast>
            <Container>
                {
                    dataCategory.length > 0 && dataCategory.map((val) => (
                       <Wrap key={val.id}
                        // onClick={() => setType(true)}
                        // style={type ? {backgroundColor: '#FCB600',
                        // borderRadius:'0px 6px 6px 0px',
                        // padding: '18px 20px',
                        // color: 'white'} : {}}
                        // isClick={type}
                        >
                        
                            <val.icons className='icon'/>
                            <Wrap.Title>
                                {val.title}
                            </Wrap.Title> 

                       </Wrap>
                    ))
                }
                <div className="exit">
                    <img src={Chiqish} alt="" />
                    <span>Chiqish</span>
                </div>
            </Container>
        </Left>
    </Menu>
  )
}

export default Navbar