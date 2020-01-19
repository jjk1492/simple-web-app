'use strict';

class TitleMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    render() {
        if (this.state.visible) {
            return (
                <div>
                    <span className='h1 thin-text'>8<sup>th</sup> Annual</span>
                    <h1 className="bold-text">Web Developer Conference</h1>
                </div>
            );
        }


    }
}

class InfoMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    render() {
        if (this.state.visible) {
            return (
                <div className='info'>
                    <p className='thin-text'>Conference Dates</p>
                    <p className='bold-text'>
                        April 18-22, 2020<br />
                        11 am - 3 pm
                    </p>
                </div>
            );
        }
    }
}

class CTAMarkup extends React.Component {
    constructor(props){
        super(props);
        this.state = {visible: true};
    }

    render(){
        if( this.state.visible ){
            return(
                <div className='cta'>
                    <button className='btn btn-xl'>Get my tickets</button>
                </div>
            );
        }
    }
}

class IndexMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    render() {
        return (
            <div className='content-container'>
                <TitleMarkup />
                <InfoMarkup />
                <CTAMarkup />
            </div>
        );
    }
}


let domContainer = document.querySelector('#root');
ReactDOM.render(<IndexMarkup />, domContainer);