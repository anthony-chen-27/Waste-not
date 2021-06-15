import React from 'react'
import PostMap from './post_map'


class Postform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', description: '', pos: undefined}
        this.update = this.update.bind(this)
        this.updatePos = this.updatePos.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        const {name, description, pos} = this.state
        if (name === '' || description === '' || (!pos)) {
            return
        } else {
            //Submit form
            console.log("submitting form")
        }
    }

    update(e, v) {
        e.preventDefault()
        this.setState({[v]: e.target.value})
    }

    updatePos(val) {
        this.setState({pos: val})
    }

    render() {
        return (
            <div>
                <h3>Double click anywhere on the map to add a marker, drag marker to adjust</h3>
                <PostMap updatePos={this.updatePos}/>
                <div style={{position: 'relative', top: '500px'}}>
                    <label> Name
                        <input type="text" value={this.state.name} onChange={(e) => this.update(e, 'name')}/>
                    </label>
                    <label> Description
                        <textarea value={this.state.description} onChange={(e) => this.update(e, 'description')} >

                        </textarea>
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}


export default Postform