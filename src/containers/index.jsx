import React from 'react'
import { connect } from 'react-redux'


class Index extends React.Component{
    render(){
        return <div className="wrap">
                    123
               </div>
    }
}




const mapStateToProps = (store) => {
    return store.shopList
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)