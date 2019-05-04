import React from 'react'
import { Modal, Button } from 'antd';
import Card1 from './Card';

export default class Modal1 extends React.Component {
constructor(props){
  super(props)
}
  
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    
    console.log(this.props.children==='Detalle')
    return (
      <div>
        <Button type="primary" block onClick={this.showModal}>
          {this.props.children}
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            
            <Button key="back" onClick={this.handleCancel}>Cerrar</Button>,
            this.props.children!=='Detalle'?
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Justo asi!
            </Button>:null,
          ]}
        >
        
          <Card1 {...this.props}/>
        </Modal>
        

        
      </div>
    );
  }
}

