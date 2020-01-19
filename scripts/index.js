'use strict';

const e = React.createElement;

class TitleMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: true};
    }

    render(){
        if(this.state.visible){
            return e(
                'div', {},
                e(
                    'span',
                    {className: 'h1 thin-text'},
                    '8th Annual'
                ),
                e(
                    'h1',
                    {className: 'bold-text'},
                    'Web Developer Conference'
                )
            )
        }
    }
}

class InfoMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: true};
    }

    render(){
        if(this.state.visible){
            return e(
                'div', 
                {className: 'info'},
                e(
                    'p',
                    {className: 'thin-text'},
                    'Conference Dates'
                ),
                e(
                    'p',
                    {className: 'bold-text'},
                    'April 18-22, 2020',
                    '11 am - 3 pm'
                )
            )
        }
    }
}

class indexMarkup extends React.Component {
    constructor(props){
        super(props);
        this.state = {visible: true};
    }

    render(){
        if(this.state.visible){
            return e(
                'div',
                {className: 'content-container'},
                e(TitleMarkup),
                e(InfoMarkup)
            );
        }
    }
}

const rootContainer = document.querySelector('#root');
ReactDOM.render(e(indexMarkup), rootContainer);