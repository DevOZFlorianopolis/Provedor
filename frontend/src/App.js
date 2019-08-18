// /client/App.js
import React, {Component} from 'react';
import api from './services/api'
class App extends Component {
    // initialize our state
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

    componentDidMount() {
        this.getProviders();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getProviders, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({intervalIsSet: null});
        }
    }

    getProviders  = async () => {
        fetch('http://localhost:3001/api/provider/providers')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    putProvider = (message) => {
        let currentIds = this.state.data.map((data) => data.id);

        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        api.post('http://localhost:3001/api/provider/provider/?id', {
            id: idToBeAdded,
            message: message,
        });
    };

    // our delete method that uses our backend api
    // to remove existing database information
    deleteProvider = (idTodelete) => {
        parseInt(idTodelete);
        let objIdToDelete = null;
        this.state.data.forEach((dat) => {
            if (dat.id == idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        api.delete('http://localhost:3001/api/provider/provider?id', {
            data: {
                id: objIdToDelete,
            },
        });
    };

    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        parseInt(idToUpdate);
        this.state.data.forEach((dat) => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        api.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: {message: updateToApply},
        });
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <ul>
                    {data.length <= 0
                        ? 'Não há dados disponíveis'
                        : data.map((dat) => (
                            <li style={{padding: '10px'}} key={data.message}>
                                <span style={{color: 'gray'}}> id: </span> {dat.id} <br/>
                                <span style={{color: 'gray'}}> data: </span>
                                {dat.message}
                            </li>
                        ))}
                </ul>
                <div style={{padding: '10px'}}>
                    <input
                        type="text"
                        onChange={(e) => this.setState({message: e.target.value})}
                        placeholder="Adicionar provedor"
                        style={{width: '200px'}}
                    />
                    <button onClick={() => this.putProvider(this.state.message)}>
                        ADD
                    </button>
                </div>
                <div style={{padding: '10px'}}>
                    <input
                        type="text"
                        style={{width: '200px'}}
                        onChange={(e) => this.setState({idToDelete: e.target.value})}
                        placeholder="ID do item a deletar"
                    />
                    <button onClick={() => this.deleteProvider(this.state.idToDelete)}>
                        DELETE
                    </button>
                </div>
                <div style={{padding: '10px'}}>
                    <input
                        type="text"
                        style={{width: '200px'}}
                        onChange={(e) => this.setState({idToUpdate: e.target.value})}
                        placeholder="Update por id"
                    />
                    <input
                        type="text"
                        style={{width: '200px'}}
                        onChange={(e) => this.setState({updateToApply: e.target.value})}
                        placeholder="colocar novo valor"
                    />
                    <button
                        onClick={() =>
                            this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                        }
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        );
    }

//Bulma?
//  render() {
//     const { data } = this.state;
//     return (
//       <div>

// <h1 className="title">Bulma</h1>
// <p className="subtitle">
//   Modern CSS framework based on{' '}
//   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
//     Flexbox
//   </a>
// </p>

// <div className="field">
//   <div className="control">
//     <input className="input" type="text" placeholder="Input" />
//   </div>
// </div>

// <div className="field">
//   <p className="control">
//     <span className="select">
//       <select>
//         <option>Select dropdown</option>
//       </select>
//     </span>
//   </p>
// </div>

// <div className="buttons">
//   <a className="button is-primary">Primary</a>
//   <a className="button is-link">Link</a>
// </div>
//       </div>
//     );
//   }
}

// }

export default App;