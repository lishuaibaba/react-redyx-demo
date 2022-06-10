import React, { Component } from 'react'
import { nanoid } from "nanoid"
import { createAddPersonAction } from "../../redux/actions/person"
import { connect } from 'react-redux'

class Person extends Component {
    getUser = () => {
        const name = this.inputName.value;
        const age = this.inputAge.value;
        const personObj = { id: nanoid(), name, age };
        this.props.addPerson(personObj);
        this.inputName.value = "";
        this.inputAge.value = "";
    }
    render() {
        return (
            <div>
                <h1>我是Person组件,上方组件当前求和为：{this.props.he}</h1>
                <input ref={c => this.inputName = c} type="text" placeholder='输入名字' />
                <input ref={c => this.inputAge = c} type="text" placeholder='输入年龄' />
                <button onClick={this.getUser}>添加</button>
                <ul>
                    {
                        this.props.personArr.map(item => {
                            return (
                                <li key={item.id}>
                                    名字{item.name} -- 年龄{item.age}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ personArr: state.personAll,he:state.count }),
    {
        addPerson: createAddPersonAction
    }
)(Person)
