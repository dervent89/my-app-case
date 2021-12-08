import React from 'react';
import '../assets/style/components/Button.scss';
import Button from './Button';

export class GenerateSlogan extends React.Component {
    state = {
        value: ''
    };
    handleChange = event => {
        const input = event.target;
        const value = input.value;
        this.setState({value: value});
    };
    generate = () => {
        this.props.onFilter(this.state.value);
    };
    clear = () => {
        document.getElementById('searchInput').value = '';
        this.setState({value: ''});
        this.props.onFilter('');
    };
    render(){
        return (
            <div className="generate_slogan">
                <div className="form-group">
                    <label className="form-label">Word for you slogan</label>
                    <div className="form-input">
                        <input
                            id="searchInput"
                            type="text"
                            autoComplete="off"
                            placeholder="Write here (Example: crazy)"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        {this.state.value.length > 0?
                        <button type="button" className="form-clear-btn" onClick={this.clear}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon-fill" d="M0.63025 0.63028C0.939482 0.321048 1.42866 0.289894 1.77365 0.552457L1.86271 0.63028L6 4.76813L10.1373 0.63028C10.4549 0.312635 10.9568 0.291459 11.299 0.566751L11.3698 0.63028C11.679 0.939512 11.7101 1.42869 11.4391 1.78406L11.3698 1.86274L7.23188 6L11.3698 10.1373C11.6874 10.455 11.7086 10.9568 11.4333 11.299L11.3698 11.3698C11.0605 11.679 10.5713 11.7102 10.216 11.4391L10.1373 11.3698L5.9993 7.23188L1.86271 11.3698C1.54506 11.6874 1.04322 11.7086 0.701011 11.4333L0.63025 11.3698C0.321019 11.0605 0.289864 10.5714 0.560898 10.216L0.63025 10.1373L4.76742 6L0.63025 1.86274C0.312606 1.54509 0.291429 1.04325 0.566721 0.701041L0.63025 0.63028Z"/>
                                <path className="icon-fill" d="M0.471534 0.471083C0.860584 0.0820328 1.47598 0.0427594 1.9103 0.373316L1.92242 0.382543L2.02256 0.470732L6.00038 4.44981L9.97857 0.471093C10.3783 0.0713338 11.0097 0.0448214 11.4404 0.39134L11.4499 0.398984L11.5295 0.470852C11.92 0.86138 11.9563 1.47731 11.6184 1.92041L11.6135 1.92676L11.5295 2.02207L7.55048 5.9999L11.5292 9.97811C11.929 10.3779 11.9555 11.0092 11.609 11.44L11.6013 11.4495L11.5295 11.529C11.1389 11.9195 10.523 11.9559 10.0799 11.6179L10.0736 11.6131L9.97826 11.5291L5.99971 7.55L2.02221 11.5288C1.62245 11.9285 0.991104 11.955 0.56036 11.6085L0.55086 11.6009L0.471303 11.529C0.0807745 11.1385 0.0444299 10.5226 0.382376 10.0795L0.387216 10.0731L0.471215 9.97781L4.44961 5.9999L0.471534 2.02174C0.471533 2.02174 0.471534 2.02174 0.471534 2.02174C0.0717757 1.62198 0.0452727 0.990652 0.391791 0.559909L0.399434 0.550409L0.471534 0.471083ZM4.7678 5.9999L0.630633 10.1372L0.56128 10.2159C0.290247 10.5713 0.321401 11.0605 0.630633 11.3697L0.701393 11.4332C1.0436 11.7085 1.54545 11.6873 1.86309 11.3697L5.99968 7.23178L10.1377 11.3697L10.2164 11.439C10.5717 11.7101 11.0609 11.6789 11.3701 11.3697L11.4337 11.2989C11.709 10.9567 11.6878 10.4549 11.3701 10.1372L7.23226 5.9999L11.3701 1.86264L11.4395 1.78396C11.7105 1.4286 11.6794 0.939413 11.3701 0.630182L11.2994 0.566653C10.9572 0.291361 10.4553 0.312537 10.1377 0.630182L6.00038 4.76803L1.86309 0.630182L1.77403 0.552358C1.42905 0.289796 0.939864 0.32095 0.630633 0.630182L0.567104 0.700943C0.291811 1.04315 0.312988 1.54499 0.630633 1.86264L4.7678 5.9999Z"/>
                            </svg>
                        </button>
                        :''}
                    </div>
                </div>
                <Button variant="blue" text="Generate slogans" disabled={this.state.value.length < 1} clickEvent={this.generate}/>
            </div>
        )
    }
}

export default GenerateSlogan;