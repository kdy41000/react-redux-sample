import React,{ useState } from 'react'
import { connect } from 'react-redux'  //스토어를 사용하기 위해 불러옴
import { addView } from '../redux/index'

const Views = ({count, addView}) => {
    const [number, setNumber] = useState(1);
    return (
        <div className="items">
            <p>조회 수: {count}</p>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => addView(number)}>조회하기</button>
        </div>
    )
}

const mapStateToProps = ({views}) => {
    return {
        count: views.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addView: () => dispatch(addView())
//     }
// }
const mapDispatchToProps = {
    addView: (number)=> addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views);