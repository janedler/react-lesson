/**
 * Created by janedler on 2018/7/31.
 */

import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick,completed,text}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
    </li>
)

Todo.propTypes = {
    onclick:PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
}

export default Todo


