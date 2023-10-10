const Modal = ReactBootstrap.Modal;
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, show: false};
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    show = () => {
        this.setState({ show: true });
    };

    hide = () => {
        this.setState({ show: false });
    };

    render() {

        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                &nbsp;&nbsp;
                <button onClick={this.show}>Show modal</button>
                <Modal show={this.state.show} onHide={this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));