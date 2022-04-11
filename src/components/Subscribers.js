import React from 'react'
import { connect } from 'react-redux'  //스토어를 사용하기 위해 불러옴
import { addSubscriber } from '../redux/index'

const Subscribers = ({count, addSubscriber}) => {
    return (
        <div className="items">
            <p>구독자 수: {count}</p>
            <button onClick={() => addSubscriber()}>구독하기</button>
        </div>
    )
}

const mapStateToProps = ({subscribers}) => {
    return {
        count: subscribers.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }
const mapDispatchToProps = {
    addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);