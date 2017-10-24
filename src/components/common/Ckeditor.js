import React, { Component } from 'react';
import ReactDOM   from 'react-dom';
import PropTypes  from  'prop-types';

class CKEditor extends React.Component {
  constructor (props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onChange = this.onChange.bind(this)
    this.count=0;
  }

  componentDidMount () {

    let _this = this
    _this._editor = window.CKEDITOR.replace(_this.props.name)
    _this._editor.on('change', _this.onChange)
    _this._editor.on('blur', _this.onChange)

  }

  componentWillReceiveProps (nextProps) {

    this.count++;//solo per la prima volta poi non ci server , perche ongi volta che scriviamo riceviamo i props e ci sovrascrive l'editor
    //sta volta e stabile.
    if (nextProps.textHTML && this.count == 1) {
      this._editor.setData(unescape(nextProps.textHTML))
    }
  }

  onChange () {
    let textHTML = this._editor.getData()
    this.props.onChange(this.props.name, textHTML)
  }

  render () {
    return (
      <textarea
        style={{display: 'none'}}
        rows='10' cols='80'
        id={this.props.name}
        name={this.props.name}
        defaultValue={unescape(this.props.textHTML)}
      />
    )
  }
}

CKEditor.propTypes = {
  name: PropTypes.string,
  textHTML: PropTypes.string,
  onChange: PropTypes.func
}

CKEditor.defaultProps = {
  name: Math.random().toString(),
  textHTML: '',
  onChange: (name, value) => {}
}

export default CKEditor