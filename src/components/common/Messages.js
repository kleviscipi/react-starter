import React from 'react';
import AlertContainer from 'react-alert';
/**********************************************/
//<Messages  messages={this.props.messages} newalert={false}/>

//<Messages  messages={this.props.messages}/>
/***********************************************/
class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 6000,
        transition: 'scale'
    };
    this.time       = typeof this.props.time !=="undefined" ? this.props.time : this.alertOptions.time;
    this._new_alert = typeof this.props.newalert !=="undefined" ? this.props.newalert : true;  //true new alert-react message or false alert old
  }

  showAlert(class_name,message){
   
      this.msg.show(message, {
        time: this.time,
        type: 'success',
        icon: <i className={class_name}></i>
      });
  }
  newAlert(){
   
    if(this.props.messages !=="undefined"){
        if(this.props.messages.success){
            this.props.messages.success.map( (message, i) => this.showAlert('fa text-success fa-check',message) )  
        }else if(this.props.messages.error){
            this.props.messages.error.map( (message, i) => this.showAlert('fa text-success fa-times',message) )  
        }else if(this.props.messages.info){
            this.props.messages.info.map( (message, i) => this.showAlert('fa text-success fa-times',message) )  
        }
    
    }   

  }
  oldAlert(){

    return this.props.messages.success ? (
          <div role="alert" className="alert alert-success">
            {this.props.messages.success.map((message, i) => <div key={i}>{message}</div>)}
          </div>
        ) : this.props.messages.error ? (
          <div role="alert" className="alert alert-danger">
            {this.props.messages.error.map((message, i) => <div key={i}>{message}</div>)}
          </div>
        ) : this.props.messages.info ? (
          <div role="alert" className="alert alert-info">
            {this.props.messages.info.map((message, i) => <div key={i}>{message}</div>)}
          </div>
        ) : null; 
        
  }
  render(){
    this._new_alert==true ? this.newAlert() : null;
    return this._new_alert ==true ? (<div><AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} /></div>) :  this.oldAlert();
  }

}

export default Messages;
