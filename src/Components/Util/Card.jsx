import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default function Card1(props){
    
     return  <center><Card
    className="col-md-8"
    cover={<center><img alt="example" className="col-md-12" src={props.imgUrl} /></center>}
  >
    <Meta
      
      title={props.desc}
      
    />
  </Card></center>
}
