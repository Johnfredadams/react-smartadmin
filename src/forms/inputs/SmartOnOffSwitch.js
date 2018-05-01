import React from 'react'
import _ from 'lodash'
//var React = require('react');
//var _ = require('lodash');

class OnOffSwitch extends React.Component{
    render() {
        let props = this.props;
        let id = props.id || _.uniqueId('on-off-switch');
        let title = props.title
        let onText = props.onText || 'ON';
        let offText = props.offText || 'OFF';
        return (
            <form className="smart-form register-row">
				<fieldset>
						<section>
							<label className="toggle">
                                {title}
                                <input type="checkbox" name={"checkbox-toggle-" + id} id={id} checked={props.checked} readOnly />
                                <i data-swchon-text={onText} data-swchoff-text={offText} onClick={props.onToggle}></i>
                            </label>
						</section>
				</fieldset>
            </form>
        )
    }
};

export default OnOffSwitch;
