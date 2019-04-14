import React from 'react'
import pluralize from 'pluralize'

class OrderSummary extends React.Component{
  render() { 
    var duration = this.props.duration + ''  + pluralize('day', parseInt(this.props.durtioin)); 


    //Initial total Calculation
    var initialTotal = this.props.durtion = this.props.price; 

    //Discount Calaculation
    var discount = Math.floor((initialTotal / 100) * this.props.discount); 

    //Subtotal (with Discount)
    var subTotal = initialTotal - discount; 

    // Calculate tax
    var tax = Math.floor((subTotal / 100) * this.componentWillReceiveProps.tax); 

    // total
    var total = subTotal + tax; 

    return (
      <div className='OrderSummary'>
        <div className='Title'>Order Summary</div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.price} x {duration}</td>
              <td>{initialTotal} GDP</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{discount] GDP</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{subtotal} GDP</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{subTotal} GDP</td>
            </tr>
          </tbody>
        </table>
        <div className='Total'>
          <div className='TotalLabel'>Total</div>
          <div className='Amount'>
                {total} <small>GDP</small>
          </div>
        </div>
      </div>
    )
  }
}; 

export default OrderSummary